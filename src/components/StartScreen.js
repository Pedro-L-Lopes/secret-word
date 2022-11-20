import './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <section className='title'>
          <h2>Secret</h2>
          <h1>WORD</h1>
        </section>
        <button onClick={startGame}>PLAY</button>
    </div>
  )
}

export default StartScreen