import React, { useState } from 'react';
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

    const handleSubmit = (e) => {
        e.preventDefault();

    if(validateForm()) {
        if(formData.username === "admin" && formData.password === "admin") {
            updateUserDetails({
                name: "Ashish",
                email: "ashish@gmail.com"
            });
        }else {
            setMessage("Invalid username or password.");
        }
    }
}
  return (
    <div>
      <h2>Login Page</h2>
        {message && message}
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
