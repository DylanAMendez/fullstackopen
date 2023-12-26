

const Header = (props) => 
{
  console.log(props);

  return (
    <header>
      <h1> {props.courseName} </h1>
    </header>
  )
}

const Content = (props) => 
{
  console.log(props);

  return (
    <div>
      <p> {props.parts[0].name}, exercises: {props.parts[1].exercises} </p>
      <p> {props.parts[1].name}, exercises: {props.parts[1].exercises} </p>
      <p> {props.parts[2].name}, exercises: {props.parts[2].exercises} </p>
    </div>
  )

}

const Total = (props) =>
{

  return (
    <p>
      Number total of exercises {props.courseParts[0].exercises + props.courseParts[1].exercises + props.courseParts[2].exercises}
    </p>
  )
}


const App = () =>
{

  const course = {
    name: "Half Stack application development",
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
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total courseParts={course.parts} />
    </div>
  )
}

export default App
