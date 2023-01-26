import { useNavigate } from "react-router-dom";
import useSignup from "./useSignup";


const Signup = () => {
    const navigate = useNavigate();
    const { handleChange, handleSubmit, inputs } = useSignup();
    return (
        <>
            <h1>Signup Page</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <br />
                <input
                    type="email"
                    name="email"
                    value={inputs.email || ""}
                    onChange={handleChange}
                />
                <br />
                <label>Password</label>
                <br />
                <input
                    type="password"
                    name="password"
                    value={inputs.password || ""}
                    onChange={handleChange}
                />
                <br />
                <button type="submit" >Signup</button>
            </form>
            <br />
            <button onClick={(e) => {
                e.preventDefault();
                navigate('/login');
            }}>Login</button>
        </>

    )
}

export default Signup;