import axios from "axios"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout({updateUserDetails}){
    const navigate = useNavigate();
    const handleLogout = async () => {
        try{
            await axios.post('http://localhost:5000/auth/logout', {}, {
                withCredentials: true
            });
            updateUserDetails(null);
        }catch (error) {
            console.error("Logout failed:", error);
            navigate('/error');
        }
    };
    useEffect(() => {
        handleLogout();
    }, []);
}
export default Logout;