import React from 'react'
import {supabase} from "./../supabaseClient"

const Login = ()=> {
     const login = async()=> {
      await supabase.auth.signIn({
          provider:"github"
     })
}
  return (
    <>
      <div className="login">
          <button onClick={login}>Login thru Git</button>
      </div>
    </>
  )
}

export default Login
