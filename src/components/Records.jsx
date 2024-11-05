/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react"
import { GameContext } from '../context/statusContext.jsx'
import { formatterMins, formatterMsecs, formatterSecs } from "../helper"
import { useRecords } from "../hooks/useRecords.jsx"

export function Records () {
  const { status } = useContext(GameContext)
  const { records, saveRecord } = useRecords({ status })
  useEffect(() => {
    saveRecord()
  } ,[status.time])

  return (
    <section className="records">
      <h2 className="records-h2">Records</h2>
        <div className="records-container">
      {
        records.map((rec, i) => {
          return (
              <div
              key={i}
              className={`record p${i+1}`}
              >
                <span className={`pos ${i+1}`}>{i+1}.</span>
                <strong>{
                  !rec
                  ?
                  'Empty' 
                  :
                  `${formatterMins(rec)}:${formatterSecs(rec)}:${formatterMsecs(rec)}`
                }</strong>
              </div>
          )
        })
      }
        </div>
    </section>
  )
}