import { Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {
	LogoContainer,
	NavLink,
	NavLinks,
	NavigationContainer,
} from './navigation-bar.styles';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../store/user/user.selector';
import { isCartOpenSelector } from '../../store/cart/cart.selector';
import { setCartOpen } from '../../store/cart/cart.action';
import { signOutStart } from '../../store/user/user.action';
const NavigationBar = () => {
	const currentUser = useSelector(userSelector);
	const dispatch = useDispatch();
	const signOut = () => {
		dispatch(signOutStart());
	};
	const isCartOpen = useSelector(isCartOpenSelector);
	const toggleDropdown = () => {
		dispatch(setCartOpen(!isCartOpen));
	};
	return (
		<>
			<NavigationContainer>
				<LogoContainer to='/'>
					<Logo className='logo' />
				</LogoContainer>
				<NavLinks>
					<NavLink to='/shop'>shop</NavLink>
					{currentUser ? (
						<NavLink
							as='span'
							onClick={signOut}
						>
							sign out
						</NavLink>
					) : (
						<NavLink to='/auth'>sign in</NavLink>
					)}
					<CartIcon onClick={toggleDropdown} />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</>
	);
};

export default NavigationBar;
