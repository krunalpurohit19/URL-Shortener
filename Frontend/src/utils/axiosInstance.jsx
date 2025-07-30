import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://url-shortener-nu-taupe.vercel.app/api',
    timeout: 10000, // Set a timeout for requests
    withCredentials: true,
});

//Response interceptor
axiosInstance.interceptors.response.use(
    (response) => { return response; },
    (error) => {
        //Handle different types of errors
        if (error.response) {
            const { status, data } = error.response;

            switch (status) {
                case 400:
                    console.error("Bad Request:", data.message);
                    break;
                case 401:
                    console.error("Unauthorized:", data.message);
                    break;
                case 403:
                    console.error("Forbidden:", data.message);
                    break;
                case 404:
                    console.error("Not Found:", data.message);
                    break;
                case 500:
                    console.error("Server Error:", data.message);
                    break;
                default:
                    console.error(`Error (${status}):`, data.message);
            }
        } else if (error.request) {
            console.error("Network Error: No response received:", error.request);
        } else {
            console.error("Error:", error.message);
        }
        //You can customize the error object before rejecting
        return Promise.reject({
            isAxiosError: true,
            message: error.response?.data?.message || error.message || "Unknown error occurred",
            status: error.response?.status,
            data: error.response?.data,
            originalError: error,
        });
    }
);

export default axiosInstance;
