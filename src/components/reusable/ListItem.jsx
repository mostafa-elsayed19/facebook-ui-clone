function ListItem({ item }) {
	return (
		<li
			// style={index === 0 ? { padding: "0" } : {}}
			className="pl-4 text-slate-700"
		>
			<span className="hover:border-b hover:border-slate-400 hover:cursor-pointer">
				{item}
			</span>
		</li>
	);
}

export default ListItem;
