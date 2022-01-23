import React, {useState} from "react";

const Header = ({text}) => <h1>{text}</h1>

const Button = ({onClick,text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Display = ({text, value}) => {
  return (
    <p>{text} {value}</p>
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = () => setGood(good + 1)
  const setBadValue = () => setBad(bad + 1)
  const setNeutralValue = () => setNeutral(neutral + 1)

  return (
    <div>
      <Header text="give feedback"/>
      <Button text="good" onClick={setGoodValue}/>
      <Button text="neutral" onClick={setNeutralValue}/>
      <Button text="bad" onClick={setBadValue}/>
      <Header text="statistics"/>
      <Display text="good" value={good}/>
      <Display text="neutral" value={neutral}/>
      <Display text="bad" value={bad}/>
    </div>
  )
}

export default App