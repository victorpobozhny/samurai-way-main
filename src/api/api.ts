import axios from "axios";

const instance = axios.create({baseURL: `https://social-network.samuraijs.com/api/1.0`, withCredentials: true})

export const usersAPI = {
    getUsers(page: number, pageSize: number) {
        return instance.get(`/users?page=${page}&count=${pageSize}`,)
            .then(res => res.data)
    },
    follow(userId: number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {})
    },
    unfollow(userId: number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
}