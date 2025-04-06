import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import razorPayLogo from './assets/white.png'
import indiaFlag from './assets/india-flag-icon-29.jpg'
import razorpayImage from './assets/Razorpay-1024x498.png'
import citi from './assets/citi.png'
import github from './assets/github-sign.png'
import gmail from './assets/gmail.png'
import googleDrive from './assets/google-drive.png'
import instagram from './assets/instagram.png'
import linkedin from './assets/linkedin.png'
import netflix from './assets/netflix.png'
import paypal from './assets/paypal.png'
import premirePro from './assets/premiere-pro.png'
import python from './assets/python.png'
import backgroundImage from './assets/white-unsplash-9d0375d2.jpg'
import backgroundImageTwo from './assets/abstract-white-and-gray-color-background-texture-with-diagonal-lines-background-can-be-used-in-cover-design-book-design-poster-cd-cover-flyer-website-backgrounds-or-advert.jpg'
import {Check,ArrowDownRight, ArrowRight, DollarSign, Link, FileText, Home, Shield, Shuffle, RefreshCcw, ArrowLeft,ChevronLeft ,ChevronRight, Facebook} from 'react-feather'
import featureImg from './assets/razorpay.jpg'
import backgroundImageThree from './assets/abstract-shape-with-gradien-blue-vector.jpg'
import backgroundImageFour from './assets/isometric-illustration-technology-monitor-components_951562-33932.avif'
import icon2 from './assets/downloadIcon.jpeg'
import doubleBacgroundImage from './assets/doubleBackground.jpg'
import logos from './assets/logosMarquee.webp'
import testimonal from './assets/testimonial.webp'
import doubleInverted from './assets/doubleInverted.png'
import engineer from './assets/engineer.webp'
import computer from './assets/6-websites-05-01.svg'
import footerLogo from './assets/footerLogo.png'
import footerLogo2 from './assets/footerLogo2.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className='bg-deepBlue overflow-clip'>
        <div className='bg-deepBlue flex justify-between w-[95%] lg:w-[70%] h-16 mx-auto max-w-5xl'>
          <div className='flex relative h-16 items-center justify-start'>
            <a href="./" className='cursor-pointer py-7 pr-7'>
              <img src={razorPayLogo} alt="razorPayLogo" className='h-8 w-32'  />
            </a>
            <ul className='hidden lg:flex justify-between gap-6 h-full font-mullish text-white '>
              <li className='relative h-full flex flex-col justify-center items-center text-white hover:text-lightBlue transition-all duration-200 cursor-pointer group'>
                <a href="#">
                  Payments
                </a>
                <div className='absolute left-0 bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block'>
                </div>
              </li>
               <li className='relative h-full flex flex-col justify-center items-center text-white hover:text-lightBlue transition-all duration-200 cursor-pointer group'>
                <a href="#">
                  Banking
                </a>
                <div className='absolute left-0 bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block'>
                </div>
              </li>
               <li className='relative h-full flex flex-col justify-center items-center text-white hover:text-lightBlue transition-all duration-200 cursor-pointer group'>
                <a href="#">
                  Payroll
                </a>
                
              </li>
               <li className='relative h-full flex flex-col justify-center items-center text-white hover:text-lightBlue transition-all duration-200 cursor-pointer group'>
                <a href="#">
                  Engage
                </a>
                <div className='absolute left-0 bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block'>
                </div>
              </li>
               <li className='relative h-full flex flex-col justify-center items-center text-white hover:text-lightBlue transition-all duration-200 cursor-pointer group'>
                <a href="#">
                  Partners
                </a>
                <div className='absolute left-0 bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block'>
                </div>
              </li>
               <li className='relative h-full flex flex-col justify-center items-center text-white hover:text-lightBlue transition-all duration-200 cursor-pointer group'>
                <a href="#">
                  Resources
                </a>
                <div className='absolute left-0 bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block'>
                </div>
              </li>
               <li className='relative h-full flex flex-col justify-center items-center text-white hover:text-lightBlue transition-all duration-200 cursor-pointer group'>
                <a href="#">
                  Pricing
                </a>
                <div className='absolute left-0 bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block'>
                </div>
              </li>
            </ul>
          </div> 
          <div className='flex justify-between items-center gap-2'>
            <img src={indiaFlag } alt="india" className='h-8 w-8' />
            <div className='text-white text-xs flex justify-between items-center gap-1'>
              <button className='border border-lightBlue bg-deepBlue px-3 py-2 rounded-sm hover:text-lightBlue transition-all duration-200'>Login</button>
              <button className='border hidden lg:block border-deepBlue bg-white px-3 py-2 text-deepBlue rounded-sm hover:text-lightBlue transition-all duration-200'>Sign-up</button>
            </div>
            <div class="burger block  lg:hidden text-white">☰</div>

          </div>
        </div>
      </nav>
      <section className='overflow-clip'>
       <div className="flex  flex-col w-lvw bg-deepBlue justify-center items-center gap-20">
          <div className="flex justify-center items-center w-[95%] lg:w-[70%] max-w-5xl ">
            <div className="flex flex-col items-center lg:flex-row  justify-center gap-2 w-full">
              <div className="text-white flex flex-col w-full lg:w-[30%] justify-center items-start gap-8">
                <h1 className="text-3xl font-semibold font-mullish">
                  Power your Finance, grow your business
                </h1>
                <div className="w-6 h-1 bg-white"></div>
                  <p>
                  Accept Payments from Customers, Automate payouts to vendors & employees, never run out of working capital.
                  </p>
                <button className="border border-deepBlue bg-lightBlue px-1.5 py-2.5 rounded-md font-bold " onClick={() => window.location.reload()}>
                  Sign Up Now
                </button>
              </div>
              <div className='lg:w-[70%] '>
                <img src={razorpayImage} alt="razorpayImage" className='w-full'/>
              </div>
            </div>
          </div>
          <div className='overflow-clip w-[100%] hidden lg:block max-w-screen-2xl' >
            <div className='flex bg-deepBlue py-8 gap-28 pl-28 animate-marquee w-[200%] hover:transition-all group '>
            <div><a href=""><img src={citi} alt="cit"  className='w-12 h-10	grayscale group-hover:grayscale-0 duration-300'/></a></div>
            <div><a href=""><img src={github} alt="github"  className='w-12 h-10 grayscale group-hover:grayscale-0 duration-300'/></a></div>
            <div><a href=""><img src={gmail} alt="gmail"  className='w-12 h-10 grayscale group-hover:grayscale-0 duration-300'/></a></div>
            <div><a href=""><img src={googleDrive} alt="googleDrive"  className='w-12 h-10 grayscale group-hover:grayscale-0 duration-300'/></a></div>
            <div><a href=""><img src={instagram} alt="instagram"  className='w-12 h-10 grayscale group-hover:grayscale-0 duration-300'/></a></div>
            <div><a href=""><img src={linkedin} alt="linkedin"  className='w-12 h-10 grayscale group-hover:grayscale-0 duration-300'/></a></div>
            <div><a href=""><img src={netflix} alt="netflix"  className='w-12 h-10 grayscale group-hover:grayscale-0 duration-300'/></a></div>
            <div><a href=""><img src={paypal} alt="paypal"  className='w-12 h-10 grayscale group-hover:grayscale-0 duration-300'/></a></div>
            <div><a href=""><img src={premirePro} alt="premirePro"  className='w-12 h-10 grayscale group-hover:grayscale-0 duration-300' /></a></div>
            <div><a href=""><img src={python} alt="python" className='w-12 h-10 grayscale group-hover:grayscale-0 duration-300' /></a></div>
              
            <div><a href=""><img src={citi} alt="cit"  className='w-12 h-10 grayscale group-hover:grayscale-0 duration-300'/></a></div>
            <div><a href=""><img src={github} alt="github"  className='w-12 h-10 grayscale group-hover:grayscale-0 duration-300'/></a></div>
            <div><a href=""><img src={gmail} alt="gmail"  className='w-12 h-10 grayscale group-hover:grayscale-0 duration-300'/></a></div>
            <div><a href=""><img src={googleDrive} alt="googleDrive"  className='w-12 h-10 grayscale group-hover:grayscale-0 duration-300'/></a></div>
            <div><a href=""><img src={instagram} alt="instagram"  className='w-12 h-10 grayscale group-hover:grayscale-0 duration-300'/></a></div>
            <div><a href=""><img src={linkedin} alt="linkedin"  className='w-12 h-10 grayscale group-hover:grayscale-0 duration-300'/></a></div>
            <div><a href=""><img src={netflix} alt="netflix"  className='w-12 h-10 grayscale group-hover:grayscale-0 duration-300'/></a></div>
            <div><a href=""><img src={paypal} alt="paypal"  className='w-12 h-10 grayscale group-hover:grayscale-0 duration-300'/></a></div>
            <div><a href=""><img src={premirePro} alt="premirePro"  className='w-12 h-10 grayscale group-hover:grayscale-0 duration-300' /></a></div>
            <div><a href=""><img src={python} alt="python" className='w-12 h-10 grayscale group-hover:grayscale-0 duration-300' /></a></div>
          </div>
         </div>
        </div>
      </section>
      <section className='overflow-clip'>
        <div className='relative w-screen  flex justify-center items-center bg-zinc-50 '>
          <img src={backgroundImageTwo} alt="backgroundImageTwo" className='absolute top-0 right-0 w-96 h-auto -z-0 ' />
          <div className='font-mullish w-[95%] lg:w-[70%] max-w-5xl z-50 lg:z-10 gap-[6.5rem] flex flex-col '>
            <div className='flex justify-center items-center flex-col mt-10 w-full '>
               <h1 className='font-bold text-black font-mullish text-xl text-center lg:text-start' >
              Accept Payment with Razorpay Payment Suite
            </h1>
            <div className='w-7 bg-lightBlue500 h-2 border-none '></div>
            </div>
              <div className='flex flex-col lg:flex-row w-full  border border-gray-200 z-50 '>
                <div className='flex w-full flex-col gap-10 z-10 p-4'> 
                  <div>
                    <h1 className='font-bold text-black font-mullish text-[2rem] text-center lg:text-start '>
                              Supercharge your business with all powerfull Ai <span className='font-mullish text-blue-400'> Payment Gateway</span>
                    </h1>
                  </div>
                  <div className='flex self-center lg:self-start'>
                  <ul className="space-y-2 ">
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>100+ Payment Methods</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>Industry Leading Success Rate</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>Superior Checkout Experience</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>Easy to Integrate</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>Instant Settlements from Day 1</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>In-depth Reporting and Insights</span>
                      </li>
                    </ul>                 

                  </div >
                
                  <div className='flex justify-start items-center gap-2 lg:gap4 self-center lg:self-start'>
                    <button className="border-none text-white text-sm w-40 bg-lightBlue px-1.5 py-2.5 rounded-md font-bold flex justify-center items-center gap-3" onClick={() => window.location.reload()} >
                    Sign Up Now <ArrowRight/>
                  </button>
                  <a href="#" className='font-mullish text-blue-600'><p className='flex'>Know More →</p></a>
                  </div>
                </div>
                <div className='w-full'>
                  <img src={featureImg} alt="featureImg" className='w-full h-full'  loading='lazy' />
                </div>
            </div>
          </div>  
      </div>
      </section>
     <section className='overflow-clip my-5 p-0'> 
        <div className='h-fit w-screen  flex flex-col justify-evenly items-center mt-10 gap-5'>
          
          <div className='w-[90%] lg:w-[70%] max-w-5xl h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className="w-full h-[10rem] flex relative hover:cursor-pointer hover:shadow-2xl shadow-black transition-all duration-200 group">
              <Link className='absolute w-[3rem] h-[3rem] rounded-full text-white bg-blue-500 z-10 top-0 right-0 group-hover:bg-blue-700' />
              <svg className="absolute w-full h-full z-20 top-0 left-0" viewBox="0 0 200 100" preserveAspectRatio="none">
                <polygon points="0,0 150,0 200,40 200,100 0,100" fill="white" stroke="grey" strokeWidth="0.5" />
              </svg>
              <div className='absolute top-0 z-30 p-4'>
                <h2 className="text-xl font-bold font-mullish">Payment Links</h2>
                <p className="text-gray-600 font-mullish">
                  Take your store online instantly with zero coding. Accept international & domestic payments.
                </p>
                <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Know More →</a>
              </div>
            </div>

            <div className="w-full h-[10rem] flex relative hover:cursor-pointer hover:shadow-2xl shadow-black transition-all duration-200 group">
              <FileText className='absolute w-[3rem] h-[3rem] rounded-full text-white bg-blue-500 z-10 top-0 right-0 group-hover:bg-blue-700' />
              <svg className="absolute w-full h-full z-20 top-0 left-0" viewBox="0 0 200 100" preserveAspectRatio="none">
                <polygon points="0,0 150,0 200,40 200,100 0,100" fill="white" stroke="grey" strokeWidth="0.5" />
              </svg>
              <div className='absolute top-0 z-30 p-4'>
                <h2 className="text-xl font-bold font-mullish">Payment Pages</h2>
                <p className="text-gray-600 font-mullish">
                  Share Payment link via an email, SMS, messenger, chatbot etc., and get paid immediately.
                </p>
                <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Know More →</a>
              </div>
            </div>

            <div className="w-full h-[10rem] flex relative hover:cursor-pointer hover:shadow-2xl shadow-black transition-all duration-200 group">
              <Home className='absolute w-[3rem] h-[3rem] rounded-full text-white bg-blue-500 z-10 top-0 right-0 group-hover:bg-blue-700' />
              <svg className="absolute w-full h-full z-20 top-0 left-0" viewBox="0 0 200 100" preserveAspectRatio="none">
                <polygon points="0,0 150,0 200,40 200,100 0,100" fill="white" stroke="grey" strokeWidth="0.5" />
              </svg>
              <div className='absolute top-0 z-30 p-4'>
                <h2 className="text-xl font-bold font-mullish">Payment Buttons</h2>
                <p className="text-gray-600 font-mullish">
                  Create, Copy & Collect with Payment Button. Collect one-time or subscription payment & more.
                </p>
                <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Know More →</a>
              </div>
            </div>

            <div className="w-full h-[10rem] flex relative hover:cursor-pointer hover:shadow-2xl shadow-black transition-all duration-200 group">
              <RefreshCcw className='absolute w-[3rem] h-[3rem] rounded-full text-white bg-blue-500 z-10 top-0 right-0 group-hover:bg-blue-700' />
              <svg className="absolute w-full h-full z-20 top-0 left-0" viewBox="0 0 200 100" preserveAspectRatio="none">
                <polygon points="0,0 150,0 200,40 200,100 0,100" fill="white" stroke="grey" strokeWidth="0.5" />
              </svg>
              <div className='absolute top-0 z-30 p-4'>
                <h2 className="text-xl font-bold font-mullish">Subscriptions</h2>
                <p className="text-gray-600 font-mullish">
                  Subscription plans with automated recurring transactions on various payment modes.
                </p>
                <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Know More →</a>
              </div>
            </div>

            <div className="w-full h-[10rem] flex relative hover:cursor-pointer hover:shadow-2xl shadow-black transition-all duration-200 group">
              <Shuffle className='absolute w-[3rem] h-[3rem] rounded-full text-white bg-blue-500 z-10 top-0 right-0 group-hover:bg-blue-700' />
              <svg className="absolute w-full h-full z-20 top-0 left-0" viewBox="0 0 200 100" preserveAspectRatio="none">
                <polygon points="0,0 150,0 200,40 200,100 0,100" fill="white" stroke="grey" strokeWidth="0.5" />
              </svg>
              <div className='absolute top-0 z-30 p-4'>
                <h2 className="text-xl font-bold font-mullish">Route</h2>
                <p className="text-gray-600 font-mullish">
                  Split incoming payments automatically to vendor's accounts, manage marketplace money flow...
                </p>
                <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Know More →</a>
              </div>
            </div>

            <div className="w-full h-[10rem] flex relative hover:cursor-pointer hover:shadow-2xl shadow-black transition-all duration-200 group">
              <Shield className='absolute w-[3rem] h-[3rem] rounded-full text-white bg-blue-500 z-10 top-0 right-0 group-hover:bg-blue-700' />
              <svg className="absolute w-full h-full z-20 top-0 left-0" viewBox="0 0 200 100" preserveAspectRatio="none">
                <polygon points="0,0 150,0 200,40 200,100 0,100" fill="white" stroke="grey" strokeWidth="0.5" />
              </svg>
              <div className='absolute top-0 z-30 p-4'>
                <h2 className="text-xl font-bold font-mullish">Smart Collect</h2>
                <p className="text-gray-600 font-mullish">
                  Automatically reconcile incoming NEFT, RTGS, IMPS, UPI payments using Virtual Accounts & UPI-IDs.
                </p>
                <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Know More →</a>
              </div>
            </div>
            
          </div>
          
        </div>
      </section>
     <section className='overflow-clip flex justify-center  bg-blue-900  '>
      <div className='max-w-5xl w-[95%] lg:w-[70%] h-full  bg-blue-900 '>

        <div className='relative w-full flex flex-col justify-between items-center gap-5 py-4'>

          {/* Heading Section */}
          <div className='w-full flex flex-col justify-center items-center  lg:p-10'>
            <h1 className='w-full font-bold text-white font-mullish text-xl text-center'>
              Accept Payments with Razorpay Payment Suite
            </h1>
            <div className='w-7 bg-lightBlue500 h-2 border-none'></div>
          </div>
          
          {/* Main Container */}
          <div className='flex flex-col lg:flex-row w-full justify-center items-center border border-gray-500  flex-1'>
            
            {/* Left Section */}
            <div className='w-full lg:w-[50%] p-5 gap-[2rem] flex flex-col '>
              <h1 className='font-mullish text-2xl text-white font-bold'>
                Manage your company’s finances with #RazorpayX Business Banking
              </h1>
              <ul className='space-y-2 text-white text-sm'>
                <li className='flex items-center space-x-2'>
                  <Check className='w-4 h-4 text-green-500' />
                  <span>Open a fully digital current account</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <Check className='w-4 h-4 text-green-500' />
                  <span>Automate payables & compliment payments</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <Check className='w-4 h-4 text-green-500' />
                  <span>Simplify and tract spends with Corporate cards</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <Check className='w-4 h-4 text-green-500' />
                  <span>View financial insights at glance</span>
                </li>
              </ul>
              <div className='flex justify-start items-center gap-4'>
                <button className='border-none text-white text-sm w-40 bg-lightBlue px-1.5 py-2.5 rounded-md font-bold flex justify-center items-center gap-3' onClick={() => window.location.reload()}>
                  Sign Up Now <ArrowRight />
                </button>
                <a href='#' className='font-mullish text-blue-600'><p>Know More {'>'}</p></a>
              </div>
            </div>
            
            {/* Right Section */}
            <div className='w-full lg:w-[50%]'>
              <img src={backgroundImageFour} alt='' className='w-full h-full' />
            </div>
          </div>
          
          {/* Cards Section */}
          <div className='w-full h-full flex-1 flex justify-center items-center overflow-clip'>
            <div className='w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='w-full h-[10rem] flex relative hover:cursor-pointer hover:shadow-2xl shadow-black transition-all duration-200 group'>
                <Link className='absolute w-[3rem] h-[3rem] rounded-full text-white bg-blue-500 z-10 top-0 right-0 group-hover:bg-blue-700' />
                <svg className='absolute w-full h-full z-20 top-0 left-0' viewBox='0 0 200 100' preserveAspectRatio='none'>
                  <polygon points='0,0 150,0 200,40 200,100 0,100' fill='white' stroke='grey' strokeWidth='0.5' />
                </svg>
                <div className='absolute top-0 z-30 p-4'>
                  <h2 className='text-xl font-bold font-mullish'>Current Account</h2>
                  <p className='text-gray-600 font-mullish'>
                    Current accounts for fast-growing businesses, support by the best-in-class technology
                  </p>
                  <a href='#' className='text-blue-600 font-semibold mt-2 inline-block'>Know More →</a>
                </div>
              </div>
              <div className='w-full h-[10rem] flex relative hover:cursor-pointer hover:shadow-2xl shadow-black transition-all duration-200 group'>
                <FileText className='absolute w-[3rem] h-[3rem] rounded-full text-white bg-blue-500 z-10 top-0 right-0 group-hover:bg-blue-700' />
                <svg className='absolute w-full h-full z-20 top-0 left-0' viewBox='0 0 200 100' preserveAspectRatio='none'>
                  <polygon points='0,0 150,0 200,40 200,100 0,100' fill='white' stroke='grey' strokeWidth='0.5' />
                </svg>
                <div className='absolute top-0 z-30 p-4'>
                  <h2 className='text-xl font-bold font-mullish'>Capital Credit</h2>
                  <p className='text-gray-600 font-mullish'>
                    Instant addditional cash and corporate cards designed for growing businesses
                  </p>
                  <a href='#' className='text-blue-600 font-semibold mt-2 inline-block'>Know More →</a>
                </div>
              </div>
                <div className='w-full h-[10rem] flex relative hover:cursor-pointer hover:shadow-2xl shadow-black transition-all duration-200 group'>
                  <FileText className='absolute w-[3rem] h-[3rem] rounded-full text-white bg-blue-500 z-10 top-0 right-0 group-hover:bg-blue-700' />
                  <svg className='absolute w-full h-full z-20 top-0 left-0' viewBox='0 0 200 100' preserveAspectRatio='none'>
                    <polygon points='0,0 150,0 200,40 200,100 0,100' fill='white' stroke='grey' strokeWidth='0.5' />
                  </svg>
                  <div className='absolute top-0 z-30 p-4'>
                    <h2 className='text-xl font-bold font-mullish'>Payouts</h2>
                    <p className='text-gray-600 font-mullish'>
                      Make simple, reliable & secure payouts to bank accounts, UPI IDs, or wallets
                    </p>
                    <a href='#' className='text-blue-600 font-semibold mt-2 inline-block'>Know More →</a>
                  </div>
                </div>    
            </div>
          </div>

          {/* Footer Container     */}
          <div className='flex flex-col lg:flex-row w-full py-10 justify-center items-center border border-gray-500 gap-5  flex-1 text-white '>
            <p className='text-center'>
              Check Out the live demo to learn how RazorPayX works. No sign-up required!      
            </p>
              <div className='relative overflow-clip '>
                <button className=' border-none text-white text-sm w-40 bg-lightBlue px-1.5 py-2.5 rounded-md font-bold flex justify-center items-center gap-3 relative'>
                <span className='z-20'> Check out the demo </span>     
                </button>
                <div className=" absolute right-2 top-0 w-[17.5rem]  h-[12.5rem] bg-green-400 text-white flex items-center justify-center clip-path-slant z-10 ">
                </div>    
              </div>
              
            </div>
        </div>

      </div>
      </section>
      <section className='overflow-clip flex flex-col justify-center items-center relative  '>
         <img src={doubleBacgroundImage} className='absolute top-0 w-full h-full -z-10' alt=""  />
        <div className='top 0 w-[70%] max-w-5xl z-30 my-4'>
           <div className='w-full h-full'>
                {/* Main Div Grid */}
            <div className='flex justify-center items-center my-3'>
              <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-full gap-5'>
            
              {/*Col 1  */}
              <div className='flex flex-col font-bold justify-center   '>
                <p className='text-4xl font-mullish text-center lg:text-start'>
                    New is the
                  </p>
                  <span className='text-4xl font-mullish text-blue-600 text-center lg:text-start'>Razorpay</span>
                  <p className='text-4xl font-mullish text-center lg:text-start'>
                    Product Suit
                  </p>
              </div>
              {/*Col 2  */}
              <div>
                <div className="w-full h-full flex flex-col hover:cursor-pointer hover:shadow-2xl shadow-black transition-all duration-200 group gap-2 p-2">
                  <img src={icon2} alt="" className='w-10 h-10 rounded-full' />
                  <div className='  flex flex-col gap-3 '>
                    <h2 className="text-xl font-bold font-mullish">Corporate Cards</h2>
                    <p className="text-gray-600 font-mullish">
                      Simplify your business transactions with seamless expense tracking and better financial control.
                    </p>
                    <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Know More →</a>
                  </div>
                </div>
              </div>
              {/*Col 3  */}
                <div>
                <div className="w-full h-full flex flex-col hover:cursor-pointer hover:shadow-2xl shadow-black transition-all duration-200 group gap-2 p-2">
                  <img src={icon2} alt="" className='w-10 h-10 rounded-full' />
                  <div className='  flex flex-col gap-3 '>
                    <h2 className="text-xl font-bold font-mullish">Corporate Cards</h2>
                    <p className="text-gray-600 font-mullish">
                      Simplify your business transactions with seamless expense tracking and better financial control.
                    </p>
                    <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Know More →</a>
                  </div>
                </div>
              </div>
              {/*Col 4  */}
                <div>
                <div className="w-full h-full flex flex-col hover:cursor-pointer hover:shadow-2xl shadow-black transition-all duration-200 group gap-2 p-2">
                  <img src={icon2} alt="" className='w-10 h-10 rounded-full' />
                  <div className='  flex flex-col gap-3 '>
                    <h2 className="text-xl font-bold font-mullish">Corporate Cards</h2>
                    <p className="text-gray-600 font-mullish">
                      Simplify your business transactions with seamless expense tracking and better financial control.
                    </p>
                    <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Know More →</a>
                  </div>
                </div>
              </div>
              {/*Col 5  */}
              <div>
                <div className="w-full h-full flex flex-col hover:cursor-pointer hover:shadow-2xl shadow-black transition-all duration-200 group gap-2 p-2">
                  <img src={icon2} alt="" className='w-10 h-10 rounded-full' />
                  <div className='  flex flex-col gap-3 '>
                    <h2 className="text-xl font-bold font-mullish">Corporate Cards</h2>
                    <p className="text-gray-600 font-mullish">
                      Simplify your business transactions with seamless expense tracking and better financial control.
                    </p>
                    <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Know More →</a>
                  </div>
                </div>
              </div>
              {/*Col 6  */}
                <div>
                <div className="w-full h-full flex flex-col hover:cursor-pointer hover:shadow-2xl shadow-black transition-all duration-200 group gap-2 p-2">
                  <img src={icon2} alt="" className='w-10 h-10 rounded-full' />
                  <div className='  flex flex-col gap-3 '>
                    <h2 className="text-xl font-bold font-mullish">Corporate Cards</h2>
                    <p className="text-gray-600 font-mullish">
                      Simplify your business transactions with seamless expense tracking and better financial control.
                    </p>
                    <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Know More →</a>
                  </div>
                </div>
              </div>
          </div>
            </div>
          </div>     
          <div className='w-full h-full '>
            <div className='w-full h-full flex items-center flex-col gap-5 '>
            {/* header Section */}
              <div className='flex justify-center items-center flex-col mt-10 w-full lg:w-[50%] '>
                <h1 className='font-bold text-black font-mullish text-xl' >
                  Features
                </h1>
                <div className='w-7 bg-lightBlue500 h-2 border-none '></div>
                <div className='text-center font-mullish '>
                  <p>Empower your business with all the right tools to accept the online payments and provide the best customer experience</p>
                </div>
              </div>
              
              {/* Grid */}
              <div className='flex justify-center items-center my-3'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-full gap-5'>
          
            {/*Col 1  */}
              <div>
                <div className="w-full h-full flex flex-col hover:cursor-pointer hover:shadow-2xl shadow-black transition-all duration-200 group gap-2 p-2">
                  <img src={icon2} alt="" className='w-10 h-10 rounded-full' />
                  <div className='flex flex-col gap-3'>
                    <h2 className="text-xl font-bold font-mullish">Secure Transactions</h2>
                    <p className="text-gray-600 font-mullish">
                      Protect your business with industry-leading security and fraud prevention tools.
                    </p>
                    <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Know More →</a>
                  </div>
                </div>
            </div>
            {/*Col 2  */}
              <div>
              <div className="w-full h-full flex flex-col hover:cursor-pointer hover:shadow-2xl shadow-black transition-all duration-200 group gap-2 p-2">
                <img src={icon2} alt="" className='w-10 h-10 rounded-full' />
                <div className='flex flex-col gap-3'>
                  <h2 className="text-xl font-bold font-mullish">Instant Activation</h2>
                  <p className="text-gray-600 font-mullish">
                    Get activated and start transacting within minutes with a completely online process.
                  </p>
                  <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Know More →</a>
                </div>
              </div>
            </div>
            {/*Col 3  */}
              <div>
              <div className="w-full h-full flex flex-col hover:cursor-pointer hover:shadow-2xl shadow-black transition-all duration-200 group gap-2 p-2">
                <img src={icon2} alt="" className='w-10 h-10 rounded-full' />
                <div className='  flex flex-col gap-3 '>
                  <h2 className="text-xl font-bold font-mullish">Support</h2>
                  <p className="text-gray-600 font-mullish">
                    Get assistance anytime with our dedicated support team availabe 24/7.
                  </p>
                  <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Know More →</a>
                </div>
              </div>
            </div>
            {/*Col 4  */}
              <div>
              <div className="w-full h-full flex flex-col hover:cursor-pointer hover:shadow-2xl shadow-black transition-all duration-200 group gap-2 p-2">
                <img src={icon2} alt="" className='w-10 h-10 rounded-full' />
                <div className='  flex flex-col gap-3 '>
                  <h2 className="text-xl font-bold font-mullish">Easy Integration</h2>
                  <p className="text-gray-600 font-mullish">
                    Connect with your website or app effortlessly using our developers-friendly APIs.
                  </p>
                  <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Know More →</a>
                </div>
              </div>
            </div>
            {/*Col 5  */}
            <div>
              <div className="w-full h-full flex flex-col hover:cursor-pointer hover:shadow-2xl shadow-black transition-all duration-200 group gap-2 p-2">
                <img src={icon2} alt="" className='w-10 h-10 rounded-full' />
                <div className='  flex flex-col gap-3 '>
                  <h2 className="text-xl font-bold font-mullish">Smart Analytics</h2>
                  <p className="text-gray-600 font-mullish">
                    Get detailed insights into your transactions with advanced reporting and analytics.
                  </p>
                  <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Know More →</a>
                </div>
              </div>
            </div>
            {/*Col 6  */}
              <div>
              <div className="w-full h-full flex flex-col hover:cursor-pointer hover:shadow-2xl shadow-black transition-all duration-200 group gap-2 p-2">
                <img src={icon2} alt="" className='w-10 h-10 rounded-full' />
                <div className='  flex flex-col gap-3 '>
                  <h2 className="text-xl font-bold font-mullish">Multiple Payment Options</h2>
                  <p className="text-gray-600 font-mullish">
                    Accept payments via credit cards, UPI, wallets, and more with ease.
                  </p>
                  <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Know More →</a>
                </div>
              </div>
            </div>
              
              <div>
              <div className="w-full h-full flex flex-col hover:cursor-pointer hover:shadow-2xl shadow-black transition-all duration-200 group gap-2 p-2">
                <img src={icon2} alt="" className='w-10 h-10 rounded-full' />
                <div className='  flex flex-col gap-3 '>
                  <h2 className="text-xl font-bold font-mullish">Automated Payouts</h2>
                  <p className="text-gray-600 font-mullish">
                    Automate vendor and employee payments with our hassle-free payout system.
                  </p>
                  <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Know More →</a>
                </div>
              </div>
            </div>    

              <div>
              <div className="w-full h-full flex flex-col hover:cursor-pointer hover:shadow-2xl shadow-black transition-all duration-200 group gap-2 p-2">
                <img src={icon2} alt="" className='w-10 h-10 rounded-full' />
                <div className='  flex flex-col gap-3 '>
                  <h2 className="text-xl font-bold font-mullish">Realtime Settlements</h2>
                  <p className="text-gray-600 font-mullish">
                    Get your payments settled instantly, improving cashflow of your business.
                  </p>
                  <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Know More →</a>
                </div>
              </div>
            </div>
                  

              </div>
            </div>
            </div>
          </div>
         </div>
        </section>
      <section className='overflow-clip'>
       
        <div className=' h-fit w-screen flex justify-center items-center mt-5 '>
          <div className='w-[70%] max-w-5xl h-full flex flex-col justify-center lg:flex-row gap-5  '>
            < div className='w-full  lg:w-[60%] h-fit font-mullish flex flex-col justify-center gap-4 '>
              <h1 className='font-bold text-lightBlue text-xl text-center lg:text-start'>
               Join the 50,00,000+ businesses using Razorpay
              </h1>
              <div className='w-7 bg-lightBlue500 h-2 border-none self-center lg:self-start '>

              </div>
              <p className='text-center lg:text-start '>
              We make it easier for you to focus on building great products while we work on simplifying your payments. Become one of us by joining thousands of our happy users and simplify the online payment experience for your customers.
              </p>
              <p className='text-center lg:text-start '>
                Focus on your business while we handle the complexities of payments for you.
              </p>
            </div>
            
            <div className='w-[40%] h-[5rem] lg:h-[20rem] overflow-clip pt-5 gap-5 relative self-center'>
              <div class="w-full h-6 bg-custom-gradient absolute top-0 z-10">
                </div> 
              <div className='h-[200%] px-1 '>
                <img src={logos} alt="" className=' animate-moveUp w-full  ' />
                <img src={logos} alt="" className=' animate-moveUp w-full ' />
              </div>
              <div class="w-full h-6 bg-custom-gradient absolute bottom-0 z-10 rotate-180">
              </div> 
            </div>
          </div>
        </div>
      </section>
      <section className='overflow-clip'> 
        <div className='mx-auto w-[95%] lg:w-[80%]  max-w-7xl mt-20'>
          <div className='w-full h-full gap-8 flex-col flex '>
             <div className='text-center font-mullish font-bold text-deepBlue text-2xl '>
              <p>
                An Experience People
              </p>
              <p>
                Love To Talk About
              </p>
            </div>

            <div className='h-full w-full flex justify-between items-center  lg:gap-3'>
              <button className='w-12 h-12 lg:w-16 lg:h-16 bg-slate-300 rounded-full flex justify-center items-center'type='submit'>
                <div className='w-[50%] h-[50%] bg-slate-400 rounded-full flex justify-center items-center'>
                  <ChevronLeft className="w-5 h-5 text-gray-600 z-50 text-2xl"></ChevronLeft>
               </div>
              </button>
              <div className='flex justify-between items-center gap-10 flex-col w-[70%] lg:w-auto lg:flex-row'>
                <div className='w-[60%] flex justify-center '>
                    <img src={testimonal } alt="testimonal" className='rounded-2xl w-[210px] h-full '/>

                </div>
                <div className='flex flex-col justify-center '>
                  <img src={doubleInverted} alt="doubleInverted" className='w-6 opacity-25' />
                  <h1 className='text-3xl font-thin text-center lg:text-start'>Readymade Closed Wallet Solution For Quick Refunds </h1>
                  <p className='italic underline text-green-400  text-center lg:text-start'>LearnMore</p>
                  <p className='font-bold  text-center lg:text-start'>Lorem Ipsum</p>
                  <p className='text-center lg:text-start'>CEO, XYZ Engineering Company</p>
                  <img src={engineer} alt="engineer" className='w-20 self-center lg:self-start' />
                </div>
              </div>
              <button className='w-12 h-12 lg:w-16 lg:h-16  bg-slate-300 rounded-full flex justify-center items-center'onClick={() => window.location.reload()} type='submit' >
                <div className='w-[50%] h-[50%] bg-slate-400 rounded-full flex justify-center items-center'>
                  <ChevronRight className="w-5 h-5 text-gray-600 z-50 text-2xl"></ChevronRight>
               </div>
              </button>
            </div>
            
            <div className='flex gap-3 justify-center items-center '>
              <div className='w-2  bg-lightBlue500 h-2 border-none '>

              </div>
              <div className='w-2  bg-green-500 h-2 border-none '>

              </div>
              <div className='w-2  bg-lightBlue500 h-2 border-none '>

              </div>
              <div className='w-2  bg-lightBlue500 h-2 border-none '>

              </div>
              <div className='w-2  bg-lightBlue500 h-2 border-none '>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='overflow-clip'>
        <div className='w-screen h-full flex justify-center items-center'>
          <div className='w-[70%] max-w-5xl flex flex-col lg:flex-row justify-between gap-3 '>
          
            <div className='w-full lg:w-[60%] flex flex-col justify-center gap-3 font-mullish mt-20  '>
              <h1 className='text-2xl font-bold text-center lg:text-start'>Supercharge your Business with RazorPay</h1>
              <div className='w-7 bg-green-500 h-2 border-none self-center lg:self-start '></div>
              <div className='self-center lg:self-start' >
                <p className='self-center  lg:self-start '>
                Sign up now to experience the future of payments and offer
              </p>
              <p className='text-center lg:text-start'> your customer the best checkout experiences.</p>
              </div>
              <ul className='flex gap-3 text-sm self-center lg:self-start'>
                <li className='flex gap-2 justify-center items-center'>
                  <Check className='w-4 h-4 text-green-500' />
                  <p>Quick Onboarding </p>
                  </li>
                <li className='flex gap-2 justify-center items-center'>
                  <Check className='w-4 h-4 text-green-500' />
                  <p>Access to entire product suite </p>
                  </li>
                <li className='flex gap-2 justify-center items-center'>
                  <Check className='w-4 h-4 text-green-500' />
                  <p>API access</p>
                  </li>
                <li className='flex gap-2 justify-center items-center'>
                  <Check className='w-4 h-4 text-green-500' />
                  <p>24x7 support </p>
                  </li>
              </ul>
              <button className='border-none text-white text-sm w-40 bg-lightBlue px-1.5 py-2.5 rounded-md font-bold flex justify-center items-center gap-3 self-center lg:self-start mb-2'onClick={() => window.location.reload()} >
                  Sign Up Now <ArrowRight />
              </button>
            </div>


            <div className='w-[40%] h-fit hidden lg:flex justify-end items-center '>
                <img src={computer} alt="computer" className='w-[320px] h-[320px]' />
            </div>
          </div>
        </div>
      </section>
      <section className='overflow-clip bg-deepBlue'>
        <div className='w-screen flex justify-center items-center'>
          <div className='w-[70%]flex flex-col lg:flex-row lg:flex justify-between max-w-5xl gap-4 p-2'>
            <div className='w-full lg:w-[30%] text-gray-500 flex flex-col gap-4'>
              <a href="./" className='cursor-pointer w-[60%] h-fit flex justify-center items-center mt-3'>
                <img src={razorPayLogo} alt="razorPayLogo" className='w-full h-fit'/>
              </a>
              <p>
                Razorpay is the only payments solution in India that allows businesses to accept, process, and disburse payments with its product suite. It gives you access to all payment modes, including credit card, debit card, net banking, UPI, and popular wallets, including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money, and PayZapp.
              </p>
              <p>
                RazorpayX supercharges your business banking experience, bringing effectiveness, efficiency, and excellence to all financial processes. With RazorpayX, businesses can get access to fully functional current accounts, supercharge their payouts, and automate payroll compliance.
              </p>
              <p>
                Manage your marketplace, automate bank transfers, collect recurring payments, share invoices with customers, and avail working capital loans – all from a single platform. Fast forward your business with Razorpay.
              </p>
              <p className='text-xs'>
                Disclaimer: The RazorpayX powered Current Account and VISA corporate credit card are provided by RBI-licensed banks. Your RazorpayX powered account is provided by our partner bank, in accordance with RBI regulations. RazorpayX itself is not a bank and doesn’t hold or claim to hold a banking license.
              </p>
              <p className='font-mullish text-xl text-gray-100'>
                SUBSCRIBE TO OUR NEWSLETTER
              </p>
              <div className='bg-white relative'>
                <input type='text' className='w-[55%] overflow-auto' placeholder='Your email address'></input> <button className='absolute top-0 right-4 ' onClick={() => window.location.reload()} type='Submit'>Subscribe Now</button>
              </div>
              <div className='flex gap-2 justify-start lg:justify-between'>
                <img src={footerLogo} alt="" className='w-28 h-15 rounded-md' />
                <img src={footerLogo2} alt="" className='rounded-3xl h-20' />
              </div>
            </div>
            <div className='w-[90%] gap-4 lg:w-[70%] flex flex-row'>
              <div className='w-[35%] lg:w-[30%] text-gray-500 justify-between flex flex-col gap-4 flex-wrap text-xs lg:text-base'>
              <div>
                <h1 className='font-bold'>BANKING PLUS</h1>
                <ul className='text-lightBlue text-sm flex flex-col gap-1'>
                  <li>RAzorapyX</li>
                  <li>Current Accounts</li>
                  <li>Payouts</li>
                  <li>Payout Links</li>
                  <li>Corporate Credit Card</li>
                  <div className='flex flex-wrap gap-1'>
                      <li>View Live Demo</li><button className='bg-green-500 px-1 py-0 rounded-sm text-white'>New</button>
                  </div>
                </ul>
              </div>
              <div>
                <h1 className='font-bold'>LENDING</h1>
                <ul className='text-lightBlue text-sm flex flex-col gap-1'>
                  <li>RazorPay Capital</li>
                  <li>Instant Settlements</li>
                  <li>Working Capital Loans</li>
                  <li>Marketplace Instant Settlements</li>
                </ul>
              </div>
              <div>
                <h1 className='font-bold'>Risk & Fraud</h1>
                <ul className='text-lightBlue text-sm flex flex-col gap-1'>                  
                  <li>Thirdwatch</li>
                  <div className='flex gap-1 flex-wrap'>
                    <li>PrePay CoD</li><button className='bg-green-500 px-1 rounded-sm text-white'>New</button>
                  </div>
                </ul>
              </div>
              <div>
                <h1 className='font-bold'>BECOME A PARTNER</h1>
                <ul className='text-lightBlue text-sm flex flex-col gap-1'>
                  <li>Refer and Earn</li>
                  <li>Outstanding APIs</li>
                </ul>
              </div>
              <div>
                <h1 className='font-bold'>MORE</h1>
                <ul className='text-lightBlue text-sm flex flex-col gap-1'>
                  <li>Route</li>
                  <li>Invoices</li>
                  <li>Frelancer Payments</li>
                  <li>International</li>
                  <li>Flash Checkout</li>
                  <li>UPI</li>
                  <li>ePOS</li>
                  <li>Checkout Demo</li>
                  <li>RazorpayX Payroll</li>
                </ul>
              </div>
              
                </div>

                <div className='w-[30%] lg:w-[30%] text-gray-500 justify-between flex flex-col gap-4 flex-wrap text-xs lg:text-base'>
                  <div>
                    <h1 className='font-bold'>ACCEPT PAYMENTS</h1>
                    <ul className='text-lightBlue text-sm flex flex-col gap-1'>
                      <li>Paymet Gateway</li>
                      <li>Payment Pages</li>
                      <li>Payment Links</li>
                      <li>QR Codes</li>
                      <li>Subscriptions</li>
                      <li>Smart Collect</li>
                    </ul>
                  </div>
                  <div>
                    <h1 className='font-bold'>DEVELOPERS</h1>
                    <ul className='text-lightBlue text-sm flex flex-col gap-1'>
                      <li>Docs</li>
                      <li>Integrations</li>
                      <li>API Reference</li>
                    </ul>
                  </div>
                  <div>
                    <h1 className='font-bold'>RESOURCES</h1>
                    <ul className='text-lightBlue text-sm flex flex-col gap-1'>                  
                      <li>Blog</li>
                      <li>Customer Stories</li>
                      <li>Events</li>
                      <li>Chargeback Guide</li>
                    </ul>
                  </div>
                  <div>
                    <h1 className='font-bold'>SOLUTIONS</h1>
                    <ul className='text-lightBlue text-sm flex flex-col gap-1'>
                      <li>Education</li>
                      <li>E-commerce</li>
                      <li>Saas</li>
                      <li>BFSI</li>
                    </ul>
                  </div>
                  <div>
                    <h1 className='font-bold'>FREE TOOLS</h1>
                    <ul className='text-lightBlue text-sm flex flex-col gap-1'>
                      <li>GST Calculator</li>
                      <li>Invoices</li>
                      <li>Online TDS Payment</li>
                      <div className='flex gap-1 flex-wrap'>
                        <li>View Live Demo</li><button className='bg-green-500 px-1 rounded-sm text-white'>New</button>
                      </div>
                    </ul>
                  </div>
                  
                </div>
                <div className='w-[35%] lg:w-[40%] text-gray-500 justify-between flex flex-col gap-4 flex-wrap text-xs lg:text-base'>
                  <div>
                    <h1 className='font-bold'>COMPANY</h1>
                    <ul className='text-lightBlue text-sm flex flex-col gap-1'>
                      <li>About Us</li>
                      <div className='flex gap-1'>
                        <li>Careers</li><button className='bg-green-500 px-1 flex-wrap rounded-sm text-white'>New</button>
                      </div>
                      <li>Terms of Use</li>
                      <li>Privacy Policy</li>
                      <li>Grevance Redressal</li>
                      <li>Partners</li>
                      <li>White Papers</li>
                      <li>Corporate Information</li>
                    
                    </ul>
                  </div>
                  <div>
                    <h1 className='font-bold'>HELP & SUPPORT</h1>
                    <ul className='text-lightBlue text-sm flex flex-col gap-1'>
                      <li>Support</li>
                      <li>Knowledge base</li>
                    </ul>
                  </div>
                  <div>
                    <h1 className='font-bold'>BECOME A PARTNER</h1>
                    <ul className='text-lightBlue text-sm flex flex-col gap-1'>
                      <li>Refer and Earn</li>
                      <li>Outstanding APIs</li>
                    </ul>
                  </div>
                  <div className='flex flex-col gap-2  '>
                    <h1 className='font-bold'>BECOME A PARTNER</h1>
                    <div className='flex gap-3 list-none flex-wrap'>
                      <li><img src={linkedin} alt="" className="w-8 h-8 "/></li>
                      <li><img src={googleDrive} alt="" className="w-8 h-8" /></li>
                      <li><img src={paypal} alt="" className="w-8 h-8" /></li>
                      <li><img src={instagram} alt="" className="w-8 h-8"/></li>
                      <li><img src={github} alt="" className="w-8 h-8"/></li>
                    </div>
                    
                  </div>
                
                <div >
                      <h1 className='font-bold'>REGD. OFFICE ADDRESS</h1>
                      <p className='text-m text-white flex-wrap '>
                        RazorpaySoftware Private Limited,
                        1st Floor, SJR Cyber,
                        22 Laskar Hosur Road, Adugodi,
                        Bengaluru, 560030,
                        Karnataka, India 
                        CIN: U72200KA2013PTC097389
                      </p>
                    </div>
                  
                </div>
            </div>
          </div>
        </div>
      </section>
    </> 
  )
}

export default App
