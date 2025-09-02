
const HangmanWord = ({ rndWord, userLetter }) => {
    const rndWordLtr = rndWord.split('')

    return (
        <div className="flex gap-5">
            {rndWordLtr.map((ltr, index) =>
                <span key={index} className="font-bold text-4xl border-b-6 w-8">
                    <span className={userLetter.includes(ltr) ? 'visible' : 'invisible'}>{ltr}</span>
                </span>)
            }
        </div >
    )
}

export default HangmanWord
