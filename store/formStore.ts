import { create } from "zustand"
import useAppStore from "@/store/appStore"

export type FormStore = {
  complexity: number
  loading: boolean
  setComplexity: (complexity: number) => void
  startLoading: () => void
  endLoading: () => void
  reset: () => void
  submit: () => Promise<void>
}
const useFormStore = create<FormStore>((set, get) => ({
  complexity: 1,
  loading: false,
  setComplexity: (value: number) => set({ complexity: value }),
  startLoading: () => set({ loading: true }),
  endLoading: () => set({ loading: false }),
  reset: () => set({ complexity: 1, loading: false }),
  submit: async () => {
    set({ loading: true })
    try {
      const { createWorkload } = useAppStore.getState()
      await createWorkload(get().complexity)
      set({ complexity: 1, loading: false })
    } catch (error) {
      set({ loading: false })
    }
  },
}))

export default useFormStore
