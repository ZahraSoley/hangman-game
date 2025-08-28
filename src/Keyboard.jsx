
import Letters from './Letters.json'

const Keyboard = ({ handleUserWord, visibility, setVisibility, userLetter }) => {

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
                                    onClick={() => handleUserWord(letter)}
                                    className='bg-blue-100 text-3xl font-bold uppercase aspect-square border-2 rounded cursor-pointer hover:bg-sky-950 hover:text-sky-100'>
                                    {letter}
                                </button>
                            )
                        }
                        )
                    }

                </div>
                <p>{ }</p>
            </div>
        </>
    )
}

export default Keyboard