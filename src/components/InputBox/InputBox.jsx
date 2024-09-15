import React from 'react'
import { useId } from 'react'

const InputBox = ({
    lable,
    amount,
    onAmountChange,
    currenyOptions = [],
    onCurrencyChange,
    selectCurrency = 'usd',
    amountDisabled = false,
    currencyDisabled = false,

}) => {
  const inputId = useId()
  return (
    <div className="flex justify-between bg-white p-3 rounded-lg text-sm"  >
        <div className='flex flex-col w-1/2'>
          <label htmlFor={inputId} className="text-lg text-black">{lable}</label>
          <input 
            id={inputId}
            className='bg-transparent outline-none w-full text-black'
            type="number"
            placeholder='Amount'
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            disabled={amountDisabled}

          />
        </div>
        <div className='flex flex-wrap justify-end text-right w-1/2'>
          <p className="text-lg text-black mb-2 w-full">Currency</p>
            <select
            
            className='bg-transparent outline-none rounded-lg px-1 py-1 bg-gray-100 cursor-pointer'
            onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
            value={selectCurrency}
            disabled={currencyDisabled}
            >
             { currenyOptions.map((currency)=>(
               <option key={currency} value={currency}>
               {currency}
             </option>
             ))}
             
            </select>
        </div>
    </div>
  )
}

export default InputBox