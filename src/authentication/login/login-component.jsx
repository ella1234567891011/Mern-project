import React, { useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button';
import { AuthContext } from "../context/AuthContext";
import './login-component.css';

 const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        email:'',
        password:'',
    });

    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password } = userInfo;

        try{
            await login(email, password); // handling successful login.
            console.log("login Successfully");
            navigate("/home");
        }catch (error) {
            setError(error.message);
            console.log("login failed.please try again");
    }
 };

    const handleOnChangeText = (e, fieldName) => {
        setUserInfo({ ...userInfo, [fieldName]: e.target.value });
    }
              return (
                <>
                <div className="web-page">
                    <div className="left-view"></div>
                    <div className="right-view">
                    <div className="facts">
                    <h2 className="text-center text-red-900 my-5">Login Here</h2>
                    {error ? <p className="text-center text-red-900">{error}</p>: null}
                        <form onSubmit={handleSubmit}> 
                            <FormInput
                            name="email"
                            type="email"
                            value={userInfo.email}
                            onChange={(e) => handleOnChangeText(e, "email")}
                            placeholder="Enter your email"
                            required
                            />
                          <FormInput
                          name="password"
                          type="password"
                          value={userInfo.password}
                          onChange={(e) => handleOnChangeText(e, "password")}
                          placeholder="Enter your password"
                          required
                            />
                            <div>
                                
                                <div
                                style={{
                                    display:"flex",
                                    justifyContent:"center",
                                    marginTop:"20px"
                                }}
                                >
                                     <CustomButton type="submit">Sign In</CustomButton>
                                </div>
                                </div>
                               
                        </form>
                        <h2 className="text-center">if you don't have an account?</h2>
                           <span className="text-center">
                        Click the link below to sign-in
                        <Link
                        to="/Registration"
                        style={{
                            textDecoration:"underline",
                            fontSize:"17px",
                            color:"green",
                            marginLeft:"10px",
                        }}
                        >Sign-in
                        </Link>
                       </span>
                </div>
                </div>
                </div>
                
                </>
            );
        };

        export default Login;
   