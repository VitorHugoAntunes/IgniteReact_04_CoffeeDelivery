import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { GoBackShopping } from '../../components/GoBackShopping'
import { CompleteOrderContainer } from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { TitleText } from '../../components/Typography'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod
    .string()
    .min(2, 'Informe o estado')
    .max(2, 'Máximo de 2 caracteres'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function CompleteOrderPage() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()
  const { cleanCart } = useCart()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/confirmed-order', {
      state: data,
    })

    cleanCart()
  }

  const { cartItems } = useCart()
  return (
    <>
      {cartItems.length > 0 ? (
        <CompleteOrderContainer
          className="container"
          onSubmit={handleSubmit(handleConfirmOrder)}
        >
          <FormProvider {...confirmOrderForm}>
            <CompleteOrderForm />
            <SelectedCoffees />
          </FormProvider>
        </CompleteOrderContainer>
      ) : (
        <GoBackShopping
          titleText={
            <TitleText size="s" color="text" as="strong">
              Seu carrinho está vazio
            </TitleText>
          }
        />
      )}
    </>
  )
}
