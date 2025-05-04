import React, { useContext, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {CoinContext} from '../Context/CoinContext'
import '../Pages/Home.css'
import { useState } from 'react'
import LineCHart from '../Components/LineCHart'

const Coin = () => {
  const {coinId} = useParams()
  const [coinData, setCoinData] = useState()
  const [historicalData, setHistoricalData] = useState()
  const {currency} = useContext(CoinContext)

  const fetchCoinData = async ()=>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-5poczDckrajk5LA3QAQgVtDN'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(res => res.json())
      .then(res => setCoinData(res))
      .catch(err => console.error(err));
  }

  const fetchHistoricalData = async ()=>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-5poczDckrajk5LA3QAQgVtDN'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=15&interval=daily`, options)
      .then(res => res.json())
      .then(res => setHistoricalData(res))
      .catch(err => console.error(err));
  }

  useEffect(()=>{
    fetchCoinData()
    fetchHistoricalData()
  },[currency])

  if(coinData, historicalData){
    return (
      <>
      <div className='px-[20px]'>
        <div className='flex items-center flex-col justify-center gap-[20px] my-[100px] mx-auto mb-[50px]'>
          <img src={coinData.image.large} className='w-[100px]'/>
          <p className='text-white font-outfit font-bold text-3xl'> {coinData.name} {coinData.symbol.toUpperCase()} </p>
        </div>
        <div className='max-w-[600px] h-[250px] m-auto'>
          <LineCHart historicalData={historicalData} />
        </div>
        <div className='max-w-[600px] my-[100px] mx-auto flex flex-col  font-outfit text-white font-bold text-2xl'>
          <ul className='info'>
            <li>Crypto Market Rank</li>
            <li> {coinData.market_cap_rank} </li>
          </ul>
          <ul className='info'> 
            <li>Current Price</li>
            <li> {currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()} </li>
          </ul>
          <ul className='info'>
            <li>Market Cap</li>
            <li> {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
          </ul>
        </div>
      </div>
      </>
    )
  }
  else {
    return(
      <>
      <div className='flex w-full min-h-[80vh] items-center justify-center'>
        <div className='w-[65px] h-[65px] ' id='loader'></div>
      </div>
      </>
    )
  }
}

export default Coin