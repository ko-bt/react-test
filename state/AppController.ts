import type { CreateRequest, GetAllResponse, Work } from "@/lib/types"
import WorkService from "@/lib/mock-service"

export class AppController {
  private   workerClient = new WorkService()

  private fetchedData: GetAllResponse | undefined = undefined


  get workloads(): Work[] {
    return this.fetchedData?.workloads || []
  }

  init = async () => {
    // add some dummy data when app boots to get started
    await this.refresh()
  }

  private refresh = async () => {
    this.fetchedData = await this.workerClient.getAllWorkloads()
  }

  createWorkload = async (params: CreateRequest) => {
    console.log("TODO: create workload", params)
  }
}

export default AppController
