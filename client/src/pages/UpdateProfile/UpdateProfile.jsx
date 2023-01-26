import { useNavigate } from "react-router-dom";
import useUpdateProfile from "./useUpdateProfile";

const UpdateProfile = ({user,setUser}) => {
    const { handleChange, handleSubmit, inputs } = useUpdateProfile(user,setUser);
    return (
        <>
            <h1>UpdateProfile Page</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <br />
                <input
                    type="text"
                    name="firstName"
                    value={inputs.firstName || ""}
                    onChange={handleChange}
                />
                <br />
                <label>Last Name</label>
                <br />
                <input
                    type="text"
                    name="lastName"
                    value={inputs.lastName || ""}
                    onChange={handleChange}
                />
                <br />
                <button type="submit" >Update Profile</button>
            </form>
            <br />
        </>

    )
}

export default UpdateProfile;