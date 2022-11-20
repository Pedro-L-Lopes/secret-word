// CSS
import './App.css';

// REACT
import {useCallback, useEffect, useState} from 'react'

// DATA
import {wordsList} from './data/words'

// COMPONENTS
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

const guessesQty = 3

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setwrongLetters] = useState([])
  const [guesses, setguesses] = useState(guessesQty)
  const [score, setScore] = useState(0)

  const picWordAndCategory = useCallback(() => {
    // PICK A RANDOM CATEGORY 
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * categories.length)]

    console.log(category)

    // PICK A RANDOM WORD
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    console.log(word)
    
    return {word, category}
  }, [words])
  
  // START GAME
  const startGame = useCallback(() => {
    // CLEAR ALL LETTER 
    clearLetterStates()

    // PICK WORD AND PICK CATEGORY
    const {word, category} = picWordAndCategory()

    // CREATE AN ARRAY OF LETTERS
    let wordLetters = word.split("")

    wordLetters = wordLetters.map((l) => l.toLowerCase())
    
    console.log(word, category)
    console.log(wordLetters)

    // FILL STATES 
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
    
    
    setGameStage(stages[1].name)
  }, [picWordAndCategory])

  // PROCESS THE LETTER INPUT 
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()
    
    // CHECKED IF LETTER HAS ALREDY BEEN UTILIZED
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return
    } 

    //PUSH GUESSED LETTER OR REMOVE A CHANCHE 
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [ ...actualGuessedLetters, normalizedLetter, ])
    }else{
      setwrongLetters((actualWrongLetters) => [ ...actualWrongLetters, normalizedLetter, ])

      setguesses((actualGuesses => actualGuesses -1))
    }
        
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setwrongLetters([])
  }

  // CHEK IF GUESSES ENDED
  useEffect(() => {
    
    if(guesses <= 0){
      //RESETED ALL STATES 

      clearLetterStates()

      setGameStage(stages[2].name)
    }

  }, [guesses])

  //CHECK WIN CONDITION
  useEffect(() => {

    const uniqueLetters = [... new Set(letters)]  

    // WIN CONDITION  
    if(guessedLetters.length === uniqueLetters.length && stages[1].name){
      // ADD SCORE
      setScore((actualScore) => actualScore += 100)

      // RESTART GAME WITH NEW WORD
      startGame()
    }

    console.log(uniqueLetters)
  }, [guessedLetters, letters, startGame, gameStage])

  console.log(guessedLetters)
  console.log(wrongLetters)

  // RESTARTS THE GAME
  const retry = () => {
    setScore(0)
    setguesses(guessesQty)
    
    setGameStage(stages[0].name)
  }
  
  return (
    <div className="App">
        {gameStage === 'start' && <StartScreen startGame={startGame}/>}
        {gameStage === 'game' && (
            <Game verifyLetter={verifyLetter}
              pickedWord={pickedWord}
              pickedCategory={pickedCategory}
              letters={letters}
              guessedLetters={guessedLetters}
              wrongLetters={wrongLetters}
              guesses={guesses}
              score={score}
            />
        )}
        {gameStage === 'end' && <GameOver retry={retry} score={score} pickedWord={pickedWord}/>}
    </div>
  );
}

export default App;
