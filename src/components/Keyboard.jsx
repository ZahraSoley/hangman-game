
import clsx from 'clsx'
import Letters from '../data/Letters.json'

const Keyboard = ({ handleUserWord, rndWord, userLetter }) => {

    return (
        <>
            <div
                className='self-stretch flex flex-col items-center justify-center gap-9'>
                <div className='self-stretch grid grid-cols-[repeat(auto-fit,minmax(75px,1fr))] gap-1'>
                    {
                        Letters.map(letter => {
                            return (
                                <button
                                    key={letter}
                                    disabled={userLetter.includes(letter)}
                                    onClick={() => { handleUserWord(letter) }}
                                    className={clsx('bg-blue-100 text-3xl font-bold uppercase aspect-square border-2 rounded cursor-pointer hover:bg-sky-950 hover:text-sky-100'
                                        , userLetter.includes(letter) && 'bg-sky-950 text-sky-100'
                                        , userLetter.includes(letter) && !rndWord.split('').includes(letter) && 'opacity-20')}>
                                    {letter}
                                </button>
                            )
                        }
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default Keyboard