
import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>{
  return(
    <div>
      <h1>{props.value.name}</h1>
    </div>
  )
}

const Content = (props) =>{
  return(
    <div>
    <Part title={props.value.parts[0]} work={props.value.parts[0]}/>
    <Part title={props.value.parts[1]} work={props.value.parts[1]}/>
    <Part title={props.value.parts[2]} work={props.value.parts[2]}/> 
    </div>
  )
}

const Part = (props) =>{
  return(
    <div>
      <p>{props.title.name} {props.work.exercises}</p>
    </div>
  )
}

const Total = (props) =>{
  return(
    <div>
      <p>Number of exercise {props.value.parts[0].exercises + props.value.parts[1].exercises + props.value.parts[2].exercises}</p>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>      
      <Header value={course} />
      <Content value={course}/>
      <Total value={course} />
    </div>
  )
  
}

ReactDOM.render(<App />, document.getElementById('root'))