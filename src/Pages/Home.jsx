import React, { useContext, useEffect, useState } from 'react'
import '../Pages/Home.css'
import {CoinContext} from '../Context/CoinContext'
import { Link } from 'react-router-dom'

const Home = () => {
    const {allCoin, currency} = useContext(CoinContext)
    const [displayCoin, setDisplayCoin] = useState([])
    const [input, setInput] = useState('')
    const inputHandler = (event)=>{
        setInput(event.target.value)
        if (event.target.value === ''){
            setDisplayCoin(allCoin)
        }
    }

    const searchHandler = async (event)=>{
        event.preventDefault()
        const coins = await allCoin.filter((item)=>{
            return item.name.toLowerCase().includes(input.toLowerCase())
        })
        setDisplayCoin(coins)
    }

    useEffect(
        ()=>{
            setDisplayCoin(allCoin)
        }, [allCoin]
    )
  return (
    <>
    <div className='w-full'>
        <div className='text-white flex flex-col items-center text-center gap-[30px] my-[60px] max-w-[600px] mx-auto'>
            <h1 className='text-5xl font-semibold font-outfit'>Largest <br /> Crypto Marketplace</h1>
            <p  className=' text-xl font-outfit text-[#e3e3e3] leading-9'>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
            <form 
            onSubmit={searchHandler}
            className='p-[8px] w-[80%] bg-white rounded-2xl text-[20px] flex items-center justify-between gap-[10px]'>


                <input onChange={inputHandler}
                list='list'
                 className='flex-1 text-[16px] outline-none border-none pl-[10px] font-outfit text-black' type="text" placeholder='Search Crypto...'
                 required
                 value={input} />

                <datalist id='list'>
                    {allCoin.map((item, index)=>(
                        <option value={item.name} key={index} />
                    ))}
                </datalist>


                <button type='submit' className='border-none bg-[#7927ff] text-white rounded-xl py-[10px] px-[30px] text-[16px] font-semibold'>Search</button>
            </form>
        </div>
        <div id='cryp' className='max-w-[800px] m-auto  rounded-xl'>
            <div className='table'>
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p style={{textAlign:'center'}}>24H Change</p>
                <p id='market'>Market Cap</p>
            </div>
            {
                displayCoin.slice(0,10).map((items, index)=>(
                    <Link to={`/coin/${items.id}`} key={index} className='table'>
                        <p>{items.market_cap_rank}</p>
                        <div className='flex items-center gap-3'>
                            <img src={items.image} alt="" className='h-10' />
                            <p>{items.name + "-" + items.symbol}</p>
                        </div >
                        <p> {currency.symbol} {items.current_price.toLocaleString()} </p>
                        <p className={items.price_change_percentage_24h > 0 ? "Green" : "Red"} style={{textAlign:'center'}}> {Math.floor(items.price_change_percentage_24h*100)/100} </p>
                        <p className='text-right'> {currency.symbol} {items.market_cap.toLocaleString()} </p>
                    </Link>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Home