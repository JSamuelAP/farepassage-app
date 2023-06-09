import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import { AuthProvider } from "./context/AuthProvider";

function App() {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/settings" element={<Settings />} />
				</Routes>
			</Router>
		</AuthProvider>
	);
}

export default App;
