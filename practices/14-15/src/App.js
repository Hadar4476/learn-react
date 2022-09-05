import { useSelector } from "react-redux";

import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";

const App = () => {
  const { shouldDisplay } = useSelector((state) => state.cart);

  const cartRenderer = shouldDisplay && <Cart />;

  return (
    <Layout>
      {cartRenderer}
      <Products />
    </Layout>
  );
};

export default App;
