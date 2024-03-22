import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

export default function Signup() {
    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: '',
        location: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        const json = await response.json();
        console.log(json);
        if (!json.success) {
            alert(json.message);
            //save the auth toke to local storage and redirect
            //   localStorage.setItem('token', json.authToken)
            //   navigate("/login")
        } else {
            alert(json.message);
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className='container login'>
                <form className='w-50 border bg-dark login1' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>
                            Name
                        </label>
                        <input type='text' className='form-control' name='name' value={credentials.name} onChange={onChange} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='exampleInputEmail1' className='form-label'>
                            Webmail ID
                        </label>
                        <input type='email' className='form-control' name='email' value={credentials.email} onChange={onChange} id='exampleInputEmail1' aria-describedby='emailHelp' />
                        <div id='emailHelp' className='form-text'>
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='exampleInputPassword1' className='form-label'>
                            Password
                        </label>
                        <input type='password' className='form-control' name='password' value={credentials.password} onChange={onChange} id='exampleInputPassword1' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='exampleInputPassword1' className='form-label'>
                            Address
                        </label>
                        <input type='text' className='form-control' name='location' value={credentials.location} onChange={onChange} id='exampleInputPassword1' />
                    </div>
                    <button type='submit' className='m-3 btn btn-secondary'>
                        Submit
                    </button>
                    <Link to='/login' className='m-3 btn btn-secondary'>
                        Already a user?
                    </Link>
                </form>
            </div>
        </>
    );
}
