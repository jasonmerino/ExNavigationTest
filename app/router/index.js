import { createRouter } from '@exponent/ex-navigation';
import Main from '../components/screens/Main';
import Category from '../components/screens/Category';
import ProductDrops from '../components/screens/ProductDrops';
import ProductDropFilters from '../components/screens/ProductDropFilters';
import Shop from '../components/screens/Shop';
import Experts from '../components/screens/Experts';
import Cart from '../components/screens/Cart';
import More from '../components/screens/More';

export default router = createRouter(() => ({
  main: () => Main,
  shop: () => Shop,
  category: () => Category,
  productDrops: () => ProductDrops,
  productDropFilters: () => ProductDropFilters,
  experts: () => Experts,
  cart: () => Cart,
  more: () => More,
}));
