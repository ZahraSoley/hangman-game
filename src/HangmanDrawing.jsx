// const manShape = [
//   "border-black w-20 h-20 rounded-full border-8 absolute left-61 top-10",
//   "bg-black w-2 h-40 absolute left-70 top-30",
//   "bg-black w-30 h-2 absolute left-72 top-40 rotate-[-50deg] origin-bottom-left",
//   "bg-black w-30 h-2 absolute left-40 top-40 origin-bottom-right rotate-[50deg]",
//   "bg-black w-30 h-2 absolute left-70 top-68 rotate-[50deg] origin-bottom-left",
//   "bg-black w-30 h-2 absolute left-42 top-68 origin-bottom-right rotate-[-50deg]",
// ]

// const HangmanDrawing = ({ manCounter }) => {

//   return (
//     <div className="relative">
//       {
//         manCounter > -1 && manShape.map(shape => <div className={manShape[manCounter]}></div>
//         )
//       }
//       <div className="bg-black w-2 h-10 ml-70 absolute "></div>
//       <div className="bg-black w-30 h-2 ml-40"></div>
//       <div className="bg-black h-100 w-2 ml-40"></div>
//       <div className="bg-black w-100 h-2 "></div>
//     </div>
//   )
// }

// export default HangmanDrawing


const manShape = [
  "border-black w-20 h-20 rounded-full border-8 absolute left-61 top-10",
  "bg-black w-2 h-40 absolute left-70 top-30",
  "bg-black w-30 h-2 absolute left-72 top-40 rotate-[-50deg] origin-bottom-left",
  "bg-black w-30 h-2 absolute left-40 top-40 origin-bottom-right rotate-[50deg]",
  "bg-black w-30 h-2 absolute left-70 top-68 rotate-[50deg] origin-bottom-left",
  "bg-black w-30 h-2 absolute left-42 top-68 origin-bottom-right rotate-[-50deg]",
]

const HangmanDrawing = ({ manCounter }) => {

  return (
    <div className="relative">
      <div className={manCounter > 0 && "border-black w-20 h-20 rounded-full border-8 absolute left-61 top-10"}></div>
      <div className={manCounter > 1 && "bg-black w-2 h-40 absolute left-70 top-30"}></div>
      <div className={manCounter > 2 && "bg-black w-30 h-2 absolute left-72 top-40 rotate-[-50deg] origin-bottom-left"}></div>
      <div className={manCounter > 3 && "bg-black w-30 h-2 absolute left-40 top-40 origin-bottom-right rotate-[50deg]"}></div>
      <div className={manCounter > 4 && "bg-black w-30 h-2 absolute left-70 top-68 rotate-[50deg] origin-bottom-left"}></div>
      <div className={manCounter > 5 && "bg-black w-30 h-2 absolute left-42 top-68 origin-bottom-right rotate-[-50deg]"}></div>
      <div className="bg-black w-2 h-10 ml-70 absolute "></div>
      <div className="bg-black w-30 h-2 ml-40"></div>
      <div className="bg-black h-100 w-2 ml-40"></div>
      <div className="bg-black w-100 h-2 "></div>
    </div >
  )
}

export default HangmanDrawing