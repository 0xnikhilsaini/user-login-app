import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { getUser, deleteProfile } from '../../utills/services'
const useHome = (user, setUser) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        setUser("")
        navigate("/login")
    }
    const handleUpdateProfile = () => {
        navigate("/profileUpdate")
    }
    const handleDeleteProfile = () => {
        deleteProfile(user.accessToken)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                getUser(user.accessToken)
                    .then(function (response) {
                        const userData = {
                            accessToken: user.accessToken,
                            email: user.email,
                            id: user.id,
                            userProfile: response.data.data.userProfile
                        }
                        setUser(userData);
                        navigate('/')
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                alert("profile deleted successfully!")

            })
            .catch(function (error) {
                alert("error in delete successfully!")
                console.log(error);
            });

    }
    return { handleLogout, handleUpdateProfile, handleDeleteProfile }
}

export default useHome;