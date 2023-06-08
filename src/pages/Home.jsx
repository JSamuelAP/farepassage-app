import Footer from "../components/Footer";
import Input from "../components/Input";
import Navbar from "../components/Navbar";

function Home() {
	return (
		<>
			<Navbar />
			<div className="container mx-auto max-w-xl px-8">
				<Input placeholder="$ Cantidad" />
			</div>
			<Footer />
		</>
	);
}

export default Home;
