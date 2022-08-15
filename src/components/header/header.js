import { BiUserCircle } from 'react-icons/bi';
import { HeaderComponent } from './header.styled';

const Header = () => {
  return (
    <HeaderComponent>
      <span>Fulano de tal</span>
      <BiUserCircle />
    </HeaderComponent>
  )
}
export default Header