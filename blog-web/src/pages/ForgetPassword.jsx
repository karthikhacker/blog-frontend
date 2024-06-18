import { useState } from "react"

const ForgetPassword = () => {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!email) setError('Provide email address!')
    }
    return (
        <div className="h-screen flex flex-col items-center  my-20">
            <div className=" bg-white shadow-lg w-[400px] py-2 px-4 text-center">
                <p className="text-sm text-red-600 font-merriweather my-2">{error}</p>
                <form onSubmit={handleSubmit}>
                    <div className="my-8 text-left">
                        <label className="text-gray-500 font-merriweather">Email Address</label>
                        <input
                            type="email"
                            className="input input-sm input-bordered w-full rounded-sm mt-1"
                            placeholder="Email"
                        />
                    </div>
                    <button className="btn btn-sm btn-block bg-orange-600 text-white hover:bg-orange-500 mb-2">
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword