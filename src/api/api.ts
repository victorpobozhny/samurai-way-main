import axios from "axios";
import {AuthResponse, LoginPropsType} from "../redux/auth-reducer";

const instance = axios.create({baseURL: `https://social-network.samuraijs.com/api/1.0`, withCredentials: true})

export const usersAPI = {
    getUsers(page: number, pageSize: number) {
        return instance.get(`/users?page=${page}&count=${pageSize}`,)
            .then(res => res.data)
    },
    follow(userId: number) {
        return instance.post(`/follow/${userId}`, {})
    },
    unfollow(userId: number) {
        return instance.delete(`/follow/${userId}`)
    },
}

export const authAPI = {
    me() {
        return instance.get<AuthResponse>('/auth/me',)
    },
    login(data: LoginPropsType) {
        return instance.post<AuthResponse<{userId: number}>>('/auth/login', {data})
    },
    logout() {
        return instance.delete('/auth/login')
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`/profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus (status: string) {
        return instance.put(`/profile/status`, {status})
    }
}