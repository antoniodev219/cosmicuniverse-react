import { toast } from "react-toastify";

export const Success = (message) => {
    toast.success(message,{
        autoClose: 6000,
        position: toast.POSITION.BOTTOM_CENTER,
        pauseOnHover: true,
    });
}

export const Warn = (message) => {
    toast.warn(message, {
        autoClose: 6000,
        position: toast.POSITION.BOTTOM_CENTER
    });
}

const Toast = {
    Success,
    Warn
}

export default Toast