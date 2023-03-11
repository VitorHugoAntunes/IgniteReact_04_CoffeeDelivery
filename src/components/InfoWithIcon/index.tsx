import { ReactNode } from 'react'
import { IconContainer, ItemWithIconContainer } from './styles'

interface ItemWithIconProps {
  icon: ReactNode
  text: string | ReactNode
  iconBackground: string
}

export function InfoWithIcon({
  icon,
  text,
  iconBackground,
}: ItemWithIconProps) {
  return (
    <ItemWithIconContainer>
      <IconContainer iconBackground={iconBackground}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </ItemWithIconContainer>
  )
}
