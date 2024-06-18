import { useSelector } from "react-redux"
import Loading from "../components/Loading";
import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { updateApi, uploadImage } from "../api/userApi";
import { toast } from "react-toastify";

const Profile = () => {
    const { user, loading } = useSelector(state => state.auth);
    const [prevImage, setPrevImage] = useState("");
    const [imageLoading, setImageLoading] = useState(false);
    const [loadingUpdate, setLoadingUpdate] = useState(false);

    const handleUpload = async (e) => {
        const selectedFile = e.target.files[0];
        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            setImageLoading(true)
            const response = await axios.post(`${uploadImage}`, formData);
            console.log(response.data.data.location)
            setImageLoading(false)
            setPrevImage(response.data?.data?.location);
        } catch (err) {
            if (err) {
                toast.error(err.response.data.message);
            }
        }
    }
    const updatePhoto = async () => {
        try {
            setLoadingUpdate(true)
            const data = {
                photo: prevImage
            }
            const response = await axios.post(`${updateApi}`, data);
            console.log(response.data);
            setLoadingUpdate(false);
            toast.success(response.data.message);
        } catch (err) {
            if (err.response) {
                toast.error(err.response.data.message)

            }
        }


    }
    if (loading) {
        return <Loading />
    }
    return (
        <div className="h-screen ">
            <div className="md:w-[900px] max-sm:w-[480px] p-4 mx-auto my-10 bg-white shadow-lg md:flex max-sm: flex gap-4">
                <div className="md:basis-[30%] max-sm:basis-[50%]">
                    <div className="relative">
                        {prevImage ? (<img src={prevImage} alt={user.name} className={`w-full bg-cover ${imageLoading ? 'blur-sm' : ''}`} />) : (<img src={user.photo} alt={user.name} className={`w-full bg-cover ${imageLoading ? 'blur-sm' : ''}`} />)}
                        {imageLoading && (
                            <div className="absolute md:left-[50%] right-0 top-40">
                                <Loading />
                            </div>
                        )}

                        <div className="flex flex-row items-center justify-center w-8 h-8 rounded-full bg-orange-600 text-white absolute max-sm:left-16 md:left-28 right-0  -bottom-4">
                            <input
                                type="file" id="custom-input"
                                hidden
                                onChange={handleUpload}
                            />
                            <label htmlFor="custom-input" className="block cursor-pointer">
                                <FaCamera />
                            </label>
                        </div>
                    </div>
                    <button className="btn btn-accent btn-sm btn-block mt-8 text-white rounded-sm" onClick={updatePhoto}>
                        {loadingUpdate ? <Loading /> : 'UDPATE PHOTO'}
                    </button>
                </div>
                <div className="md:basis-[70%] max-sm:basis-[50%]">
                    <h2 className="text-gray-600 font-merriweather md:text-xl">{user.name}</h2>
                    <p className="mt-4 text-sm font-merriweather text-gray-500">
                        {user.email}
                    </p>
                    <p className="text-gray-500 font-merriweather max-sm:text-sm font-bold mt-4">
                        <Link to="/update/password">Change password</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile