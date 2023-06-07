import Button from "../components/Button";
import Icon from "../components/Icon";

function Login() {
	return (
		<>
			<h1>login</h1>
			<Icon name="home" size="2xl" />
			<Icon name="logout" size="2xl" />
			<Icon name="options" size="2xl" />
			<Icon name="settings" size="base" />
			<Button type="submit" fullWidth={true} icon="google">
				<span>Iniciar sesión</span>
			</Button>
			<Button color="secondary" fullWidth={true} icon="home">
				<span>Iniciar sesión</span>
			</Button>
			<Button size="big" icon="google">
				<span>Iniciar sesión</span>
			</Button>
			<Button size="big" color="secondary">
				<span>Iniciar sesión</span>
			</Button>
		</>
	);
}

export default Login;
