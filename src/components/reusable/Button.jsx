/**
 *
 * @param {string} className - for more tailwind customizations
 * @param {string} children - Button text
 * @returns
 */
function Button({ className, children }) {
	return (
		<button className={`${className} ml-2 px-4 py-1 rounded`}>
			{children}
		</button>
	);
}

export default Button;
