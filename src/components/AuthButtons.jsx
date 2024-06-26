import React, { useState} from 'react'
import { auth } from "../firebase/config"
import { signOut} from  "firebase/auth"
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/loader/Loader'



function AuthButtons({authenticatedUser}) {

const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false)

    function logOut(){
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            setIsLoading(false)
            toast.success("Sign-out Successful.", {
              position: "bottom-right",
            })
            navigate("/")
          }).catch((error) => {
            setIsLoading(false)
            // An error happened.
            toast.error(error.message)
          });          
    }



  return (
    <>
      {isLoading && <Loader />}
      {authenticatedUser === null ? (
        <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
          <HashLink
            to="/Register"
            className="button hidden mr-8 text-n-8/80 transition-colors hover:text-pink-600/90 lg:block font-grotesk"
          >
            New Account
          </HashLink>
          <Button className="hidden lg:flex font-grotesk" href="/react-tensorflow-website/#/login">
            Sign in
          </Button>
        </div>
      ) : (
        <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row font-grotesk">
          <HashLink
            to="/Classifier"
            className="button hidden mr-8 text-n-8/80 transition-colors hover:text-violet-500/90 hover:bg-n-1 lg:block border-2 border-[#ffffcc] px-4 py-3 rounded-2xl"
          >
            ZooLens App
          </HashLink>
          <Button className="hidden lg:flex font-grotesk" onClick={logOut}>
            Log out
          </Button>
        </div>
      )}
    </>
  );
}

export default AuthButtons

   
