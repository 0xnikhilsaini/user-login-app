import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { signup } from '../../utills/services'
const useSignup = () => {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        signup({
            email: inputs.email,
            password: inputs.password
        })
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                navigate('/login')
                alert("sighup successfully!");
            })
            .catch(function (error) {
                if (error.response?.status === 400) {
                    alert(`${error?.response?.data?.message}`)
                } else {
                    alert("got error in login!");
                }
            });
    }

    return { handleChange, handleSubmit, inputs }
}

export default useSignup;