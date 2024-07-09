/**
 *
 * @param {string} item - a string of data
 * @param {string} className - for more UI customization
 * @returns
 */

function ListItem({ item, className }) {
	return (
		<li
			// style={index === 0 ? { padding: "0" } : {}}
			className={`pl-4 text-slate-700 ${className}`}
		>
			<span className="hover:border-b hover:border-slate-400 hover:cursor-pointer">
				{item}
			</span>
		</li>
	);
}

export default ListItem;
