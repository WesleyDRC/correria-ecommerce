import { api } from "../services/api";

class AxiosRepository {

    #axiosClient;

    constructor() {
        this.#axiosClient = api;
    }

    async createUser({email, password}) {
        return this.#axiosClient.post("/auth/signUp", {
            email,
            password
        })
    }
}

export default new AxiosRepository()
