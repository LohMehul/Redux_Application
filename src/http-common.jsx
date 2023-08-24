import axios from "axios";
export default axios.create({
    // baseURL: "https://jayramin.000webhostapp.com/",
    baseURL: "http://localhost:5000",
    headers: {
        "Content-type": "application/json"
    }
})