import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import CoinContextProvider from './Context/CoinContext.jsx'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout/>,
//     children : [
//       {
//         path : "",
//         element : <Home/>
//       },
//       {
//         path : "features",
//         element : <Features/>
//       },
//       {
//         path : "features",
//         element : <Pricing/>
//       },
//       {
//         path : "features",
//         element : <Blog/>
//       }
//     ]
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CoinContextProvider>
    <App/>
    </CoinContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
