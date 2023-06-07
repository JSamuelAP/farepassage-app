import logo from "../assets/logos/Icon vertical.svg";
import Button from "../components/Button";

function Login() {
	return (
		<div className="flex h-screen flex-col items-center justify-center gap-y-6">
			<img src={logo} alt="FarePassage App logo" className="w-[200px]" />
			<Button icon="google" size="big" fullWidth={true}>
				Iniciar sesión
			</Button>
		</div>
	);
}

export default Login;
