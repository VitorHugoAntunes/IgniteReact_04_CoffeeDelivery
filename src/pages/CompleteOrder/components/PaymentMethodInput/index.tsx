import { CreditCard } from 'phosphor-react'
import { PaymentMethodContainer } from './styles'

export function PaymentMethodInput() {
  return (
    <PaymentMethodContainer>
      <CreditCard size={16} />
      Cartao de credito
    </PaymentMethodContainer>
  )
}
