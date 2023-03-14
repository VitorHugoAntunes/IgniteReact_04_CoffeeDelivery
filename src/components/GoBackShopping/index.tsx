import { Bag } from 'phosphor-react'
import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../Button'
import { TitleText } from '../Typography'
import { EmptyCartContainer } from './styles'

interface GoBackShoppingProps {
  titleText?: ReactNode
  className?: string
}

export function GoBackShopping({ titleText, className }: GoBackShoppingProps) {
  return (
    <EmptyCartContainer className={className}>
      {titleText}

      <NavLink to="/">
        <Button
          icon={<Bag size={20} weight="fill" />}
          text="Voltar às compras"
        />
      </NavLink>
    </EmptyCartContainer>
  )
}
