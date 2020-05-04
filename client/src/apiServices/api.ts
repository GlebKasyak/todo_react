import axios from "axios";
import { SERVER_URL } from "../assets/constants/constants";

export default axios.create({
    baseURL: `${ SERVER_URL }/api/`
});

