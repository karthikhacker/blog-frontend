import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../features/authSlice";
import Loading from "../components/Loading";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { loading, user } = useSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) navigate('/')
    }, [user, navigate])
    const handleSubmit = e => {
        e.preventDefault()
        if (!email || !password) {
            setError("Please provide email and password");
        } else {
            const data = {
                userData: {
                    email,
                    password
                },
                navigate

            }
            dispatch(login(data, navigate))
            setEmail("");
            setPassword("")
        }
    }
    return (
        <div className=" h-screen">
            <div className="md:flex max-sm:flex  md:w-[800px] max-sm:w-[450px] mx-auto my-10 bg-white shadow-xl p-2">
                <div className="md:basis-[50%] max-sm:hidden">
                    <img src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </div>
                <div className="md:basis-[50%] max-sm:basis-[100%] text-center px-4">
                    <h2 className="font-merriweather text-xl">Login</h2>
                    <p className="my-2 text-red-700 text-sm font-merriweather">{error}</p>
                    <form className="my-4" onSubmit={handleSubmit}>
                        <div className="border border-gray-400 mb-4 rounded-sm">
                            <input
                                type="text"
                                className="border-0 outline-0 font-merriweather text-gray-700 px-4 py-2 max-sm:py-2 w-full"
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="border border-gray-400 mb-4 rounded-sm">
                            <input
                                type="password"
                                className="border-0 outline-0 font-merriweather text-gray-700 px-4 py-2 max-sm:py-2 w-full"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-block max-sm:btn-md bg-orange-600 border-0 text-white">
                            {loading ? <Loading /> : 'SIGN IN'}
                        </button>
                    </form>
                    <div>
                        <p className="text-sm font-merriweather text-gray-400 text-left">
                            <Link to="/forget/password">
                                Forgot password ?
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login