import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loading } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        const userData = { name, email, password }
        dispatch(signup(userData))
        setName("");
        setEmail("");
        setPassword("")
        navigate('/')
    }
    return (
        <div className="h-screen bg-orange-600 py-10">
            <div className="md:w-[600px] max-sm:w-[450px] mx-auto rounded-md    bg-white shadow-lg flex flex-col justify-center items-center px-8">
                <h2 className="font-merriweather text-center py-4 text-lg">Signup</h2>
                <form className="w-72" onSubmit={handleSignup}>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="input input-bordered input-sm w-full"
                            placeholder="Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            className="input input-bordered  input-sm w-full"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            className="input input-bordered  input-sm w-full"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-neutral w-full mb-8 btn-sm">
                        {loading ? <Loading /> : 'SUBMIT'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Signup