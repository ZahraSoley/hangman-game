import clsx from "clsx"

interface drawingType { wrongCounter: number }

const HangmanDrawing = ({ wrongCounter }: drawingType) => {

  return (
    <div className="relative">
      <div className={clsx(wrongCounter > 0 && "border-black w-20 h-20 rounded-full border-8 absolute left-61 top-10")}></div>
      <div className={clsx(wrongCounter > 1 && "bg-black w-2 h-40 absolute left-70 top-30")}></div>
      <div className={clsx(wrongCounter > 2 && "bg-black w-30 h-2 absolute left-72 top-40 rotate-[-50deg] origin-bottom-left")}></div>
      <div className={clsx(wrongCounter > 3 && "bg-black w-30 h-2 absolute left-40 top-40 origin-bottom-right rotate-[50deg]")}></div>
      <div className={clsx(wrongCounter > 4 && "bg-black w-30 h-2 absolute left-70 top-68 rotate-[50deg] origin-bottom-left")}></div>
      <div className={clsx(wrongCounter > 5 && "bg-black w-30 h-2 absolute left-42 top-68 origin-bottom-right rotate-[-50deg]")}></div>
      <div className="bg-black w-2 h-10 ml-70 absolute "></div>
      <div className="bg-black w-30 h-2 ml-40"></div>
      <div className="bg-black h-100 w-2 ml-40"></div>
      <div className="bg-black w-100 h-2 "></div>
    </div >
  )
}

export default HangmanDrawing

