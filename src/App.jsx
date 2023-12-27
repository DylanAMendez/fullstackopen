
import { useState } from "react"

const Display = ({ text }) =>
{
  return (
    <h1> {text} </h1>
  )
}

const Button = ({ handleClick, text }) =>
{
  return (
    <button onClick={handleClick} > {text} </button>
  )
}

const Statistics = ({ good, neutral, bad, total }) =>
{
  if (total === 0) {
    return <p>No feedback given</p>;
  }

  const average = (good - bad) / total;
  const positivePercentage = (good / total) * 100;

  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All" value={total} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={positivePercentage + " %"} />
      </tbody>
    </table>
  );
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Anecdotes = ({ anécdotas, selected, votos }) => 
{

  return (
    <div>
      <p>{anécdotas[selected]}</p>
      <p>has {votos} votes</p>
    </div>
  )

}

const App = () =>
{

  const texto = 'give feedback'

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () =>
  {
    const newTotal = total + 1
    setGood(prevGood => prevGood + 1)
    setTotal(newTotal)
  }

  const handleNeutralClick = () =>
  {
    const newTotal = total + 1
    setNeutral(prev => prev + 1)
    setTotal(newTotal)
  }

  const handleBadClick = () =>
  {
    const newTotal = total + 1
    setBad(prevBad => prevBad + 1)
    setTotal(newTotal)

  }

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const handleRandomClick = () =>
  {
    const anecdotesRandom = Math.floor(Math.random() * anecdotes.length)

    setSelected(anecdotesRandom)
  }

  const [votos, setVotos] = useState(new Array(anecdotes.length).fill(0))

  const handleVotoClick = () => 
  {
    const newVotos = [...votos]
    newVotos[selected] += 1
    setVotos(newVotos)
  }

  return (
    <div>
      <Display text={texto} />

      <Button handleClick={() => handleGoodClick()} text='good' />
      <Button handleClick={() => handleNeutralClick()} text='neutral' />
      <Button handleClick={() => handleBadClick()} text='bad' />

      <Display text='statistics' />

      <Statistics good={good} neutral={neutral} bad={bad} total={total} />

      <Anecdotes anécdotas={anecdotes} selected={selected} votos={votos[selected]} />
      <Button handleClick={() => handleVotoClick()} text="voto" />
      <Button handleClick={() => handleRandomClick()} text="random" />


    </div>
  );
};


export default App
