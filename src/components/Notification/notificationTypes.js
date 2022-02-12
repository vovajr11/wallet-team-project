import { toast } from 'react-toastify';

const notificationSuccess = text => toast.success(text);
const notificationError = text => toast.error(text);

export default {
    notificationSuccess,
    notificationError,
};
