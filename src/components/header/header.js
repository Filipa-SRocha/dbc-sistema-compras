import { BiUserCircle } from 'react-icons/bi';
import { HeaderComponent } from './header.styled';

const Header = ({ nomeUsuario }) => {
  return (
    <HeaderComponent>
      <span>{nomeUsuario}</span>
      <BiUserCircle />
    </HeaderComponent>
  )
}
export default Header