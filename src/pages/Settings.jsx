import { useState } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAlert from "../hooks/useAlert";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { actualizarSaldo, actualizarTarifa } from "../firebase/queries";

function Settings() {
	const { user } = useAuth();
	const [AlertSaldo, showAlertSaldo] = useAlert();
	const [AlertTarifa, showAlertTarifa] = useAlert();

	if (!user) return <Navigate to="/" />;
	const [saldo, setSaldo] = useState(user.saldo);
	const [tarifa, setTarifa] = useState(user.tarifa);

	const handleClickCancelar = () => {
		setSaldo(user.saldo);
		setTarifa(user.tarifa);
	};

	const handleClickActualizar = () => {
		setSaldo(Number(saldo));
		setTarifa(Number(tarifa));
		if (!saldo || !tarifa || saldo < 0 || tarifa <= 0) return;

		if (saldo !== user.saldo) {
			actualizarSaldo(user.userID, saldo);
			setSaldo(Number(saldo));
			showAlertSaldo("Saldo actualizado");
		}
		if (tarifa !== user.tarifa) {
			actualizarTarifa(user.userID, tarifa);
			setTarifa(Number(tarifa));
			showAlertTarifa("Tarifa actualizada");
		}
	};

	return (
		<>
			<Navbar />
			<div className="flex min-h-[calc(100vh-57px)] flex-col">
				<main className="mb-14  flex-1 text-neutral-800">
					<div className="container mx-auto max-w-xl px-8">
						<p className="mb-6 mt-16">
							<img
								src={user.fotoURL}
								alt="Foto de perfil del usuario"
								className="mr-2 inline-block h-6 w-6 overflow-hidden rounded-full"
							/>
							{user.nombre}
						</p>
						<form>
							<div className="mb-4">
								<label className="mb-1 block text-sm" htmlFor="input-saldo">
									Saldo
								</label>
								<Input
									placeholder="$ Saldo actual de tu tarjeta"
									id="input-saldo"
									value={saldo}
									handleChange={(value) => setSaldo(value)}
								/>
							</div>
							<div className="mb-6">
								<label className="mb-1 mt-4 block" htmlFor="input-tarifa">
									Tarifa de pasaje
								</label>
								<Input
									placeholder="$ Precio de un pasaje"
									id="input-tarifa"
									value={tarifa}
									handleChange={(value) => setTarifa(value)}
								/>
							</div>
							<div className="flex gap-x-2">
								<div className="basis-1/2">
									<Button
										color="secondary"
										fullWidth={true}
										handleClick={handleClickCancelar}
									>
										Cancelar
									</Button>
								</div>
								<div className="basis-1/2">
									<Button fullWidth={true} handleClick={handleClickActualizar}>
										Actualizar
									</Button>
								</div>
							</div>
						</form>
						<div className="mt-8 flex flex-col gap-2">
							<AlertSaldo />
							<AlertTarifa />
						</div>
					</div>
				</main>
				<Footer />
			</div>
		</>
	);
}

export default Settings;
