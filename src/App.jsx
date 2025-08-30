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
  const [manCounter, setManCounter] = useState(0)
  const [lost, setLost] = useState(false)

  const handleUserWord = (letter) => {

    setUserLetter((prev) => prev.includes(letter) || prev.length >= 9
      ? prev
      : [...prev, letter])

    rndWord.split('').includes(letter) ? null : setManCounter(prev => prev + 1)

  }

  // useEffect(() => {
  //   if (userLetter.length > 0) {
  //     const rndWordLtr = rndWord.split('')
  //     rndWordLtr.includes(userLetter[userLetter.length - 1]) ? null : setManCounter(prev => prev + 1)
  //   }
  // }, [userLetter])

  useEffect(() => {
    manCounter === 6 &&
      setTimeout(() => {
        setLost(true)
      }, 1000)
  }, [manCounter])

  useEffect(() => {
    console.log("Updated userLetter:", userLetter, '    counter:', manCounter)
  }, [userLetter])

  useEffect(() => {
    console.log('random word is:', rndWord)
  }, [rndWord])


  return (
    lost === true
      ?
      <div className='h-100 w-100 bg-red-400 flex justify-center items-center'>
        <div className='text-9xl font-bold text-center uppercase'>you lost</div>
      </div>

      :
      <div className='flex flex-col gap-15 max-w-3xl m-auto bg-amber-200 items-center'>
        <Header userLetter={userLetter} setUserLetter={setUserLetter} setManCounter={setManCounter} setRndWord={setRndWord} />
        <HangmanDrawing manCounter={manCounter} />
        <HangmanWord rndWord={rndWord} userLetter={userLetter} />
        <Keyboard handleUserWord={handleUserWord} userLetter={userLetter} rndWord={rndWord} />
      </div >

  )
}


