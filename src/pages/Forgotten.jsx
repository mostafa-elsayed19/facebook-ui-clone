import Button from "../components/reusable/Button";
import FormCard from "../components/reusable/FormCard";
import Input from "../components/reusable/Input";

function Forgotten() {
	return (
		<div className="grow bg-gray-200 flex justify-center items-center">
			<FormCard className={"mx-auto w-full h-4/6 flex flex-col"}>
				<div className="p-4 border-b border-slate-200">
					<h2 className="text-2xl font-bold">Find Your Account</h2>
				</div>
				<div className="py-2 px-4 my-2 border-b border-slate-200">
					<p className="text-xl my-2">
						Please enter your email address or mobile number to
						search for your account.
					</p>
					<Input placeholder="Email or Phone" />
				</div>
				<div className="self-end py-2 px-4">
					<Button className={"bg-gray-200 font-semibold"}>
						Cancel
					</Button>
					<Button className={"bg-blue-500 text-white font-semibold"}>
						Search
					</Button>
				</div>
			</FormCard>
		</div>
	);
}

export default Forgotten;
