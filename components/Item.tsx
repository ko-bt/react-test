import type { Work, WorkId } from "@/lib/types"
import { format } from "date-fns"
import { useState } from "react"

interface   ItemProps {
  work: Work
  onCancel: (work: WorkId) => Promise<unknown>
}

export const Item =
  ({ work, onCancel }) => {
    const [seconds, setSeconds] = useState(work.timeMS / 1000)
    let workerState = null
    if (work.status === 'WORKING') {
      workerState =
        seconds > 0 ? (
          <>
            <div>{seconds} seconds remaining...</div>
            <button onClick={() => onCancel(work.id)}>Cancel</button>
          </>
        ) : (
          <span>Updating workload status...</span>
        )
    }
    return (
      <div>
        <h3>Workload #{work.id}</h3>
        <div>Complexity: {work.complexity}</div>

        <div>Status: {work.status}</div>

        {work.status === "WORKING" && (
          <>
            <div>Complete date: {format(work.completeDate, "PPPPpppp")}</div>
            <button onClick={() => onCancel(work)}>Cancel</button>
          </>
        )}
      </div>
    )
  }


export default Item
