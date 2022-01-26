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
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({values}) => {
  const total = () => values.good + values.neutral + values.bad
  const average = () => 
      (values.good - values.bad) / total()
  const percentageGood = () => 
      values.good / total() * 100


  if (total() === 0){
    return (
      <p>No feedback given</p>
    )
  }
  
  return (
    <div>
      <table>
        <tbody>
        <Display text="Good" value={values.good}/>
        <Display text="Neutral" value={values.neutral}/>
        <Display text="Bad" value={values.bad}/>
        <Display text="Total" value={total()}/>
        <Display text="Average" value={average()}/>
        <Display text="Positive" value={percentageGood() + " %"}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {

  const [values, setValues] = useState({
    good : 0,
    neutral : 0,
    bad : 0
  })

  const setGood = () => 
    setValues({...values, good: values.good + 1})
  const setNeutral = () => 
    setValues({...values, neutral : values.neutral + 1})
  const setBad = () => 
    setValues({...values, bad : values.bad + 1})

  return (
    <div>
      <Header text="give feedback"/>
      <Button text="good" onClick={setGood}/>
      <Button text="neutral" onClick={setNeutral}/>
      <Button text="bad" onClick={setBad}/>
      <Header text="statistics"/>
      <Statistics values={values}/>
    </div>
  )
}

export default App