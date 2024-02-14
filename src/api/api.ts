import axios from "axios";

const instance = axios.create({baseURL: `https://social-network.samuraijs.com/api/1.0`, withCredentials: true})

export const usersAPI = {
    getUsers(page: number, pageSize: number) {
        return instance.get(`/users?page=${page}&count=${pageSize}`, {withCredentials: true})
            .then(res => res.data)
    }
}