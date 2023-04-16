import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user-context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';
import {
	LogoContainer,
	NavLink,
	NavLinks,
	NavigationContainer,
} from './navigation.styles';
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
			<NavigationContainer>
				<LogoContainer to='/'>
					<Logo className='logo' />
				</LogoContainer>
				<NavLinks>
					<NavLink to='/shop'>shop</NavLink>
					{currUser ? (
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
