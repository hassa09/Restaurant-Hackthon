import Payment from '../Payment';
import './basket.css';

export default function Basket({ items, setItems, open }) {
  if (items.length > 0 && open) {
    const prices = items.map((item) => {
      return item.price;
    });
    const total = prices.reduce(function (a, b) {
      return a + b;
    }, 0);

    function deleteitem(id) {
      setItems([...items].filter((items) => items.id !== id));
    }
    return (
      <div id='basket-container'>
        <ul id='basket-list'>
          {items.map((item, index) => {
            return (
              <li className='list-item' key={index}>
                {item.title} £{item.price}{' '}
                <button
                  className='delete-button'
                  onClick={() => {
                    deleteitem(item.id);
                  }}
                >
                  remove X
                </button>
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
