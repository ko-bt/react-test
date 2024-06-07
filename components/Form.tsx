import formStore from "@/store/formStore"
interface FormProps {
  onSubmit: (params: { complexity: number }) => Promise<unknown>
}

export const Form = ({onSubmit}:FormProps) => {
  const { loading, setComplexity, complexity } = formStore()

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        submit()
      }}
    >
      <div>
        <label>
          Complexity: {complexity}
          <br />
          <input
            value={complexity}
            onChange={(e) => {
              setComplexity(Number(e.target.value))
            }}
            type="range"
            min="1"
            max="10"
          />
        </label>
      </div>

      <div>
        <button type="submit" disabled={loading}>
          {loading ? "Starting…" : "Start work"}
        </button>
      </div>
    </form>
  )
}

export default Form
