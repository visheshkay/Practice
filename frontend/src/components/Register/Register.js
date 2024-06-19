
import './Register.css'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Register() {
    let navigate = useNavigate();
    let {register,handleSubmit,formState:{errors}}=useForm();
    let [err,setErr] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    async function registerUser(user){
        console.log(user)
        let res;
        if(user.userType=='seller'){
            res = await axios.post('http://localhost:4000/seller-api/sellers',user)
        }
        else{
            res = await axios.post('http://localhost:4000/buyer-api/buyers',user)
        }
        if(res.data.message==='Seller created' || res.data.message==='Buyer created'){
            navigate('/login')
        }
        else{
            setErr(res.data.message)
        }
        
    }
    return (
        <div className="signupmain mt-5 w-70 mx-auto">
    <img src="https://media.licdn.com/dms/image/C510BAQH7cLWQv17law/company-logo_200_200/0/1630605479999?e=2147483647&v=beta&t=p7MVNecx2tDI8pynz7eWRoOZKUhZHWJapBOLD5J-OOQ" style={{width:'100px'}}/>
    <form className=" mx-auto p-4 pt-3 bg-light formmain rounded" onSubmit={handleSubmit(registerUser)}>
    <div className="radiobut">
                    <input type="radio" id="buyer" name="userType" value="buyer" checked="checked" {...register("userType")} />
                    <label for="user">Buyer</label>
                    <input type="radio" id="seller" name="userType" value="seller" {...register("userType")} />
                    <label for="author">Seller</label>
                </div>
    <div className="facid mb-4">
            
            <input type="text" id="facid" className="form-control w-50 mx-auto m-3" placeholder="username" {...register("username",{required:true})}/>
            {errors.username && errors.username.type==="required" &&
            (<p className="text-danger text-center">Required</p>)}
        </div>

            <div className="uname mb-2">

            <input type="text" id="name" className="form-control w-50 mx-auto m-3"  placeholder="name"{...register("name",{required:true})}/>
            {errors.username && errors.username.type==="required" &&
            (<p className="text-danger text-center">Required</p>)}
        </div>
        <div className="password mb-2">
            <div className="position-relative  d-flex mx-auto w-50 pass-wrapper">
            <input type={showPassword ? 'text' : 'password'} id="pass" className="form-control w-100" placeholder="Password" {...register("password",{required:true,minLength:8})}/>
            <i onClick={togglePasswordVisibility} className="flex justify-around items-center">
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
            </i>
            </div>
            {errors.password?.type==="required" &&
            (<p className="text-danger text-center">Required</p>)}
            {errors.password?.type==="minLength" &&
            (<p className="text-danger text-center">Minimum Length: 8</p>)}
        </div>
        <div className="email mb-2">
            
            <input type="email" id="email" className="form-control w-50 mx-auto m-3" placeholder="email" {...register("email",{required:true})}/>
            {errors.email?.type==="required" &&
            (<p className="text-danger text-center">Required</p>)}
        </div>
        <div className="Form-group mb-2">
<input type="number" className="form-control mx-auto w-50 m-3" id="phonenumber" placeholder="Phone number" {...register('phonenumber',{required:true,minLength:10,maxLength:10})} />
{errors.phonenumber?.type==='required' && <p className="text-danger text-center">phonenumber is required</p>}
        {errors.phonenumber?.type==='minLength' && <p className="text-danger text-center">Phone number contains only 10 digits</p>}
        {errors.phonenumber?.type==='maxLength' && <p className="text-danger text-center">Phone number contains only 10 digits</p>}
</div>
        <button className="btn button-reg  mx-auto d-block" >Register</button>
    </form>
    {err.length !== 0 && (<p className="lead text-center text-danger">{err}</p>)}
    <p className="lead text-center mt-2">Already Registered?
    <Link to="/login" className="fs-4 ps-3">Login</Link>
    </p>
</div>
    )
}

export default Register
