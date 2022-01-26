import React, {useState}from "react";

const Display = ({text}) => <h4>{text}</h4>

const Button = ({onClick, text}) => 
  <button onClick={onClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [maxVoted, setMaxVoted] = useState(0)
  const [votes, setVotes] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0})

  const setRandomIndex = () => {
    const newIndex = Math.floor(Math.random()*anecdotes.length)
    if (newIndex === selected){
      setRandomIndex()
    }else{
      setSelected(newIndex)
    }
  }
  
  function getKeyByValue(object, value){
    return Object.keys(object).find(key => object[key] === value)
  }

  const setVote = () => {
    setVotes({...votes,[selected]: votes[selected] + 1})
    let arr = Object.values(votes)
    let max = Math.max(...arr)
    setMaxVoted(getKeyByValue(arr,max))
  }

  return(
    <div>
      <h1>Anecdote of the day</h1>
      <Display text={anecdotes[selected]}/>
      <Display text={"Has " + votes[selected] + " votes"}/>
      <Button text="vote" onClick={setVote}/>
      <Button text="next anecdote" onClick={setRandomIndex}/>
      <h1>Anecdote with most votes</h1>
      <Display text={anecdotes[maxVoted]}/>
    </div>
  )
}

export default App