import React from 'react';

const data = [
    {
        url: 'https://cointelegraph.com',
        pic: '/images/1.jpg',
        intro: 'Kripto naujienos',
        title: 'Karščiausios kripto naujienos ',
    },
    {
        url: 'https://bitcoin.org/en/',
        pic: '/images/2.jpg',
        intro: 'Bitcoin dokumentacija',
        title: 'Pagilink savo supratimą apie Bitcoiną',
    },
    {
        url: '#',
        pic: '/images/3.jpg',
        intro: 'Decentralizacija',
        title: 'Pamatyk virtualius pasaulius ',
    },
    {
        url: 'https://www.investopedia.com/ask/answers/100314/why-do-bitcoins-have-value.asp',
        pic: 'images/4.jpg',
        intro: 'Bitcoinas ir doleris',
        title: 'Palygink šias dvi turto klases',
    },
]

const Urls = () => {

  return (
    <div className=' w-[900px] flex flex-row flex-basis justify-between items-start'>
        {
            data.map(item=>{
                return (
                    <>
                    <div className='flex flex-col mb-8'>
                        <div className='h-[130px] w-[210px] bg-red-300 rounded-[12px] relative overflow-hidden '>
                        <img className='round-4 h-[130px] w-[230px] object-cover' src={item.pic} alt="crypto url" />
                                        </div>
                                        <p className='text-[12px] w-[230px] text-slate-500 mt-3'>{item.intro}</p>
                                        <p className='text-[14px] w-[230px]'>{item.title}</p>
                    </div>
                    </>
                     )
            })
        }

    </div>
  )
}

export default Urls