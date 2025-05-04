import React, { useContext } from 'react'
import { BsCurrencyExchange } from "react-icons/bs";
import { NavLink } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import { CoinContext } from '../Context/CoinContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const {setCurrency} =  useContext(CoinContext)
  const currencyHandler = (e)=>{
        switch (e.target.value) {
          case "USD" : {
            setCurrency({
              name : "usd",
              symbol : "$"
            })
            break;
          }
          case "INR" : {
            setCurrency({
              name : "inr",
              symbol : "₹"
            })
            break;
          }
          case "EUR" : {
            setCurrency({
              name : "inr",
              symbol : "€"
            })
            break;
          }
          default : {
            setCurrency({
              name : "usd",
              symbol : "$"
            })
            break;
          }
        }
  }
  return (
    <>
    <nav className='w-full py-4 classname="bg-[#09005c] text-white" text-white flex items-center justify-between px-24 border-b-2 border-indigo-500 font-outfit'>
    <Link to='/' className='flex items-center gap-2 '>
    <BsCurrencyExchange className='text-4xl' />
    <p className='text-xl font-semibold'>Crypto Insights</p>
    </Link>
    <div className='w-[30%]'>
      <ul className='flex w-[100%] justify-between text-[17px] font-semibold'>
       <Link to='/'> <li>Home</li></Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
        </ul>
    </div>
    <div className='flex gap-9 font-outfit font-semibold'>
      <select onChange={currencyHandler} className='py-[5px] px-[8px] border-2 border-white bg-transparent text-white rounded-xl' name="" id="">
        <option value="USD" className='bg-[#09005c] text-white rounded-xl font-semibold'>USD</option>
        <option value="INR" className='bg-[#09005c] text-white rounded-xl font-semibold'>INR</option>
        <option value="EUR" className='bg-[#09005c] text-white rounded-xl font-semibold'>EUR</option>
      </select>
      <button className='flex items-center gap-2 bg-white rounded-xl border-none text-black px-2'>Sign In <MdArrowOutward />
      </button>
    </div>
    </nav>
    </>
  )
}

export default Navbar