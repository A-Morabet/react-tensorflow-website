import React, { useState } from 'react'
import Section from '../components/Section'
import registerImg from '../assets/auth/register3.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../firebase/config"
import Loader from '../components/loader/Loader'
import Heading from '../components/Heading';

function Register() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword,setCPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  function registerUser(e){
    e.preventDefault()
    if (password !== cPassword) {
      toast.error("Passwords do not match.", {
        position: "bottom-right",
      })
    }

    setIsLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    setIsLoading(false)
    toast.success("Registration Successful. Redirecting...", {
      position: "bottom-right",
    })
    setTimeout(() => {navigate("/login")}, 2000);
    
    
  })
  .catch((error) => {
    toast.error(error.message, {
      position: "bottom-right",
    })
    setIsLoading(false)
  });
  }

  return (
    <>
    
    {isLoading && <Loader />}
    <Section>
        <div className="container flex">
        
       <div
    className='w-1/2 mx-auto lg:w-1/2 flex justify-center'>
        
          <div className='text-center' >
            
          <Heading title="Sign up" text="Your ZooLens experience begins here."/>
            <form onSubmit={registerUser}>
                <input className='border-2 border-n-2 rounded-lg p-1 mb-3 block w-full' type="text" placeholder="Email" name="" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className='border-2 border-n-2 rounded-lg p-1 mb-3 block w-full' type="password" placeholder="Password" name="" id="password" required value={password} onChange={(e) => setPassword(e.target.value)}  />
                <input className='border-2 border-n-2 rounded-lg p-1 mb-3 block w-full' type="password" placeholder="Confirm Password" name="" id="c-password" required value={cPassword} onChange={(e) => setCPassword(e.target.value)} />
                
                <button type="submit" className='button bg-blue-300 text-n-8/80 transition-colors hover:text-n-1 hover:bg-blue-400 rounded-xl p-2 w-full'>Create Account</button>
                <div className='p-3'>
                    <Link className="flex justify-end text-sm" to="/reset">Reset Password</Link>
                </div>
                
            </form>
            
            
            <span className='inline'>
                <p>Already have an account? <Link className='text-n-5/85 font-semibold' to="/Login">Login here</Link></p>
            </span>
            
          </div>
    
    
    </div>
    <div className='w-1/3 mr-auto hidden lg:flex'>
    <img className="object-cover rounded-2xl" src={registerImg} width={1080} height={1080}alt="" 
    />
    </div>
    
            {/* <div className="relative">
              <div className="relative z-1 flex items-center h-[35rem] mb-5 p-8 bg-gradient-to-b from-blue-400 to-n-8/0 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                  <img
                    className="w-full h-full object-cover md:object-right p-0.5"
                    width={800}
                    alt="Smartest AI"
                    height={730}
                    src={service1}
                  />
                </div>

                <div className="relative z-1">
                <h2 className="h1 flex justify-center mb-[4rem]">Did you know...?</h2>
                  <h2 className="h2 mb-4 text-center ">‘45% of animal species that you meet every day are considered exotic’</h2>
                  <p className="body-2 mb-[3rem] text-n-3 text-center">
                    Quoted from the Fauna and Fun registry of North Carolina, United States of America
                  </p>
                 
                </div>
    
                
              </div>
              </div> */}
              </div>
    </Section>
    </>
  )
}

export default Register

