import React from 'react'

const Coins = ({image, name, symbol,price,marketCap, priceChange, volume}) => {
  return (
    <div className='flex flex-col items-center justify-center '>
        <div className='flex flex-row justify-center items-center h-[80px] w-[900px]'>
       
            <div className='flex items-center pr-[24px] min-w-[300px]'>
                <img className='w-[30px] h-[30px] mr-[10px]' src={image} alt="crypto" />
                <h1 className='w-[150px] text-[16px]'>{name}</h1>
                <p className="uppercase">{symbol}</p>
                    </div>
                <div className="flex align-right justify-between w-full">
                    <p className="w-[110px]">{price.toLocaleString()} EUR</p>
                    <p className='w-[155px]'>{volume.toLocaleString()} EUR</p>
                    {
                        priceChange<0 ? (
                            <p className="w-[80px] text-red-700">{priceChange.toFixed(2)}%</p>
                            )
                            :
                            ( <p className="w-[80px] text-green-600">{priceChange.toFixed(2)}%</p>)
                        }
                </div>
                
                        <p className="min-w-[160px] text-right"> {marketCap.toLocaleString()} <span>Eur</span></p>

                        
                

        </div>

    </div>
  )
}

export default Coins