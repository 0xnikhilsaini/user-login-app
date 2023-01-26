import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { updatProfile, getUser } from '../../utills/services'

const useUpdateProfile = (user, setUser) => {
    const [inputs, setInputs] = useState({ lastName: user.userProfile.lastName, firstName: user.userProfile.lastName });
    const navigate = useNavigate();

    const handleChange = (event) => {
        // console.log(user)
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updatProfile(user.accessToken, {
            firstName: inputs.firstName,
            lastName: inputs.lastName
        })
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                getUser(user.accessToken)
                    .then(function (response) {
                        console.log(JSON.stringify(response.data));
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
                alert("Profile updated successfully!");
                navigate('/')
            })
            .catch(function (error) {
                console.log(error);
                alert("got error in prfile Update!");
            });

    }

    return { handleChange, handleSubmit, inputs }
}

export default useUpdateProfile;