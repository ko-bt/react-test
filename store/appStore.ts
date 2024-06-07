import { create } from "zustand"
import AppController from "@/state/AppController"
import { Work, WorkId } from "@/lib/types"

export type AppStore = {
  init: () => void
  workloads: Work[]
  appController: AppController
  createWorkload: (complexity: WorkId) => Promise<void>
  getWorkload: (id: WorkId) => Promise<void>
  cancelWorkload: (id: WorkId) => any
}
const useAppStore = create<AppStore>((set, get) => ({
  appController: new AppController(),
  workloads: [],
  init: async () => {
    const { appController } = get()
    await appController.init()
    set({ workloads: appController.workloads })
  },
  createWorkload: async (complexity: WorkId) => {
    const { appController } = get()
    await appController.createWorkload({ complexity })
    set({ workloads: [...appController.workloads] })
  },
}))

export default useAppStore
