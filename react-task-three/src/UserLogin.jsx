import { useEffect, useState } from "react";
import './user-login.css';

function UserLogin(){
    let [passwordCheck,setPasswordCheck]=useState(false);
    let [emailCheck,setEmailCheck]=useState(false);
    let [cantSubmit,setCantSubmit]=useState(true);

    useEffect(()=>{
        (emailCheck && passwordCheck) ? setCantSubmit(false) : setCantSubmit(true);
    },[emailCheck,passwordCheck]);

    function submitHandle(e)
    {
        e.preventDefault();  
        alert('You succesfully logined!');
    }
    
    function onChangePassHandle(e)
    {
        e.target.value.length>=8 ? setPasswordCheck(true) : setPasswordCheck(false);
    }

    function onChangeEmailHandle(e)
    {
        e.target.value.endsWith('.ru') ? setEmailCheck(true) : setEmailCheck(false)
    } 

    return(
        <>
        <form className="form" onSubmit={submitHandle}>
            <label>Email:<br/>
                <input onChange={onChangeEmailHandle} type="email" name="email" placeholder="Please write your email" title="Your email should end with .ru" required/>
                {!emailCheck && <p className="email-error">Your email should end with .ru</p>}
            </label>
            <label>Password: <br/>     
                <input onChange={onChangePassHandle} type="password" name="password" placeholder="Please,write password (min 8 symbols)" required/>
                {!passwordCheck && <p className="password-error">Your password should consist at least 8 symbols</p>}
            </label> 
            <button className="btn" type='submit' disabled={cantSubmit}>Login</button>
        </form>
        </>
    )
}

export default UserLogin