import React, { useState } from 'react';
import axios from 'axios';
function Login({updateUserDetails}) {
    //capture username / password
    const [formData, setFormData] = useState({ 
        username: "",
        password: ""
    });
        const [errors, setErrors] = useState({});
        const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value
        });
    };


    const validateForm = () => {
        let newError = {};
        let isValid = true;
        if(formData.username.length === 0) {    
            newError.username = "Username is required.";
            isValid = false;
        }
        if(formData.password.length === 0) {
            newError.password = "Password is required.";
            isValid = false;
        }
        setErrors(newError);
        return isValid;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            // if(formData.username === "admin" && formData.password === "admin") {
            //     updateUserDetails({
            //         name: "Ashish",
            //         email: "ashish@gmail.com"
            //     });
            // }else {
            //     setMessage("Invalid username or password.");
            // }

            // Integration with backend with axios

            const body = {
                username: formData.username,
                password: formData.password
            };
            const configuration = {
                withCredentials: true // This is important to send cookies with the request
            }
            try {
                const response = await axios.post("http://localhost:5000/auth/login", body, configuration);
                console.log(response);
            } catch (error) {
                setErrors({ message: 'Something went wrong. Please try again.' });
            }
        }
    };

    return (
        <div>
            <h2>Login Page</h2>
            {errors.message && errors.message}
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
                {errors.username && errors.username}
                <br />
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                {errors.password && errors.password}
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}


export default Login;
