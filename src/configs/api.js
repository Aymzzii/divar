import axios from "axios";
import { getCookie } from "utils/cookies";
import { setCookie } from "utils/cookies";
import { getNewTokens } from "services/token";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((request) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
        request.headers["Authorization"] = `bearer ${accessToken}`
    }
    return request
}, error => {
    return Promise.reject(error)
}
)

api.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    const originalRequest = error.config;
    if(error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry === true;
        const response = await getNewTokens()
        if (!response?.response) return;
        setCookie(response.response.data)
        console.log(response);
        return api(originalRequest)
    }
})

export default api;

