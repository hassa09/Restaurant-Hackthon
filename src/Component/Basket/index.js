import Payment from '../Payment';

export default function Basket({ items }) {
  if (items) {
    const prices = items.map((item) => {
      return item.price;
    });
    const total = prices.reduce(function (a, b) {
      return a + b;
    }, 0);

    return (
      <div>
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
        <Payment />
      </div>
    );
  }
}
