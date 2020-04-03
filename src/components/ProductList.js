import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
const ProductList = () => {
  const [products] = useState([
    { title: "Product 1", id: 1 },
    { title: "Product 2", id: 2 },
    { title: "Product 3", id: 3 }
  ]);

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {products.map(product => (
          <li key={product.id} style={{ background: theme.ui }}>
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
