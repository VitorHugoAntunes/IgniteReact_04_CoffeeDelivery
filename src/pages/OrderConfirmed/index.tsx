import { RegularText, TitleText } from '../../components/Typography'
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles'

import confirmedOrderIllustration from '../../assets/confirmed-order-illustration.png'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { OrderData } from '../CompleteOrder'
import { useLocation, useNavigate } from 'react-router-dom'
import { paymentMethods } from '../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions'
import { useEffect } from 'react'
import { GoBackShopping } from '../../components/GoBackShopping'

interface LocationType {
  state: OrderData
}

export function OrderConfirmedPage() {
  const { colors } = useTheme()

  const { state } = useLocation() as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [state, navigate])

  if (!state) return <></>

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBackground={colors['brand-purple']}
            text={
              <RegularText>
                Entrega em{' '}
                <strong>
                  {state.street}, {state.number}{' '}
                  {state.complement && <span>- {state.complement}</span>}
                </strong>
                <br />
                {state.district} - {state.city}, {state.state}
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBackground={colors['brand-yellow']}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={paymentMethods[state.paymentMethod].icon}
            iconBackground={colors['brand-yellow-dark']}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />

          <GoBackShopping className="margin" />
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustration} alt="Confirmed order" />
      </section>
    </OrderConfirmedContainer>
  )
}
