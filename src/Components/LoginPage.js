import React, { useState } from 'react'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from './Config/Firebase';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is mandatory").min(5, "Password must be at 5 char long"),
}).required();

const auth = getAuth(app);



function LoginPage(props) {


  // FIREBASE CODE

  const CreateUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in 
        // alert("you are logged in successfully");
        console.log(email, password)
        props.authentic(true);
      })
    console.log("not inside promise", email, password)
  }

  // FIREBASE CODE


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });


  return (
    <div>
      <main className="form-signin w-50 m-auto mt-4">

        <form onSubmit={handleSubmit((d) => {
          console.log(d.email, d.password)
          CreateUser(d.email, d.password)
        })}>

          <img className="mb-4" src="https://rcctechz22.netlify.app/static/media/RT%20Logo.4c2fa9b42757427f5f59.png" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Sign in to get the access of Dashboard</h1>

          <div className="form-floating mt-4">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"  {...register("email")} />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating mt-4">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" {...register("password")} />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3 mt-4">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type='submit'>Sign in</button>
          <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
        </form>

      </main>
    </div>
  )
}

export default LoginPage