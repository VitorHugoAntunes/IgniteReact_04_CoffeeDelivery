import { InputHTMLAttributes } from 'react'
import { InputStyleContainer } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

// Atribuindo todos as propriedades de um input do html

export function Input({ ...props }: InputProps) {
  return <InputStyleContainer {...props} />
}
