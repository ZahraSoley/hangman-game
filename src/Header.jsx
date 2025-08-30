import wordList from './wordList.json'

const Header = ({ userLetter, setUserLetter, setRndWord, setManCounter }) => {
  return (
    <div className="self-stretch flex justify-between m-10">
      <p className="text-4xl font-bold ">Hangman Game </p>
      <button
        onClick={() => {
          setUserLetter([])
          setManCounter(0)
          setRndWord(wordList[Math.floor(Math.random() * wordList.length)])
        }
        }
        className="text-2xl font-bold p-4 bg-amber-950 text-amber-50 rounded-md cursor-pointer"
      >
        {userLetter.length > 0 ? 'restart' : 'start'}
      </button>
    </div>
  )
}

export default Header