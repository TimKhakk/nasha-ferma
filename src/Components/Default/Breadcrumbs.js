import { Link } from 'react-router-dom';

function Breadcrumbs({paths, name}) {
	return (
		<>
			<div className="breadcrumbs">
				<div className="container">

					<div className="breadcrumbs-body">

						<Link to="/" className="breadcrumb">Главная
							<svg className="breadcrumb__arrow" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M3.5502 9.05619C3.41359 8.92226 3.40117 8.71269 3.51295 8.56501L3.5502 8.52271L6.63365 5.50001L3.5502 2.47731C3.41359 2.34339 3.40117 2.13382 3.51295 1.98614L3.5502 1.94383C3.68681 1.80991 3.90059 1.79773 4.05123 1.90731L4.09439 1.94383L7.4498 5.23327C7.58641 5.36719 7.59883 5.57676 7.48705 5.72444L7.4498 5.76675L4.09439 9.05619C3.94411 9.20351 3.70048 9.20351 3.5502 9.05619Z" fill="black"/>
							</svg>
						</Link>
						{paths && paths.map(item => {
							return (
							<Link to={`/${item.path}`} className="breadcrumb">{item.name}
								<svg className="breadcrumb__arrow" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M3.5502 9.05619C3.41359 8.92226 3.40117 8.71269 3.51295 8.56501L3.5502 8.52271L6.63365 5.50001L3.5502 2.47731C3.41359 2.34339 3.40117 2.13382 3.51295 1.98614L3.5502 1.94383C3.68681 1.80991 3.90059 1.79773 4.05123 1.90731L4.09439 1.94383L7.4498 5.23327C7.58641 5.36719 7.59883 5.57676 7.48705 5.72444L7.4498 5.76675L4.09439 9.05619C3.94411 9.20351 3.70048 9.20351 3.5502 9.05619Z" fill="black"/>
								</svg>
							</Link>)
						})}
						<span className="breadcrumb_disabled">{name}</span>
					</div>

				</div>
			</div>
		</>
	);
}

export default Breadcrumbs;
