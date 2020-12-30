import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const points = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0}
const copy = {...points}
var max_votes = 0

const Anecdote = (props) => {
  return(
    <div>
      <h1> Anecdote of the day is </h1>
      <p> {props.text} {props.vote} </p>
      <h1> Anecdote with highest vote is </h1>
      <p> {props.text} {props.vote} </p>
    </div>
  )
}
Array.max = function( array ){
  return Math.max.apply( Math, array );
};

const App = (props) => {
  const [selected, setSelected] = useState(0)
  //const [vote, setVote] = useState(0)

  const handlevotes = () => {
    copy[selected] += 1
    max_votes = Object.keys(copy).reduce((a, b) => copy[a] > copy[b] ? a : b)
    return max_votes
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