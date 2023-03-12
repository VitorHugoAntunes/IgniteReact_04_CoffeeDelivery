import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import { CartItem } from '../../../../contexts/CartContext'
import { useCart } from '../../../../hooks/useCart'
import { formatCurrency } from '../../../../utils/formatCurrency'
import {
  ActionContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = formatCurrency(coffeeTotal)
  const { changeCartItemQuantity, removeCartItem } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }
  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }
  function handleRemoveCoffee() {
    removeCartItem(coffee.id)
  }

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} alt="Coffee image" />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionContainer>
            <QuantityInput
              size="small"
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
            />
            <RemoveButton onClick={handleRemoveCoffee}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionContainer>
        </div>
      </div>

      <p>{formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}
