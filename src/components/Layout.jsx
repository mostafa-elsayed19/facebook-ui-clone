import Header from "./Header";
import Footer from "./Footer";
import Container from "./reusable/Container";
function Layout() {
	return (
		<main className="flex flex-col h-screen">
			<Container>
				<Header />
			</Container>
			<div className="grow bg-gray-300">
				<Container>Hello</Container>
			</div>
			<Container>
				<Footer />
			</Container>
		</main>
	);
}

export default Layout;
