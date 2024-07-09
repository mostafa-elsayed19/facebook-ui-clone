import Header from "./Header";
import Footer from "./Footer";
import Container from "./reusable/Container";
import Forgotten from "../pages/Forgotten";

function Layout() {
	return (
		<main className="flex flex-col grow min-h-screen">
			<Container>
				<Header />
			</Container>
			<Forgotten />
			<Container>
				<Footer />
			</Container>
		</main>
	);
}

export default Layout;
