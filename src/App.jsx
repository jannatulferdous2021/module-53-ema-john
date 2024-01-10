
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Shop from './components/shop/Shop';
import OrderReview from './components/orderReview/OrderReview';
import Inventory from './components/inventory/Inventory';
import PlaceOrder from './components/placeOrder/PlaceOrder';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
           <Route path='/shop' element={<Shop/>}/>
           <Route path='/order-review' element={<OrderReview/>}/>
           <Route path='/inventory' element={<Inventory/>}/>
           <Route path='/placeOrder' element={<PlaceOrder/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
