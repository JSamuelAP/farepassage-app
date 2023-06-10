import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import { descontarPasaje } from "../firebase/queries";

function Home() {
	const { user } = useContext(AuthContext);

	if (!user) return <Navigate to="/login" />;

	return (
		<>
			<Navbar />
			<div className="flex min-h-[calc(100vh-57px)] flex-col">
				<main className="mb-14  flex-1 text-neutral-800">
					<div className="container mx-auto max-w-xl px-8">
						<p className="mt-14">Hola {user.nombre}, tu saldo es de:</p>
						<p className="mt-8 text-center text-7xl text-neutral-700">
							$
							<span className="font-bold text-neutral-800">
								{user.saldo.toFixed(2)}
							</span>
						</p>
						<p className="mb-8 mt-2 text-center">
							<span className="font-bold">
								{Math.floor(user.saldo / user.tarifa)}
							</span>{" "}
							pasajes restantes
						</p>
						<Button
							size="big"
							fullWidth={true}
							handleClick={() => descontarPasaje(user)}
							disabled={user.saldo < user.tarifa}
						>
							Descontar un pasaje
						</Button>
						<form className="mt-16">
							<label className="text-sm" htmlFor="input-recarga">
								Registrar recarga
							</label>
							<div className="mt-1 flex gap-x-2">
								<div className="basis-7/12">
									<Input placeholder="$ Cantidad" id="input-recarga" />
								</div>
								<div className="basis-5/12">
									<Button color="secondary" fullWidth={true} type="submit">
										Registrar
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

export default Home;
