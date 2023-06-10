import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";
import Footer from "../components/Footer";

function Settings() {
	const { user } = useContext(AuthContext);

	if (!user) return <Navigate to="/" />;

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
								className="mr-2 inline-block w-6 rounded-full"
							/>
							{user.nombre}
						</p>
						<form>
							<div className="mb-4">
								<label className="mb-1 block text-sm" htmlFor="input-saldo">
									Saldo
								</label>
								<Input
									value={user.saldo}
									placeholder="$ Saldo actual de tu tarjeta"
									id="input-saldo"
								/>
							</div>
							<div className="mb-6">
								<label className="mb-1 mt-4 block" htmlFor="input-tarifa">
									Tarifa de pasaje
								</label>
								<Input
									value={user.tarifa}
									placeholder="$ Precio de un pasaje"
									id="input-tarifa"
								/>
							</div>
							<div className="flex gap-x-2">
								<div className="basis-1/2">
									<Button color="secondary" fullWidth={true} type="reset">
										Cancelar
									</Button>
								</div>
								<div className="basis-1/2">
									<Button fullWidth={true} type={"submit"}>
										Actualizar
									</Button>
								</div>
							</div>
						</form>
					</div>
				</main>
				<Footer />
			</div>
		</>
	);
}

export default Settings;
