import { useState } from "react"
import wordList from '../data/wordList.json'

const UseLogic = () => {

    const [rndWord, setRndWord] = useState(wordList[Math.floor(Math.random() * wordList.length)])
    const [userLetter, setUserLetter] = useState([])
    const [wrongCounter, setWrongCounter] = useState(0)

    const handleUserWord = (letter) => {

        setUserLetter((prev) => prev.includes(letter) || prev.length >= 9
            ? prev
            : [...prev, letter])

        rndWord.split('').includes(letter) ? null : setWrongCounter(prev => prev + 1)
    }

    const isWon = rndWord.split('').every(ltr => userLetter.includes(ltr))
    const isLost = wrongCounter >= 6
    const gameStatus = isLost ? 'lost' : isWon ? 'won' : 'onGoing'

    const reset = () => {
        setUserLetter([])
        setWrongCounter(0)
        setRndWord(wordList[Math.floor(Math.random() * wordList.length)])
    }


    return { rndWord, userLetter, wrongCounter, gameStatus, reset, handleUserWord }
}

export default UseLogic
