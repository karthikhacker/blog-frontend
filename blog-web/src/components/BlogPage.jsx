import BlogCard from "./BlogCard"

const BlogPage = ({ blogs }) => {
    console.log(blogs)
    return (
        <div className="flex flex-col basis-[70%]">
            <div className="grid md:grid-cols-3 gap-2 max-sm:grid-cols-2 max-sm:gap-2">
                {blogs?.map(blog => <BlogCard key={blog._id} blog={blog} />)}
            </div>
            <div className="join mt-4 mb-4">
                <button className="join-item btn btn-md">1</button>
                <button className="join-item btn btn-md btn-active">2</button>
                <button className="join-item btn btn-md">3</button>
                <button className="join-item btn btn-md">4</button>
            </div>
        </div>
    )
}

export default BlogPage