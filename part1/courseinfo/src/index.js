import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return(
    <h1>{props.name}</h1>
  )
}

const Part = (props) => {
  console.log(props)
  return(
    <p>{props.info.name} {props.info.exercises}</p>
  )
}

const Content = (props) => {
  return(
    <>
      <Part info={props.parts[0]} />
      <Part info={props.parts[1]} />
      <Part info={props.parts[2]} />
    </>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercise {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name : 'Half Stack application development',
    parts : [
      {
        name : 'Fundamentals of React',
        exercises : 10
      },
      {
        name : 'Using props to pass data',
        exercises : 7
      },
      {
        name : 'State of a component',
        exercises : 14
      }
    ]
  }

  return(
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))