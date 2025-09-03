import { useState } from "react"
import wordList from '../data/wordList.json'

const words = wordList as string[];

type gameStatusType = 'onGoing' | 'lost' | 'won'
interface UseLogicType {
    rndWord: string,
    userLetter: string[],
    wrongCounter: number,
    handleUserWord: (letter: string) => void,
    gameStatus: gameStatusType,
    reset: () => void
}

const UseLogic = (): UseLogicType => {

    const [rndWord, setRndWord] = useState<string>(words[Math.floor(Math.random() * words.length)])
    const [userLetter, setUserLetter] = useState<string[]>([])
    const [wrongCounter, setWrongCounter] = useState<number>(0)

    const handleUserWord = (letter: string) => {

        setUserLetter((prev) => prev.includes(letter) || prev.length >= 9
            ? prev
            : [...prev, letter])

        if (!rndWord.split('').includes(letter)){setWrongCounter(prev => prev + 1)}
    }

    const isWon = rndWord.split('').every(ltr => userLetter.includes(ltr))
    const isLost = wrongCounter >= 6
    const gameStatus = isLost ? 'lost' : isWon ? 'won' : 'onGoing'

    const reset = () => {
        setUserLetter([])
        setWrongCounter(0)
        setRndWord(words[Math.floor(Math.random() * words.length)])
    }


    return { rndWord, userLetter, wrongCounter, gameStatus, reset, handleUserWord }
}

export default UseLogic
