import './App.css'
import { useEffect } from "react"
import Header from './components/Header'
import HangmanDrawing from "./components/HangmanDrawing"
import HangmanWord from "./components/HangmanWord"
import Keyboard from "./components/Keyboard"
import clsx from 'clsx'
import UseLogic from './hooks/UseLogic'

export default function App() {

  const { rndWord, userLetter, wrongCounter, gameStatus, reset, handleUserWord } = UseLogic()

  useEffect(() => {
    console.log("Updated userLetter", userLetter, '    counter:', wrongCounter)
  }, [userLetter])

  useEffect(() => {
    console.log('random word is:', rndWord)
  }, [rndWord])

  return (
    gameStatus !== 'onGoing'
      ? <div className={clsx(gameStatus === 'lost' ? 'bg-red-300' : gameStatus === 'won' && 'bg-lime-200', 'h-[100vh] w-[100vw] m-auto flex justify-center items-center')}>
        <div className='text-9xl font-bold uppercase'>{gameStatus === 'lost' ? 'sorry!you lost!' : 'you won!'}</div>
      </div>
      : <div className='flex flex-col gap-15 max-w-3xl m-auto bg-sky-200 items-center'>
        <Header reset={reset} userLetter={userLetter} />
        <HangmanDrawing wrongCounter={wrongCounter} />
        <HangmanWord rndWord={rndWord} userLetter={userLetter} />
        <Keyboard handleUserWord={handleUserWord} userLetter={userLetter} rndWord={rndWord} />
      </div >
  )
}
