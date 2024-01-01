import Part from "./Part"
import Total from "./Total"

const Content = ({ parts }) => {
    const total = parts.reduce((acc, curr) => acc + curr.exercises, 0)

    return (
        <>
            {parts.map(part =>
                <Part key={part.id} name={part.name} exercises={part.exercises} />
            )}
            <Total total={total} />
        </>
    )
}

export default Content
