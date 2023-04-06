import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
const NavigationBar = () => (
	<Fragment>
		<div className='navigation'>
			<Link to='/'>
				<div className='logo-container'>
					<Logo className='logo' />
				</div>
			</Link>
			<div className='nav-links-container'>
				<Link
					className='nav-link'
					to='/shop'
				>
					shop
				</Link>
			</div>
		</div>
		<Outlet />
	</Fragment>
);
export default NavigationBar;
