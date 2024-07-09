/**
 *
 * @param {string} className - for more tailwind customizations
 * @param {data} children - Form card elements
 * @returns
 */

function FormCard({ className, children }) {
	return (
		<div className={`bg-white rounded-lg shadow-2xl max-w-md ${className}`}>
			{children}
		</div>
	);
}

export default FormCard;
