/**
 *
 * @param {string} type - type of the input default value "text"
 * @param {string} placeholder - palceholder for the input
 * @param {string} width - specify the width of the input default value "w-full"
 * @param {string} value - the input's value
 * @param {function} setValue - the state function to handle the value
 * @param {string} className - for more tailwind customizations
 * @returns
 */

import { useEffect } from "react";

function Input({
	type = "text",
	placeholder,
	width = "w-full",
	value,
	setValue,
	className,
}) {
	useEffect(() => {
		console.log(value);
	}, [value]);
	return (
		<input
			className={`mx-auto my-2 px-2 py-2 border border-gray-400 rounded focus:outline-blue-400 placeholder:text-slate-600 focus:placeholder:text-slate-400 ${width} ${className}`}
			type={type}
			value={value}
			placeholder={placeholder}
			onChange={(e) => setValue(e.target.value)}
		/>
	);
}

export default Input;
