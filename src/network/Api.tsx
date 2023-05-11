import { AxiosInstance } from "./AxiosInstance";

export class baseNetwork {

    async getAll() {

        try {
            const allData = await AxiosInstance.get('')
            return allData.data

        } catch (error) {
            console.log(error)
        }
    }
}
