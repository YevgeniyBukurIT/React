import axios from 'axios'


let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '5492f4f3-88d9-4f6c-acc2-35f0df8246c6'}
})



export const getUsersAPI = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(repsonse => {
        return repsonse.data
    })
}

export const getFollowAPI = (id) => {
    return instance.post(`follow/${id}`)


}

export const getUnFollowAPI = (id) => {
    return instance.delete(`follow/${id}`)

}

export const getHeaderAPI = () => {
    return instance.get(`auth/me`)

}

export const authAPI = {
    login(email, password, rememberMe = false) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`/auth/login`)
    }
}

export const getProfileAPI = (userId) => {
    return instance.get(`profile/${userId}`)

}

export const getStatusAPI = (userId) =>{
    return instance.get(`profile/status/${userId}`)
}

export const updateStatusAPI = (status) =>{
    return instance.put(`profile/status`, {status: status})
}

export const setPhotoAPI = (photoFile) => {
    const formData = new FormData();
    formData.append("image", photoFile);

    return instance.put(`profile/photo`, formData,
        {headers: {
                'Content-Type': 'multipart/form-data'}})
}

export const saveProfileAPI = (profile) => {
    return instance.put(`profile`, profile)
}