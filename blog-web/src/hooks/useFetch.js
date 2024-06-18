import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify";

const useFetch = (url) => {
    const [blogs, setBlogs] = useState([]);
    const [blogLoading, setBlogLoading] = useState(false);

    const fetchBlogs = async () => {
        try {
            setBlogLoading(true)
            const res = await axios.get(`${url}`);
            setBlogLoading(false);
            setBlogs(res.data);
        } catch (err) {
            console.log(err)
            if (err.response) {
                toast.error(err.response.data.message);
            }
        }

    }
    useEffect(() => {
        fetchBlogs()
    }, [])
    return {
        blogs,
        blogLoading
    }
}

export default useFetch