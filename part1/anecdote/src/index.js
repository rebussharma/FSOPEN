import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({text, vote=0}) => {
  return(
    <div>
      <p> {text} </p> 
      <p> with {vote} votes</p>
    </div>
  )
}

const App = (props) => {
  // state to store selected random state
  const [selected, setSelected] = useState(0)
  // Array state to store total number of votes
  const [vote, setVote] = useState([])
  //state to store the anecdote with highest votes
  const [highest, setHighest] = useState(0)

  /* function to handle onClick vote event*/
  const handlevotes = () => {
    // make a copy of vote array for comparision between 2 vote arrays
    const copy = [ ...vote,[]]
    
    // parse element selected as int
    copy[selected] = parseInt(copy[selected])

    // if Non number set state to 0
    if (isNaN(copy[selected])){
      copy[selected] = 0;
    }

    // add 1 for everytime state is voted
    copy[selected] += 1

    // compare 2 vote arrays here
    // if selected state has more votes than highest state change highes
    if (copy[selected] > vote[highest]){
      setHighest(selected)
    }

    // copy is a copy of vote. Update vote array each
    setVote(copy)

  }

  return (
    <div>
      <h1> Anecdote of the day is </h1>
      <Anecdote text={props.quotes[selected]} vote={vote[selected]} />
      <h2> Anecdote with highest vote is </h2>
      <Anecdote text={props.quotes[highest]} vote={vote[highest]} />
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