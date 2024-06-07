import { useEffect } from "react"
import Form from "components/Form"
import List from "components/List"
import formStore from "store/formStore"
import useAppStore from "store/appStore"

export const App =  () => {
  const { init ,createWorkload,workloads} = useAppStore()
  const { submit } = formStore()


  useEffect(() => {
     init()
  }, [ ])

  return (
    <div>
      <div>
        <h2>Create workload</h2>
        <Form onSubmit={submit} />
      </div>
      <hr />
      <div>
        <h2>Workloads</h2>
        <List workloads={ workloads} />
      </div>
    </div>
  )
}

export default App
