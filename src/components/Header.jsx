import Button from "./reusable/Button";
import Input from "./reusable/Input";
import Logo from "./reusable/Logo";

function Header() {
	return (
		<header className="py-3 flex justify-between items-center">
			<Logo />

			<form className="flex w-1/2 justify-end">
				<Input
					type="email"
					placeholder="Email or Phone"
					className="w-2/6 mx-1"
				/>
				<Input
					type="password"
					placeholder="Password"
					className="w-2/6 mx-1"
				/>
				<Button className="bg-blue-600 mx-1 my-2 text-white">
					Log in
				</Button>
			</form>
		</header>
	);
}

export default Header;
