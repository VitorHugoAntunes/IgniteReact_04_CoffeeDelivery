import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CompleteOrderPage } from './pages/CompleteOrder'
import { HomePage } from './pages/HomePage'
import { OrderConfirmedPage } from './pages/OrderConfirmed'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/complete-order" element={<CompleteOrderPage />} />
        <Route path="/confirmed-order" element={<OrderConfirmedPage />} />
      </Route>
    </Routes>
  )
}
