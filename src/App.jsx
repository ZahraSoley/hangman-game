import './App.css'
import { useState, useEffect } from "react"
import wordList from './wordList.json'
import Header from './Header'
import HangmanDrawing from "./HangmanDrawing"
import HangmanWord from "./HangmanWord"
import Keyboard from "./Keyboard"

export default function App() {
  const [userLetter, setUserLetter] = useState([])
  const [rndWord, setRndWord] = useState(wordList[Math.floor(Math.random() * wordList.length)])

  const handleUserWord = (letter) => {
    setUserLetter((prev) => prev.includes(letter) || prev.length > 3 ? prev : [...prev, letter])
  }

  useEffect(() => {
    console.log("Updated userLetter:", userLetter)
  }, [userLetter])

  useEffect(() => {
    console.log('random word is:', rndWord)
  }, [rndWord])

  return (
    <div className='flex flex-col gap-15 max-w-3xl m-auto bg-amber-200 items-center'>
      <Header userLetter={userLetter} setUserLetter={setUserLetter} />
      <HangmanDrawing />
      <HangmanWord rndWord={rndWord} userLetter={userLetter} />
      <Keyboard handleUserWord={handleUserWord} />
    </div >
  )
}


