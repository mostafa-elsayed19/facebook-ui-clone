// import { useState } from "react";
import "./index.css"
import Footer from "./components/Footer";
import Login from "./pages/login";
// import Input from "./components/reusable/Input";

function App() {
	return (
		<>
			{/* <Input type="text" placeholder="Email address or phone" />
			<Input type="password" placeholder="Password" /> */}
			<Login/>
			<Footer />
		</>
	);
}

export default App;
