import { FaUser } from "react-icons/fa6";

const BlogCard = ({ blog }) => {
    return (
        <div className="card md:w-72 max-sm:w-48 bg-base-100 shadow-xl cursor-pointer rounded-md">
            <figure><img src={blog?.blogImage} alt="Shoes" className="h-40 bg-cover w-full" /></figure>
            <div className="card-body p-2">
                <h2 className="md:text-md max-sm:text-xs font-bold font-merriweather text-gray-500">{blog.title}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-xs rounded-sm btn-primary">Read more ...</button>
                </div>
            </div>
        </div>
    )
}

export default BlogCard