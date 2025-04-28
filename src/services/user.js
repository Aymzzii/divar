import api from "configs/api";
import { getCookie } from "../utils/cookies";

const getProfile = async() => await api.get("user/whoami")
.then((res) => res || false)

// const getProfile = async () => {
//     try {
//         const response = await api.get("user/whoami", {
//             headers: { Authorization: `Bearer ${token}` }
//         });
//         console.log("API Response:", response.data);
//         return response.data; 
//     } catch (error) {
//         console.error("Error fetching profile:", error);
//         throw error; 
//     }
// };


export {getProfile}