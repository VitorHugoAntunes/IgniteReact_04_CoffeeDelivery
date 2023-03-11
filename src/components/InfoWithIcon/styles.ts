import styled from 'styled-components'

export const ItemWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface IconContainerProps {
  iconBackground: string
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background: ${({ iconBackground }) => iconBackground};
  color: ${({ theme }) => theme.colors['base-white']};

  display: flex;
  align-items: center;
  justify-content: center;
`
