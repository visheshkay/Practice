import React from 'react'
import './Login.css'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
    let { register, handleSubmit, formState: { errors } } = useForm()
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const login = ()=>{

    }
    return (
        <div className="signinmain mx-auto">
            <img src="https://media.licdn.com/dms/image/C510BAQH7cLWQv17law/company-logo_200_200/0/1630605479999?e=2147483647&v=beta&t=p7MVNecx2tDI8pynz7eWRoOZKUhZHWJapBOLD5J-OOQ" style={{width:'100px'}}/>
            <form className="mx-auto p-4 bg-light formmain rounded" onSubmit={handleSubmit(login)}>
                <div className="radiobut">
                    <input type="radio" id="buyer" name="userType" value="buyer" checked="checked" {...register("userType")} />
                    <label for="user">Buyer</label>
                    <input type="radio" id="seller" name="userType" value="seller" {...register("userType")} />
                    <label for="author">Seller</label>
                </div>
                <div className="username m-2 p-3 ">

                    <input type="text" id="username" className="form-control w-75 mx-auto" placeholder='username'{...register("username", { required: true })} />
                    {errors.username?.type === "required" &&
                        (<p className="text-danger">Required</p>)}
                </div>
                <div className="password m-2 p-3">
                    <div className="position-relative  d-flex mx-auto w-75 pass-wrapper">
                        <input type={showPassword ? 'text' : 'password'} id="pass" className="form-control w-100" placeholder='password'{...register("password", { required: true })} />
                        <i onClick={togglePasswordVisibility} className="flex justify-around items-center">
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </i>

                    </div>
                    {errors.password?.type === "required" &&
                        (<p className="text-danger">Required</p>)}

                </div>
                <button className="btn button-reg  mx-auto d-block" style={{ backgroundColor: "var(--main-yellow)" }}>Login</button>
            </form>
            {/* {(
                errMsg.length !== 0 &&
                <h1 className="lead text-center text-danger">{errMsg}</h1>
            )} */}
            <p className="lead text-center mt-2">New User?
                <Link to="/new-user" className="fs-4 px-3">Register</Link>
                here
            </p>

        </div>
    )
}

export default Login
