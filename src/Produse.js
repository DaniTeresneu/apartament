import React, { useState } from "react";
import "./produse.css"; // Import the CSS file for styling

const products = [
  {
    id: 1,
    name: "Televizor Hisense 75A7GQ",
    category: "Living",
    description:
      "Televizor QLED Smart Hisense 75A7GQ, Ultra HD 4K, HDR10+, 190cm",
    price: 3500,
    image:
      "https://lcdn.altex.ro/resize/media/catalog/product/u/h/2bd48d28d1c32adea0e55139a4e6434a/uhd75a7gq_newed_1__00b5fabe.jpg",
  },
  {
    id: 2,
    name: "Frigider",
    category: "Bucatarie",
    description:
      "Frigider cu doua usi BEKO RDNE455K30ZXBN, NeoFrost, 406 l, H 185 cm, Clasa F, inox",
    price: 2300,
    image:
      "https://lcdn.altex.ro/resize/media/catalog/product/f/r/2bd48d28d1c32adea0e55139a4e6434a/frdrdne455k3zxb_1_3625bbe7.jpg",
  },
  {
    id: 3,
    name: "Canapea",
    category: "Living",
    description:
      "Colțar extensibil cu ladă de depozitare Loana Grey II 270x185 cm",
    price: 2800,
    image:
      "https://www.dumonde.ro/cdn/shop/files/Coltar-extensibil-cu-lada-de-depozitare-Loana-Grey-275x185-cm-1_1_df99688e-2a22-48f6-ba52-8ac412b34088_800x.jpg?v=1688384001",
  },
  {
    id: 4,
    name: "Pat",
    category: "Dormitor",
    description: "Pat Lenka, 160x200 cm, MDF, lemn masiv Fag, Gri",
    price: 1400,
    image:
      "https://lcdn.altex.ro/resize/media/catalog/product/6/4/2bd48d28d1c32adea0e55139a4e6434a/6499682110c6e_pat_lenka_gri_160x200_gri_1_scaled_dddc6ac0.jpg",
  },
  {
    id: 5,
    name: "Noptiera",
    category: "Dormitor",
    description: "Noptiera Dynasty Alba",
    price: 550,
    image:
      "https://lcdn.altex.ro/resize/media/catalog/product/6/4/2bd48d28d1c32adea0e55139a4e6434a/6463444c52ce1_14a0564801259d5e59a65bf4a74273eb8edd56c2dynasty_alb_noptiera_1_03c6933e.jpg",
  },
  {
    id: 6,
    name: "Plita",
    category: "Bucatarie",
    description: "Plita incorporabila BOSCH PPP6A6M90, Gaz, 4 arzatoare, negru",
    price: 1550,
    image:
      "https://lcdn.altex.ro/resize/media/catalog/product/p/l/2bd48d28d1c32adea0e55139a4e6434a/pltppp6a6m90_new_1_c5caa4c3.jpg",
  },
];

function ProductList() {
  const [activeCategory, setActiveCategory] = useState(null);

  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredProducts = activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;

  const calculateTotalPrice = (category) => {
    const categoryProducts = products.filter(
      (product) => product.category === category
    );
    const totalPrice = categoryProducts.reduce(
      (total, product) => total + product.price,
      0
    );
    return totalPrice;
  };

  return (
    <div className="product-container">
      <div className="category-buttons">
        <button
          className={activeCategory === null ? "active" : ""}
          onClick={() => handleCategoryClick(null)}
        >
          Toate
        </button>
        {uniqueCategories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => handleCategoryClick(category)}
          >
            {category} ({calculateTotalPrice(category)} lei)
          </button>
        ))}
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div className="product-item" key={product.id}>
            <img
              className="product-image"
              src={product.image}
              alt={product.name}
            />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">Pret: {product.price} de lei</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
