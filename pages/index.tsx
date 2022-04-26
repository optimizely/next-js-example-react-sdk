import { useDecision } from "@optimizely/react-sdk";
 
const productsListPopularFirst = [
  "Best Shirt ($69.99)",
  "Awesome Shoes ($49.99)",
  "Cool Socks ($9.99)",
];

const productsListAlphabetical = [
  "Awesome Shoes ($49.99)",
  "Best Shirt ($69.99)",
  "Cool Socks ($9.99)",
];

const Home = () => {
  const [decision] = useDecision("product_sort");
  
  let sortedBy = 'Alphabetical order';
  let products = productsListAlphabetical;
  if (decision.variables.sort_method === "popular_first") {
    sortedBy = 'Popularity';
    products = productsListPopularFirst;
  }

  return (
    <div>
      <h2>Optimizely Sample Application</h2>
      <h4>Products (Sorted by {sortedBy})</h4>
      <ol>
        { products.map(p => <li key={p}>{p}</li>) }
      </ol>
    </div>
  );
};

export default Home;
