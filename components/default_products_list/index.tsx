const DefaultProductsList = () => {
  const numbers = [3, 1, 2, 5, 4];

  return (
    <>
      <h3>I am Default list</h3>
      {numbers.map((num) => (
        <li>item-{num}</li>
      ))}
    </>
  );
};

export default DefaultProductsList;
