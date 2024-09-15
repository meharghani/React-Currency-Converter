
import './App.css'
import useCurrencyInfo from './useCurrencyInfo/useCurrencyInfo'
import InputBox from './components/InputBox/InputBox'
import { useState } from 'react'
function App() {
  
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('pkr')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const option = Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
  const convert  = () =>{
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
  }
  return (
    <div className='w-full h-[100vh] flex flex-col items-center bg-cover bg-no-repeat justify-center' style={{opacity:.5,backgroundImage: 'url(https://images.unsplash.com/photo-1471981172431-b1c4155be4b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
      <div className="flex flex-col p-4 justify-center w-[600px] h-[300px] border border-gray-60 rounded-xl shadow-lg backdrop-blur-sm bg-white/40 ">
      <form 
        onSubmit={(e) =>(
          e.preventDefault(),
          convert()
        )}
      >
        <div className='w-full mb-1'>
          <InputBox 
            lable="From"
            amount={amount}
            onAmountChange={(e) =>(setAmount(e))}
            currenyOptions={option}
            onCurrencyChange={(e)=>(setFrom(e))}
            selectCurrency={from}
          />
        </div>
        <div className="relative w-full h-0.5">
          <button onClick={()=>swap()} className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg border-2 border-white rounded-md bg-blue-600 text-white px-2 py-.5">swap</button>
        </div>
        <div className='w-full mb-1'>
          <InputBox
            lable="From"
            amount={convertedAmount}
            onAmountChange={(e) =>(setConvertedAmount(e))}
            currenyOptions={option}
            onCurrencyChange={(e)=>(setTo(e))}
            selectCurrency={to}
          />
        </div>
        <button className="w-full bg-blue-600 text-white rounded-md py-3 px-1 mt-2">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
     </form>
     
      </div>

    </div>
  )
}

export default App
