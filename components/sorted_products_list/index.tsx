const PopularProductsList = () => {
  const products = [
    "1. Best Shirt ($69.99)",
    "2. Awesome Shoes ($49.99)",
    "3. Cool Socks ($9.99)",
  ];

  return (
    <>
      <h3>Products (sorted by: Popular first)</h3>
      {products.map((product) => (
        <li>{product}</li>
      ))}
    </>
  );
};

export default PopularProductsList;
