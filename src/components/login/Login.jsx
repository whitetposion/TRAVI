import React from 'react'
import "./login.css"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"

const Login = () => {
     const schema = yup.object().shape({
          fullname: yup.string().required("enter a valid name"),
          email:yup.string().email().required("Enter a valid email ID"),
          password:yup.string().min(4).max(10).required("enter a strong password"),
          confirmPassword: yup.string().oneOf([yup.ref("password"),null]).required("Your password is not correct")
     });
     const { register , handleSubmit , formState: {errors} } = useForm({
          resolver:yupResolver(schema),
     }) ;
     const onSubmit = (data) => { // define what will happen after the submit //
          console.log(data);
     };
  return (
    <>
      <div className="sign-in-form">
          <form onSubmit={handleSubmit(onSubmit)}>
               <input type='text' placeholder='fullname' {...register("fullname")}/> <p>{errors.fullname?.message}</p>
               <input type='text' placeholder='Email' {...register("email")}/> <p>{errors.email?.message}</p>
               <input type='password' placeholder='password' {...register("password")}/><p>{errors.password?.message}</p>
               <input type='password' placeholder='Confirm password' {...register("confirmPassword")}/> <p> {errors.confirmPassword?.message}</p>
               <input type="submit" />
          </form>
      </div>


    </>
  )
}

export default Login
