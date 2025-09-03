interface headerType {
  reset: () => void,
  userLetter: string[]
}

const Header = ({ reset, userLetter }: headerType) => {
  return (
    <div className="self-stretch flex justify-between m-10">
      <p className="text-4xl font-bold ">Hangman Game </p>
      <button
        onClick={reset}
        className="text-2xl font-bold p-4 bg-amber-950 text-amber-50 rounded-md cursor-pointer"
      >
        {userLetter.length > 0 ? 'restart' : 'start'}
      </button>
    </div>
  )
}

export default Header