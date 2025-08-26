// import clsx from "clsx"
// import { useState } from "react"

// const KEYS = [
//     "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
//     "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
// ]

// const btnStatus = {
//     inactive: 'opacity-25',
//     active: 'bg-gray-800 text-amber-50'
// }

// const Keyboard = () => {
//     const [status, setStatus] = useState<'active' | 'inactive' | undefined>()
//     return (
//         <div className="grid grid-cols-[repeat(auto-fit,minmax(75px,1fr))] gap-0.5 ">
//             {KEYS.map((key) => {
//                 return (
//                     <button
//                         disabled={!!status}
//                         onClick={() => setStatus('inactive')}
//                         className={clsx("rounded bg-gray-300 text-3xl font-bold uppercase  cursor-pointer border-2 aspect-square hover:not-disabled:bg-gray-800 hover:not-disabled:text-amber-50", status && btnStatus[status],)}
//                         key={key}>
//                         {key}
//                     </button>
//                 )
//             })}
//         </div>
//     )
// }

// export default Keyboard 


import Letters from './Letters.json'

const Keyboard = (props) => {
    return (
        <>
            {
                Letters.map(letter => {
                    <div className='grid bg-black text-amber-50 font-bold text-3xl'>{letter}</div>
                }
                )
            }
        </>
    )
}

export default Keyboard