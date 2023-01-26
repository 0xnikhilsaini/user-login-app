import useHome from "./useHome";
const Home = ({ user,setUser }) => {
    const { handleLogout, handleUpdateProfile, handleDeleteProfile } = useHome(user,setUser);
    return (
        <>
            <h1>Home Page</h1>
            <br />
            <p>Email: {user.email}</p>
            <br />
            <h2>User Profile</h2>
            <br />
            <p>First Name : {user?.userProfile?.firstName}</p>
            <br />
            <p>Last Name: {user?.userProfile?.lastName}</p>
            <br />
            <button onClick={handleUpdateProfile}>Update Profile</button>
            <br />
            <button onClick={handleDeleteProfile}>Delete Profile</button>
            <br />
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Home;