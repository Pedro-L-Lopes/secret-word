import './GameOver.css'

const GameOver = ({retry, score, pickedWord}) => {
  return (
    <div className='over'>
      <h1>Game Over</h1>
      <h2>A sua Pontuação foi: <span>{score}</span></h2>
      <h2>A palavra era <span>{pickedWord}</span></h2>
      <button onClick={retry}>Reiniciar Jogo</button>
    </div>
  )
}

export default GameOver