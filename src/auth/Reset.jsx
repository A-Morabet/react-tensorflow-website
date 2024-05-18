import { useState }from 'react'
import Section from '../components/Section'
import Heading from '../components/Heading'
import resetImg from '../assets/auth/reset.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "../firebase/config"
import Loader from '../components/loader/Loader'
import { sendPasswordResetEmail } from 'firebase/auth';

function Reset() {

  // LUEGO MIRARLA MÁS A FONDO PORQUE MANDA EMAILS SI INCLUSO NO EXISTE EL EMAIL EN LA DATABASE, MIRAR VIDEO DE YOUTUBE DE ESTA FUNCTION

  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  
  const [isLoading, setIsLoading] = useState(false)

  function resetPassword(e){
    e.preventDefault()
    setIsLoading(true)

    sendPasswordResetEmail(auth, email)
  .then(() => {
    setIsLoading(false)
    toast.success("Email sent successfully.", {
      position: "bottom-right",
    })
  })
  .catch((error) => {
    setIsLoading(false)
    toast.error(error.message, {
      position: "bottom-right",
    })
    // ..
  });
  }

  return (
    <>
    <Section>
      {isLoading && <Loader />}
        <div className="container flex">
       <div
    className='w-1/2 mx-auto lg:w-1/2 flex justify-center'>
        
          <div className='text-center'> 
          <Heading title="Reset your Password" text="Forgot your password? This is the right place."/>
            <form onSubmit={resetPassword}>
                <input className='border-2 border-n-2 rounded-lg p-1 mb-3 block w-[19rem] mx-auto' type="text" placeholder="Email" name="" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                
                <button type="submit" className='button bg-blue-300 text-n-8/80 transition-colors hover:text-n-1 hover:bg-blue-400 rounded-xl p-2 w-[19rem] mb-3'>Reset Password</button>

                <div className='flex justify-evenly'>
                <Link className='text-n-5/85  font-semibold' to="/Login">Login</Link>
                <Link className='text-n-5/85  font-semibold' to="/Register">Sign up</Link>
                </div>
                
                
            </form>            
          </div>
          
    </div>
    <div className='w-1/3 mr-auto hidden lg:flex'>
    <img className="object-cover rounded-2xl" src={resetImg} width={1080} height={1080}alt="" 
    />
    </div>
          </div>
    </Section>
    </>
  )
}

export default Reset