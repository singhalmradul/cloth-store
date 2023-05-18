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
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';
const NavigationBar = () => {
	const currentUser = useSelector(selectCurrentUser);
	const dispatch = useDispatch();
	const signOut = () => {
		dispatch(signOutStart());
	};
	const isCartOpen = useSelector(selectIsCartOpen);
	return (
		<>
			<NavigationContainer>
				<LogoContainer to='/'>
					<Logo className='logo' />
				</LogoContainer>
				<NavLinks>
					<NavLink to='/shop'>shop</NavLink>
					{currentUser ? (
						<NavLink as='span' onClick={signOut}>
							sign out
						</NavLink>
					) : (
						<NavLink to='/auth'>sign in</NavLink>
					)}
					<CartIcon/>
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</>
	);
};

export default NavigationBar;
