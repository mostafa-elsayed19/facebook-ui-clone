function UnorderedList({ border = false, children }) {
	return (
		<ul
			className={`my-2  pb-2 flex flex-wrap ${
				border ? "border-b border-slate-300" : ""
			}`}
		>
			{children}
		</ul>
	);
}

export default UnorderedList;
