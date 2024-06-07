import Item from "components/Item"
import useAppStore from "store/appStore"

export const List =  () => {
  const { workloads } = useAppStore()
  return (
    <ul>
      {workloads.map((work) => (
        <li key={work.id}>
          <Item
            work={work}
            onCancel={async (work) => {
              console.log("Cancel workload", { work })
            }}
          />
        </li>
      ))}
    </ul>
  )
}

export default List
