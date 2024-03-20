import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from 'react';
function App() {

  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e)=> {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setErrorMessage('Please provide a valid email address')
    } else if (!emailRegex.test(email)) {
      setErrorMessage('Please provide a valid email address')
    } else {
      setErrorMessage('')
    }
  }

  return (
    <>
      <div className='sm:mt-10 w-screen h-screen flex flex-col items-center'>
        <img src='/logo.svg' className="mt-20 mb-10"/>
        <p className="text-xl mb-5 md:text-4xl">We are launching <span className="font-bold">soon!</span></p>
        <p className="mb-10 text-sm">Subscribe and get notified</p>

        <div className="md:grid md:grid-cols-2 md:gap-4 md:items-center md:justify-center" style={{ gridTemplateColumns: '3fr 1fr' }} >
          <input id='emailInput' type="email" value={email} onChange={handleInputChange} placeholder='Your email address' className="w-72 h-12 border rounded-full px-3"/>
          <p className=" flex text-sm text-red-700 self-center md:order-3 md:col-span-2">{errorMessage}</p>
          <button className="w-full h-12 rounded-full bg-blue-600 text-white mt-3 mb-16 text-sm md:mb-0 md:order-2 md:mt-0"  onClick={handleSubmit}>Notify Me</button>
        </div>
        <div className='sm:w-full md:w-2/6 md:mt-10 flex flex-col'>
          <img src='/illustration-dashboard.png' className='sm:h-72'/>
        </div>
        
        <div className="w-28 mt-20 mb-10 flex flex-row justify-between">
         
          <FaFacebookF className="text-blue-600 rounded-full hover:bg-blue-600 hover:text-white  cursor-pointer"/>
          
        
        <FaTwitter className="text-blue-600 rounded-full hover:bg-blue-600 hover:text-white  cursor-pointer"/>
        <FaInstagram className="text-blue-600 rounded-full hover:bg-blue-600 hover:text-white  cursor-pointer"/>
        </div>

       <p className="text-xs"> &copy; Copyright Ping. All rights reserved.</p>

<footer className="mt-10 mb-10 text-xs">
  <p>
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://www.frontendmentor.io/profile/Takeda-harsh" className="font-bold">Kofi A. Akyea</a>.
  </p>
</footer>

      </div>
    </>
  )
}

export default App
