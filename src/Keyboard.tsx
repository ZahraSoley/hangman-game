const KEYS = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]
const Keyboard = () => {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(75px,1fr))] gap-0.5 ">
            {KEYS.map((key) => {
                return (
                    <button className="rounded bg-gray-300 px-0.5 py-0.5 text-3xl font-bold uppercase hover:bg-gray-800 hover:text-amber-50 cursor-pointer border-1 aspect-square" key={key}>{key}</button>
                )
            })}
        </div>
    )
}

export default Keyboard 