const DefaultProductsList = () => {
  const products = [
    "1. Awesome Shoes ($49.99)",
    "2. Best Shirt ($69.99)",
    "3. Cool Socks ($9.99)",
  ];

  return (
    <>
      <h3>Products sorted alphabetically</h3>
      {products.map((product) => (
        <li>{product}</li>
      ))}
    </>
  );
};

export default DefaultProductsList;
