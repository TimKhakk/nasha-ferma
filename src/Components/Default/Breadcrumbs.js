import { Link } from 'react-router-dom';

function Breadcrumbs({paths, name}) {
	return (
		<>
			<div className="breadcrumbs">
				<div className="container">

					<div className="breadcrumbs-body">

						<Link to="/" className="breadcrumb">Главная > </Link>
						{paths && paths.map(item => {
							return <Link to={`/${item.path}`} className="breadcrumb">{item.name} > </Link>
						})}
						<span className="breadcrumb_disabled">{name}</span>
					</div>

				</div>
			</div>
		</>
	);
}

export default Breadcrumbs;
