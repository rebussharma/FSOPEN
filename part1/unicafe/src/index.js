import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Stats = (props) => {
  if (props.value === 0 || isNaN(props.value && typeof(props.value) !== String)){
    return(
      <table>
        <tbody>
          <tr>
            <td style={{ width:'5px' }}> {props.text}</td>
            <td style={{ width:'145px' }}>  : No feedbacks yet  </td>

          </tr>
        </tbody>
      </table>
    )
  }
  return(
    <table>
      <tbody>
        <tr>
          <td style={{ width:'5px' }}> {props.text}   </td>
          <td style={{ width:'5px' }}> {props.value}  </td>

        </tr>
      </tbody>
    </table>
  )
}

const Buttons = (props) => {
  return(
    <div>
      <button onClick={() => props.handleClick()}> {props.buttonType}</button>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)


  const handleGoodClick = () =>{
    setGood( good + 1 )   
  }

  const handleBadClick = () =>{
    setBad( bad + 1 )
  }

  const handleNeutralClick = () =>{
    setNeutral( neutral + 1 )
  }

  var total = 0
  var average = 0
  var positive = 0

  const computeStats = () =>{
    total = good+bad+neutral
    average = (total / 3).toFixed(2)
    positive = ((good/total)*100).toFixed(1) + '%'
    return {total, average, positive}
  }

  if(good === 0 && bad === 0 && neutral === 0){
    return(
      <div>
        <h1>give feedback</h1>
        <Buttons buttonType='good' handleClick={handleGoodClick}/>
        <Buttons buttonType='bad' handleClick={handleBadClick}/>
        <Buttons buttonType='neutral' handleClick={handleNeutralClick}/>
        <h2> No Feed backs yet </h2>
      </div>
    )
  }
  
  return(
    <div>
      <h1>give feedback</h1>
      <Buttons buttonType='good' handleClick={handleGoodClick}/>
      <Buttons buttonType='bad' handleClick={handleBadClick}/>
      <Buttons buttonType='neutral' handleClick={handleNeutralClick}/>
     

      <h2> stats </h2>
      
      
      <Stats text="good" value={good}/>
      <Stats text="bad" value={bad}/>
      <Stats text="neutral" value={neutral}/>
      <Stats text="total" value={computeStats().total}/>
      <Stats text="average" value={computeStats().average}/>
      <Stats text="Positive" value={computeStats().positive}/>

    </div>
  )
  
  
}
ReactDOM.render(<App />, document.getElementById('root'))