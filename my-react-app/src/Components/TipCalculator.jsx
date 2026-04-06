import React, { useState } from 'react'
import TipOption from './TipOption'

const TipCalculator = ({ restaurantName }) => {
    //uState variables
  const [bill, setBill] = useState('')
  const [tipPercentage, setTipPercentage] = useState(0)

  // Derived values (DO NOT store in state)
  const tipAmount = (bill * tipPercentage) / 100
  const total = Number(bill) + tipAmount

  return (
    <div className="page">
      <h1>{restaurantName}</h1>

      <div id="calculator">
        {/* User input for the bill*/}
        <input
          type="number"
          placeholder="Enter bill"
          value={bill}
          onChange={(event) => setBill(event.target.value)}
        />

        {/* Tip buttons */}
        <div>
          <TipOption percentage={15} onSelect={setTipPercentage} />
          <TipOption percentage={18} onSelect={setTipPercentage} />
          <TipOption percentage={20} onSelect={setTipPercentage} />
          <TipOption percentage={25} onSelect={setTipPercentage} />
        </div>

        {/* Results after the bill is calculated*/}
       
        <div id = "results">
        <p class = "tip-text">Tip: ${tipAmount.toFixed(2)}</p>
        <p class = "tip-text">Total: ${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default TipCalculator