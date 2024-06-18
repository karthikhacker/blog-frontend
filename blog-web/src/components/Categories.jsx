
const Categories = () => {
    const categories = ["Startup", "Crypto", "Technology", "News", "Sports", "Apps"]
    return (
        <div className="max-xs:px-2 mt-8 mb-8 border-b-2 py-5 mx-10">
            <ul className="flex max-sm:gap-6 gap-20 cursor-pointer">
                {categories.map((cat, i) => (
                    <li key={i} className="font-merriweather text-sm font-bold text-gray-600 cursor-pointer">
                        {cat}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories