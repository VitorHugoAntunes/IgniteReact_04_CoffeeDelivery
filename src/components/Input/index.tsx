import { forwardRef, InputHTMLAttributes } from 'react'
import { RegularText } from '../Typography'
import {
  AsideText,
  InputStyleContainer,
  InputStyled,
  InputWrapper,
} from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  asideText?: string
}

// Atribuindo todos as propriedades de um input do html

// export function Input({ ...props }: InputProps) {
//   return <InputStyleContainer {...props} />
// }

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, asideText, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled ref={ref} {...props} />
          {asideText && <AsideText>{asideText}</AsideText>}
        </InputStyleContainer>
        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
    )
  },
)

Input.displayName = 'Input'
