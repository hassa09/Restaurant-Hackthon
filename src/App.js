import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Basket from './Component/Basket';

const items = [
  {
    name: 'burger',
    price: 9.7,
  },
  {
    name: 'lasagne',
    price: 7.95,
  },
  {
    name: 'chips',
    price: 2.0,
  },
];

function App() {
  useEffect(() => {
    const url = '';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='App'>
      <header className='text-blue-500'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <Basket items={items} />
    </div>
  );
}

export default App;
