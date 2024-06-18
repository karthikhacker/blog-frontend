import { listBlogApi } from "../api/userApi"
import Banner from "../components/Banner"
import BlogPage from "../components/BlogPage"
import Categories from "../components/Categories"
import Suggestions from "../components/Suggestions"
import useFetch from "../hooks/useFetch"

const Home = () => {
    const { blogs } = useFetch(listBlogApi);
    return (
        <div>
            <Banner />
            <Categories />
            <div className="max-xs:flex md:flex  lg:flex gap-4  px-10 mt-2">
                <BlogPage blogs={blogs.data} />
                <Suggestions />
            </div>
        </div>
    )
}

export default Home