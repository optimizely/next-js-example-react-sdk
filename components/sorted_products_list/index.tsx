const SortedProductsList = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <>
      <h3>I am Sorted list</h3>
      {numbers.map((num) => (
        <li>item-{num}</li>
      ))}
    </>
  );
};

export default SortedProductsList;
