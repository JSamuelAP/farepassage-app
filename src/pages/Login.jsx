import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import logo from "../assets/logos/Icon vertical.svg";
import Button from "../components/Button";

function Login() {
	const { user, login } = useAuth();

	if (user) return <Navigate to="/" />;

	return (
		<div className="container mx-auto max-w-xl px-8">
			<div className="flex h-screen flex-col items-center justify-center gap-y-6">
				<img src={logo} alt="FarePassage App logo" className="w-[200px]" />
				<Button icon="google" size="big" fullWidth={true} handleClick={login}>
					Iniciar sesión
				</Button>
			</div>
		</div>
	);
}

export default Login;
