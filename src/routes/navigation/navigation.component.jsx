import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user-context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';
const NavigationBar = () => {
	const { currUser } = useContext(UserContext);
	const signOut = async () => {
		await signOutUser();
	};
	const { isCartOpen, setCartOpen } = useContext(CartContext);
	const toggleDropdown = () => {
		setCartOpen(!isCartOpen);
	};
	return (
		<>
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
					{currUser ? (
						<span
							className='nav-link'
							onClick={signOut}
						>
							sign out
						</span>
					) : (
						<Link
							className='nav-link'
							to='/auth'
						>
							sign in
						</Link>
					)}
					<CartIcon onClick={toggleDropdown} />
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</>
	);
};

export default NavigationBar;
