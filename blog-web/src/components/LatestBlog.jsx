import { MdOutlineArrowRightAlt } from "react-icons/md";

const LatestBlog = () => {
    return (
        <div className="mt-4 border-b border-gray-300 pb-4 cursor-pointer">
            <div>
                <h4 className="font-merriweather font-semibold text-lg">Latest news 2024 Elections</h4>
                <p className="flex items-center gap-4 font-merriweather font-semibold mt-4 text-gray-600">
                    Read more
                    <MdOutlineArrowRightAlt size={22} />
                </p>
            </div>
        </div>
    )
}

export default LatestBlog