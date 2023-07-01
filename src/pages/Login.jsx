import React from 'react'
import {supabase} from "./../supabaseClient"
import { GoogleOAuthProvider , GoogleLogin } from '@react-oauth/google';


const Login = ()=> {
     const login = async()=> {
      await supabase.auth.signIn({
          provider:"github"
     })
}
  return (
    <>
      <div className="login">
      <GoogleOAuthProvider clientId="488430349910-k1mh3aafjs7kpt04vqo7i0pd9d20n8b4.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={credentialResponse => {
          console.log(credentialResponse);
          }}
          onError={() => {
          console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
      </div>
    </>
  )
}

export default Login

// 488430349910-k1mh3aafjs7kpt04vqo7i0pd9d20n8b4.apps.googleusercontent.com


//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
