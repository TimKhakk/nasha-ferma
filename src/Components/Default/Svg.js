const Svg = ({ id, wh }) => {
	return (
		<svg id={id} width={wh} height={wh}>
			<use href={'icons.svg#' + id}></use>
		</svg>
	);
};

export default Svg;
