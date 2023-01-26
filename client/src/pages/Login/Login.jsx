import { useNavigate } from "react-router-dom";
import useLogin from "./useLogin";

const Login = ({setUser}) => {
    const navigate = useNavigate();
    const { handleChange, handleSubmit, inputs } = useLogin(setUser);
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
                <button type="submit" >Login</button>
            </form>
            <br />
            <button onClick={(e) => {
                e.preventDefault();
                navigate('/signup');
            }}>Signup</button>
        </>

    )
}

export default Login;