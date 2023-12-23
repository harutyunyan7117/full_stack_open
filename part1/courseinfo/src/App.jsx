const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return (
        <p>{props.name} {props.exercises}</p>
    )
}

const Content = (props) => {
    return (
        <>
            <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
            <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
            <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
        </>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.total}</p>
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
                name: 'Fundamentals of React',
                exercises: 7
            },
            {
                name: 'Fundamentals of React',
                exercises: 14
            }
        ]
    }
 
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts}/>
            <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
        </div>
    )
}

export default App