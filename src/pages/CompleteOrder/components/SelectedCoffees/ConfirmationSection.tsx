import { useState } from 'react'
import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { ConfirmationSectionContainer } from './styles'

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal } = useCart()
  const noDelivery = 0

  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatCurrency(cartItemsTotal)
  const formattedCartTotal = formatCurrency(cartTotal)
  const formattedDeliveryPrice = formatCurrency(DELIVERY_PRICE)
  const formattedNoDeliveryPrice = formatCurrency(noDelivery)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>
          R${' '}
          {cartItemsTotal > 0
            ? formattedDeliveryPrice
            : formattedNoDeliveryPrice}
        </RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {cartItemsTotal <= 0 ? '0,00' : formattedCartTotal}
        </RegularText>
      </div>

      <Button text="Confirmar pedido" disabled={cartItemsTotal <= 0} />
    </ConfirmationSectionContainer>
  )
}
