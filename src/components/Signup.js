import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const submit = (e) => {
        e.preventDefault(); // Prevent page refresh on form submit

        const URL = "https://script.google.com/macros/s/AKfycbzlKpqDyV-crtIgZL_2_C0mq7_cO9DqigbLeMXZ_0W8Nj2Uu0vzA-6cf1YH6HsQnAw/exec";  // Use your Google Script URL

        // Validate inputs
        if (!name || !email || !password) {
            setError("Please fill in all fields");
            return;
        }

        // Send signup data via fetch
        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `Name=${name}&Email=${email}&Password=${password}&action=signup`,  // Correctly specify signup action
        })
            .then(res => res.text())  // Expecting a simple response like "Success" or error message
            .then((data) => {
                if (data === "Successfully Registered...") {
                    alert("Sucessfully Register")
                    // Redirect to login page after successful signup
                    navigate('/');
                } else {
                    setError(data);  // If there's an error, show it
                }
               
            })
            .catch((error) => {
                console.log(error);
                setError("Something went wrong. Please try again.");
            });
    };

    return (
        <div className="login">
            <div className="login-container">
                <h1>Signup</h1>

                {/* Show error message if there is one */}
                {error && <div className="error-message">{error}</div>}

                <form onSubmit={submit}>
                    {/* Full Name Input */}
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter Your Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-3">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-3">
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <a href="/">Already have an Account? Log in</a>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
