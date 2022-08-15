import { AsideMenuComponent } from "./asideMenu.styled"
import { Link } from "react-router-dom"
import { RiLogoutBoxRFill } from 'react-icons/ri'
import { HiUserGroup } from 'react-icons/hi';
import { BsFillCartFill } from 'react-icons/bs'

const AsideMenu = () => {
  return (
    <div>
      <AsideMenuComponent>
        <div>
          <Link to="/" className="logo">DBC</Link>
          <BsFillCartFill className="navItem" />
          <HiUserGroup className="navItem" />
        </div>
        <RiLogoutBoxRFill className="navItem" />
      </AsideMenuComponent>
    </div>
  )
}
export default AsideMenu