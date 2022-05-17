import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Coins from './coins';


function App() {
  const [coins, setCoins]=useState([]);
  const [search, setSearch]=useState();

  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res=>{
      console.log(res)
      setCoins(res.data)
    })
    .catch(error=> {
      console.log(error)
    })
  },[])
  
  const handleSearch = (e) => {
    setSearch(e.target.value)
  };

 const filteredCoins = coins.filter(coin=>coin.name.toLowerCase().includes(search)); 
console.log(filteredCoins)

  return (
    <div className='coin-app'>
      <div className='coin-serach'>
        <h1 className='coin-text'>Ieškoti valiutos</h1>

      <form>
        <input type="text" placeholder='Ieškoti' className='coin-input' onChange={handleSearch} />
      </form>
      </div>
      {
        filteredCoins.map(coin=> {
          return (
            <Coins
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h} />
          )
        })
      }
    </div>
  );
}

export default App;
