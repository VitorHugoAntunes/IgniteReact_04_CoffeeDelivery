import { Input } from '../../../../components/Input'
import { AddressFormContainer } from './styles'

export function AddressForm() {
  return (
    <AddressFormContainer>
      <Input placeholder="CEP" type="number" className="cep" />
      <Input placeholder="Rua" className="street" />
      <Input placeholder="Número" type="number" />
      <Input placeholder="Complemento" className="complement" />
      <Input placeholder="Bairro" type="number" />
      <Input placeholder="Cidade" type="number" />
      <Input placeholder="UF" max={2} />
    </AddressFormContainer>
  )
}
