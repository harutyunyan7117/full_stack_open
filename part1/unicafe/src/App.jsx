import { useState } from 'react'

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const StatisticsLine = ({ text, value }) => {
    return (
            <tr>
                <th>{text}</th>
                <td>{value}</td>
            </tr>
    )
}

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad
    const average = (good - bad) / total || 0
    const positive = (good / total) * 100 || 0
 
    if (total === 0) {
        return (
            <>
                <h2>Statistics</h2>
                <p>No feedback given</p>
            </>
        )
    }
 
    return (
        <>
            <h2>Statistics</h2>
            <table>
                <tbody>
                    <StatisticsLine text="good" value={good} />
                    <StatisticsLine text="neutral" value={neutral} />
                    <StatisticsLine text="bad" value={bad} />
                    <StatisticsLine text="all" value={total} />
                    <StatisticsLine text="average" value={average.toFixed(2)} />
                    <StatisticsLine text="positive" value={positive.toFixed(2)} />
                </tbody>
            </table>
        </>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
 
 
    return (
        <div>
            <h2>Give Feedback</h2>
            <Button onClick={() => setGood(good + 1)} text="good" />
            <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
            <Button onClick={() => setBad(bad + 1)} text="bad" />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App
