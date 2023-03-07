import { Routes, Route } from 'react-router-dom'
import { Success } from './pages/Success'
import { Home } from './pages/Home'
import { OrderCheckout } from './pages/OrderCheckout'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/order-checkout" element={<OrderCheckout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
