import './App.css'
import { useState, useEffect } from "react"
import wordList from './wordList.json'
import Header from './Header'
import HangmanDrawing from "./HangmanDrawing"
import HangmanWord from "./HangmanWord"
import Keyboard from "./Keyboard"

export default function App() {
  const [rndWord, setRndWord] = useState(wordList[Math.floor(Math.random() * wordList.length)])
  const [userLetter, setUserLetter] = useState([])
  const [manarr, setManarr] = useState([])

  const handleUserWord = (letter) => {
    setUserLetter((prev) => prev.includes(letter) || prev.length >= 9 ? prev : [...prev, letter])
  }

  const handleman = () => {
    const rndWordLtr = rndWord.split('')
    userLetter.map((ltr) => {
      rndWordLtr.includes(ltr)?null:setManarr(prev=>[...prev,prev+1])
    })
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


