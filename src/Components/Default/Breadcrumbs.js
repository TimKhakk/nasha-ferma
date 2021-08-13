import { Link } from 'react-router-dom';
import Container from '../Default/Container';

function Breadcrumbs({ paths, name }) {
	return (
		<>
			<div className='breadcrumbs'>
				<Container>
					<div className='breadcrumbs-body'>
						<Link to='/' className='breadcrumb'>
							Главная
							<svg
								className='breadcrumb__arrow'
								width='11'
								height='11'
								viewBox='0 0 11 11'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<use href='icons.svg#breadcrumb-arrow'></use>
							</svg>
						</Link>
						{paths &&
							paths.map(item => {
								return (
									<Link key={item.path} to={`/${item.path}`} className='breadcrumb'>
										{item.name}
										<svg
											className='breadcrumb__arrow'
											width='11'
											height='11'
											viewBox='0 0 11 11'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<use href='icons.svg#breadcrumb-arrow'></use>
										</svg>
									</Link>
								);
							})}
						<span className='breadcrumb_disabled'>{name}</span>
					</div>
				</Container>
			</div>
		</>
	);
}

export default Breadcrumbs;
