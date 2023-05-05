import React from 'react'
import './layout.css'
import '.././App.css'

import { Link,Outlet } from 'react-router-dom'

import Switcher from '.././component/Switcher'
import Temporary from '../component/navbar'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import LanguageIcon from '@mui/icons-material/Language';


import nav from './img/nav1.png'
import nav1A from './img/nav1A.png'
import nav2 from './img/nav2.png'
import footer1 from './img/footer1.png'
import { Home } from '../Routes/Routes'
const Layout = () => {
  const [lng, setLng] = useState("en")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }

  const handleChange = (e) => {
    const {value} = e.target
    changeLanguage(value)
    setLng(value)
  }
  return (
    <div>
      <div className='bg-[#F4F7FE] dark:bg-[#151415d6] dark:text-[#fff] contener'>
        <div className="navbar flex justify-between lg:w-[80%] mx:w-[95%] py-[15px] mx-auto">
          <div>
            <img src={nav} alt="" />
          </div>
            <ul className=' lg:flex hidden w-[40%]  py-[20px] pb-[3px]  text-[16px] font-[400] mx-auto px-[10px] justify-between '>
              <Link to ='/' >
                <li className=' hover:text-[16px] hover:font-[600] hover:text-[#2389FF]'>{t("text")}</li>
              </Link>


              <Link to = "Process">
                <li className=' hover:text-[16px] hover:font-[600] hover:text-[#2389FF]'>{t("text1")}</li>
              </Link>

              <Link to = "Company">
                <li className=' hover:text-[16px] hover:font-[600] hover:text-[#2389FF]'>{t("text2")}</li>
              </Link>

              <Link to = "Why_us">
                <li className=' hover:text-[16px] hover:font-[600] hover:text-[#2389FF]'>{t("text3")}</li>
              </Link>

            </ul>

                  <div className='flex md:gap-[20px] py-[15px]  mx:gap-[10px]'> 
                    <div className=''>
                        <Switcher/>
                    </div>
                    <div className='flex gap-[6px]'>
                     <div className='pt-[5px] sm:flex hidden'>
                     <LanguageIcon/>
                     </div>
                    <select className='dark:text-[#010000] font-[600] rounded-[10px] p-[5px]' value={lng} onChange={handleChange}>
                         <option value={"en"}>En</option>
                         <option value={"ru"}>Ru</option>
                     </select>
                    </div>
                      <div className='md:flex hidden'>
                        <button className='btn   text-[16px] font-[400] py-[5px] px-[25px] '>{t("text4A")}</button>
                        </div>  
                    <div className=' lg:hidden mx:flex'>
                        <Temporary/>
                    </div>

                </div>
        </div>
      </div>

      <Outlet/>

      <div className='contener bg-[#151415d6] text-[#fff]'>
        <div className="footer lg:w-[80%] md:w-[60%] justify-between mx-auto py-[70px] lg:flex">
          <div className='flex py-[20px] lg:w-[33%] mx:justify-center mx:text-center mx:items-center  lg:justify-start lg:text-start lg:items-start flex-col gap-[10px]'>

            <h2 className='text-[50px] xl:w-[80%] font-[700]'>{t("text12A")}</h2>
            <p className='py-[10px] text-[14px] text-[#2575FC] xl:w-[75%] mx:w-[90%] font-[400]'>{t("text12")}</p>


          </div>
          <div className='lg:w-[33%] flex flex-col lg:text-end mx:text-center lg:justify-between py-[20px]'>
          <div className=' flex lg:justify-end mx:justify-center'>
              <img src={nav1A} alt="" />
            </div>

          <ul className=' lg:flex flex-col pt-[20px] gap-[10px] '>
              
              <Link to ='/' >
                <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>{t("text")}</li>
              </Link>


              <Link to = "Process">
                <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>{t("text1")}</li>
              </Link>

              <Link to = "Company">
                <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>{t("text2")}</li>
              </Link>

              <Link to = "Why_us">
                <li className=' hover:text-[16px] hover:font-[700] hover:text-[#2389FF]'>{t("text3")}</li>
              </Link>
            </ul>

            </div>


          
        </div>
      </div>

    </div>
  )
}

export default Layout