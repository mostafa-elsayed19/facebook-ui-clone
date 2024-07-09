function Button({ className, children }) {
	return (
		<button className={`ml-2 px-4 py-1 rounded ${className}`}>
			{children}
		</button>
	);
}

export default Button;