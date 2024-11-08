import { useContext } from "react"
import { GameContext } from "../context/statusContext"
import { formatterMins, formatterMsecs, formatterSecs } from "../helper"

export function WinnerModal () {
  const { status, reset } = useContext(GameContext)
  return (
    <section className="winner">
      <div className="winner-square">
        <h2 className="winner-h2">Congratulations <span className="winner-h2__win">You Win!</span></h2>
        <h3 className="winner-h3">Final Time : {`${formatterMins(status.time)}:${formatterSecs(status.time)}:${formatterMsecs(status.time)}`} </h3>
        <button className="winner-button" onClick={reset} >Start New Game</button>
      </div>
    </section>
  )
}