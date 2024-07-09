function FormCard({ className, children }) {
	return (
		<div className={`bg-white rounded-lg shadow-2xl max-w-md ${className}`}>
			{children}
		</div>
	);
}

export default FormCard;
