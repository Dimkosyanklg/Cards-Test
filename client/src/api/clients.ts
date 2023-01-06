import axios from "axios";

const client = axios.create({
    withCredentials: true,
});

client.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status == 401) {
            window.location.href = "/login";
        }
        return Promise.reject(error)
    }
);

export { client };
