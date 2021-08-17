const Button = ({ handleClick, clss, children }) => {
	return (
		<button onClick={handleClick} className={'button ' + clss}>
			{children}
		</button>
	);
};

export default Button;
