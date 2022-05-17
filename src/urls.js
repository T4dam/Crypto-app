import React from 'react';

const data = [
    {
        url: '#',
        pic: 'http://picsum.photos/id/501/400'
    },
    {
        url: '#',
        pic: 'http://picsum.photos/id/500/400'
    },
    {
        url: '#',
        pic: 'http://picsum.photos/id/499/400'
    },
    {
        url: '#',
        pic: 'http://picsum.photos/id/502/400'
    },
]

const Urls = () => {

  return (
    <div className=' w-[900px] flex flex-row justify-between items-center'>
        {
            data.map(item=>{
                return <div className='h-[130px] w-[210px] bg-red-300 rounded-[12px] relative overflow-hidden'>
                    <img className='round-4 object-cover' src={item.pic} alt="crypto url" />
                </div>
            })
        }

    </div>
  )
}

export default Urls