import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Coins from './components/coins';
import Urls from './components/urls';
import Layout from './components/layout'


function App() {
  const [coins, setCoins]=useState([]);
  const [search, setSearch]=useState('');

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

 const filteredCoins = coins.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase())); 
console.log(filteredCoins)

  return (
    <Layout>

    <div className='flex flex-col mt-[64px]'>
      <div className='mb-[64px] flex flex-col justify-center items-center'>
          <Urls />
          {/* <h1 className=' text-4xl font-black mb-[50px]'>100 populiariausių kripto valiutų</h1> */}
          <h1 className='text-xl mb-[10px]'>Valiutos paieška</h1>

      <form>
        <input type="text" placeholder='Ieškoti' className='w-[300px] h-[50px] border-2 rounded-[4px] pl-3' onChange={handleSearch} />
      </form>
      </div>
      <div className='flex items-center justify-center'>
        <div className='flex w-[900px] font-bold'>
                  <div className=' min-w-[300px]'>Pavadinimas</div>
                  <div className='w-[110px] mr-20'>Kaina</div>
                  <div className='w-[155px] mr-8'>Cirkuliavimas(24h)</div>
                  <div className='w-[100px]mr-3'>Pokytis(24h)</div>
                  <div className='w-[230px] text-right '>Kapitalizacija</div>
              </div>
      </div>
      {
        filteredCoins.map(coin=> {
          return (
            <>
            <Coins
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketCap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume} />
            <div className='w-full'>
              <div className='h-[1px] bg-slate-300 w-[900px] mx-auto'></div>
            </div>
            </>
          )
        })
      }
    </div>
      </Layout>
  );
}

export default App;
