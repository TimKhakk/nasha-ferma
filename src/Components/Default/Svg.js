const Svg = ({ id, w, h, color }) => {
	return (
		<svg id={id} width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ fill: color }}>
			<use href={'icons.svg#' + id}></use>
		</svg>
	);
};

export default Svg;
