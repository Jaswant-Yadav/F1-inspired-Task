import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [forgotEmail, setForgotEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otpError, setOtpError] = useState('');
    const [generatedOtp, setGeneratedOtp] = useState('');


    const submit = (e) => {
        e.preventDefault();

        const URL = "https://script.google.com/macros/s/AKfycbzlKpqDyV-crtIgZL_2_C0mq7_cO9DqigbLeMXZ_0W8Nj2Uu0vzA-6cf1YH6HsQnAw/exec";

        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }

        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `Email=${trimmedEmail}&Password=${trimmedPassword}&action=login`,
        })
            .then(res => res.text())
            .then((data) => {
                if (data === "Login Successful") {
                    navigate('/home');
                } else {
                    setError("Incorrect email or password");
                }
            })
            .catch((error) => {
                setError("Something went wrong. Please try again.");
            });
    };

    const openForgotPasswordModal = () => {
        setShowModal(true);
    };

    const closeForgotPasswordModal = () => {
        setShowModal(false);
        setForgotEmail('');
        setOtpSent(false);
        setOtp('');
        setOtpError('');
    };


    const handleForgotPasswordSubmit = (e) => {
        e.preventDefault();


        if (!forgotEmail || !/\S+@\S+\.\S+/.test(forgotEmail)) {
            setOtpError("Please enter a valid email address.");
            return;
        }

        const generatedOTP = Math.floor(100000 + Math.random() * 900000);
        setGeneratedOtp(generatedOTP.toString());

        const templateParams = {
            email: forgotEmail,
            passcode: generatedOTP,
        };

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,   // Access Service ID from .env
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,  // Access Template ID from .env
            templateParams,                              // Pass the parameters to the template
            process.env.REACT_APP_EMAILJS_USER_ID  // Your EmailJS User ID
        ).then(
            (result) => {
                console.log('OTP sent successfully', result.text);
                setOtpSent(true);
                alert(`OTP sent to ${forgotEmail}`);
            },
            (error) => {
                console.log('Error sending OTP:', error.text);
                setOtpError('Failed to send OTP. Please try again.');
            }
        );
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();

        if (otp === generatedOtp) {
            alert("OTP verified!");
            navigate('/home');
        } else {
            setOtpError('Invalid OTP. Please try again.');
        }
    };

    return (
        <div className="login">
            <div className="login-container">
                <h1>Login</h1>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={submit}>
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

                    <button type="submit" className="btn btn-primary">Login</button>
                    <br /><br />
                    <div>
                        <button type="button" onClick={openForgotPasswordModal} className="signup-link">Forgot Password?</button>
                    </div>
                    <div>
                        <a href="/signup" className="signup-link">Don't have an account? Sign up</a>
                    </div>
                    <br />
                </form>
            </div>

            {/* Forgot Password Modal */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Forgot Password</h2>
                            <button onClick={closeForgotPasswordModal} className="close-modal-btn">&times;</button>
                        </div>

                        {!otpSent ? (
                            // Send OTP Form
                            <form onSubmit={handleForgotPasswordSubmit}>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email to receive OTP"
                                        value={forgotEmail}
                                        onChange={(e) => setForgotEmail(e.target.value)} // This binds the input to the forgotEmail state
                                        required
                                    />
                                </div>
                                {otpError && <div className="error-message">{otpError}</div>}
                                <button type="submit" className="btn btn-primary">Send OTP</button>
                            </form>
                        ) : (
                            // OTP Verification Form
                            <form onSubmit={handleVerifyOtp}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter OTP"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        required
                                    />
                                </div>
                                {otpError && <div className="error-message">{otpError}</div>}
                                <button type="submit" className="btn btn-primary">Verify OTP</button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
