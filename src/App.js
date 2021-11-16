import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

const App = () => {
  const [showCart, toggleShowCart] = useState(false);

  const showCartHandler = () => {
    toggleShowCart(true);
  };

  const hideCartHandler = () => {
    toggleShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </CartProvider>
  );
};

export default App;
