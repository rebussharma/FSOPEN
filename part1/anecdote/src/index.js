import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = (props) => {
  return(
    <div>
      <h1> Anecdote of the day is </h1>
      <p> {props.text} </p>  <p> with {props.vote} votes</p>
      <h1> Anecdote with highest vote is </h1>
      <p> {props.text} </p>  <p> with {props.vote} votes</p>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState({})
  const [highest, setHighest] = useState(0)

  const handlevotes = () => {
    console.log(selected);
    const copy = [...vote]
    console.log("here");
    copy[selected] += 1
    console.log(copy);
    setHighest(selected)
    setVote(copy)
  }



  return (
    <div>
      <Anecdote text={props.quotes[selected]} vote={1} />
      <br></br>
      <button onClick={() => setSelected(Math.floor(Math.random()*anecdotes.length))}>next quote</button>
      <button onClick={() => handlevotes()}>vote</button>
    </div>
  )
}

const anecdotes = [ "1. If it hurts, do it more often",
                    "2. Adding manpower to a late software project makes it later!", 
                    "3. The first 90 percent of the code accounts for the first 90 percent of the development time..",
                    "4. Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
                    "5. Premature optimization is the root of all evil.", 
                    "6. Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
                    "7. The best way to get a project done faster is to start sooner",
                    "8. Even the best planning is not so omniscient as to get it right the first time.", 
                    "9. How does a project get to be a year late?... One day at a time.",
                    "10. Plan to throw one (implementation) away; you will, anyhow."
                  ]


ReactDOM.render(<App quotes={anecdotes}/>, document.getElementById('root'))