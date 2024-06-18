import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { changePassword } from "../api/userApi";
import { Link, useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const UpdatePassword = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const navigate = useNavigate();

    const handlePassword = async e => {
        e.preventDefault();
        if (!currentPassword || !newPassword) {
            toast.error('Old password and new password is required', {
                theme: "colored"
            })
        }
        const userData = { currentPassword, newPassword }
        try {
            const response = await axios.post(`${changePassword}`, userData);
            toast.success(response.data.message);
            navigate("/");
        } catch (err) {
            if (err) toast.error(err.response.data.message);
        }
    }
    return (
        <div className="h-screen flex flex-col items-center">
            <div className="bg-white shadow-lg md:w-[400px] md:my-20 max-sm:my-4 p-8">
                <h2 className="text-center mb-4 mt-2">Change Password</h2>
                <form onSubmit={handlePassword}>
                    <div className="mb-4">
                        <label className="text-gray-400">Old Password</label>
                        <input
                            type="password"
                            className="input input-bordered input-sm w-full rounded-none my-2 "
                            placeholder="Old password"
                            value={currentPassword}
                            onChange={e => setCurrentPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-gray-400">New Password</label>
                        <input
                            type="password"
                            className="input input-bordered input-sm w-full rounded-none my-2 "
                            placeholder="New password"
                            value={newPassword}
                            onChange={e => setNewPassword(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-block btn-sm btn-accent text-pretty text-white font-merriweather">
                        SUBMIT
                    </button>
                    <p className="text-left mt-4">
                        <Link className="flex items-center gap-4 text-gray-500 font-merriweather font-bold" to="/profile"> <FaLongArrowAltLeft />  BACK</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default UpdatePassword