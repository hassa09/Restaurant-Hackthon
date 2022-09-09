export default function Basket({ items }) {
  console.log(items[0].price);
  const prices = items.map((item) => {
    return item.price;
  });
  const total = prices.reduce(function (a, b) {
    return a + b;
  }, 0);

  return (
    <ul>
      {items.map((item) => {
        return (
          <li>
            {item.name} £{item.price}
          </li>
        );
      })}
      <li>Total: £{total}</li>
    </ul>
  );
}
