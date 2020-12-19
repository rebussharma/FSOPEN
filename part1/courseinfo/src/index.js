
import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) =>{
  return(
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Content = (props) =>{
  return(
    <div>
    <Part name={props.parts[0].name} work={props.parts[0].exercises}/>
    <Part name={props.parts[1].name} work={props.parts[1].exercises}/>
    <Part name={props.parts[2].name} work={props.parts[2].exercises}/> 
    
    </div>
  )
}

const Part = (props) =>{
  return(
    <div>
      <p>{props.name} {props.work}</p>
    </div>
  )
}

const Total = (props) =>{
  return(
    <div>
      <p>Number of exercise {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
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
  
  console.log(course);
  return (
    <div>      
      <Header course={course} />
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
  
}

ReactDOM.render(<App />, document.getElementById('root'))