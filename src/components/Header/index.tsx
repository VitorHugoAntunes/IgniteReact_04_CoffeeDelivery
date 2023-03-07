import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/Logo.png'
import { ActionsDiv, NavBar } from './styles'

export function Header() {
  return (
    <NavBar>
      <img src={logo} alt="Coffee Delivery Logo" />
      <ActionsDiv>
        <div className="location">
          <MapPin size={24} weight="fill" />
          Sao Paulo, SP
        </div>
        <button className="cart">
          <ShoppingCart size={24} weight="fill" />
        </button>
      </ActionsDiv>
    </NavBar>
  )
}
