//import {useState} from 'react';
import { useMutation } from '@tanstack/react-query';
import { useId } from 'react';
import { callApi } from '../helpers/fetcher';



export default function Login() {
  const idEmail = useId();
  const idPassword = useId();
  const mutation = useMutation({
    mutationFn: data => {
        return callApi("post", "rpc/login", {
            u_email: data.email,
            u_password: data.password
        })
    },
    onSuccess: data => {
        console.log(data);
    },
    onError: error => {
        console.log('There was an error:', error);
    }
  });

  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);
    const email = data.get("email");
    const password = data.get("password");
    mutation.mutate({
        email,
        password
    })
    console.log(`${email} ${password}`);
  }


    return (<div className="profile-wrapper">
        <h1>Login</h1>
        <p className="text-dimmed">Login to SuperM</p>
        
        <form onSubmit={handleSubmit}>
            <label htmlFor={idEmail} className="label">
                Email<span className="required">*</span>:
            </label>
            <input id={idEmail} type="email" name="email" className="input" placeholder="Email" autoComplete="email" />
            
            <label htmlFor={idPassword} className="label">
                Password<span className="required">*</span>:
            </label>
            <input id={idPassword} name="password" type="password" className="input" placeholder="Password" autoComplete="current-password" />

            <div className="form-buttons">
                <input type="submit" value="Login" className="btn" />
            </div>
        </form>
    </div>);
}