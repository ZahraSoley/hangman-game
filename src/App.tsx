import { useState } from "react"
import words from './wordList.json'
import './App.css'
import HangmanDrawing from "./HangmanDrawing"
import { HangmanWord } from "./HangmanWord"
import Keyboard from "./Keyboard"

function App() {
  const [wordToGuess, setWordToGuess] = useState(
    () => { return words[Math.floor(Math.random() * words.length)] }
  )
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  console.log(wordToGuess)

  return (
    <div className="flex gap-10 bg-amber-200 flex-col max-w-3xl ml-auto mr-auto mt-0 mb-0 items-center ">
      <div className="text-center text-3xl">
        Lose win
      </div>
      <HangmanDrawing />
      <HangmanWord />
      <div className="self-stretch">
        <Keyboard />
      </div>
    </div>
  )
}

export default App
