const Guru = ({courses}) =>{
    return(
      <div>
        <Header courses={courses} />
        <Content courses={courses}/>
        <Total courses={courses} />
      </div>
    )
  }
  
  
  const Header = ({courses}) =>{
    return(
      <div>
        <h1>{courses.name}</h1>
      </div>
    )
  }
  
  const Content = ({courses}) =>{
    return(
      <div>
          {/* if <Part is NOT used inside map(), Part will be rendered in single line
                Here Part will be rendered in different lines: map((param) => <Part key={} props={}/>)
                KEY is a MUST in map by default
          */}
        {courses.parts.map((myparts) => 
            <Part key={myparts.id} title={myparts} work={myparts} />
        )}
  
  
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
  
  const Total = ({courses}) =>{
      // the 0 at last is the initial value of sum
    var total = courses.parts.reduce((sum, cost) => sum + cost.exercises, 0)
    return(
      <div>
        <p>Number of exercise {total}</p>
      </div>
    )
  }

  const MainApp = () => {
    const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      },
      {
        name: 'Angularjs',
        id: 3,
        parts: [
          {
            name: 'Framework',
            exercises: 5,
            id: 1
          },
          {
            name: 'Microsoft',
            exercises: 15,
            id: 2
          }
        ]
  
      }
    ]
  
    
    return (
      <div>
        { // map is used to iterate over array indexes
          courses.map((course_num) =>  <Guru key={course_num.id} courses={course_num} />)
        }    
        
      </div>
    )
    
  }
export default MainApp