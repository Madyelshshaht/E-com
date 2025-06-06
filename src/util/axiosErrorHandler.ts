import { isAxiosError } from "axios";



const axiosErrorHandler = (error : unknown ) => {
    if (isAxiosError(error )) {
        return ( error.response?.data || error.response?.data.message || error.message);
    } else {
        return ("unExpected error");
    }
}



export default axiosErrorHandler ;