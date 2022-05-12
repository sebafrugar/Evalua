import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

const RegisterLogin = () => {


    const registerUser = () => {
        console.log("hola")
    }

    const loginUser = () => {
        console.log("hola")
    }


    return (
        <div>
            <div className="colorBanner">
                <h1>Bienvenido</h1>
            </div>
            <div className='d-flex flex-row border border-black justify-content-center'>
                <div className='d-flex flex-column border border-dark m-5 p-5 bg-white text-dark'>
                    <h3>Register</h3>
                    <Register onSubmitProp={registerUser} iFirstName='' iLastName='' iEmail='' iPassword='' iConfirm='' ></Register>

                </div>
                <div className='Login d-flex flex-column border border-dark m-5 p-5 bg-white text-dark'>
                    <h3>Login</h3>
                    <Login onSubmitProp={loginUser}></Login>
                </div>


            </div>
        </div>
    );
}

export default RegisterLogin;
