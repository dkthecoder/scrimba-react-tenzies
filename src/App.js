import './App.css';
import Die from './Die';
import { nanoid } from 'nanoid';
import React from 'react';

function App() {
  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice() {
    const newDice =[]
    for (let i=0; i < 10; i++) {
      newDice.push({valie: Math.ceil(Math.random() * 6), isHeld: false, id:nanoid()})
    }
    return newDice
  }

  function rollDice(){
    setDice(allNewDice())
  }

  const diceElements = dice.map(die => <Die key={die.id} value={die.vlaue} isHeld={die.ishelf
  } />)

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className='roll-dice' onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App;
