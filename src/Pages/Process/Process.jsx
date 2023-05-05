import React from 'react'
import '../.././App.css'
import './Process.css'

import main1 from './img/main1.png'

import main2 from './img/main2.png'
import main2A from './img/main2A.png'
import main22 from './img/main22.png'

import main3 from './img/main3.png'
import main3A from './img/main3A.png'
import main22A from './img/main22A.png'

import main4 from './img/main4.png'
import main4A from './img/main4A.png'
import main22B from './img/main22B.png'

import main5 from './img/main5.png'
import main5A from './img/main5A.png'


import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const Process = () => {
  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }
  return (
    <div className='  dark:text-[#fff]'>
      <div className="main_1 dark:bg-[#000000cd] py-[100px]">
        <div className="contener w-[80%] mx-auto">
        <h1 className='HH text-center xl:text-[48px] lg:text-[42px] mx:text-[28px] xl:w-[60%] mx-auto font-[700]  '>{t("text10")}</h1>
        <div className="main_1A lg:flex justify-between py-[60px]">
          <div className="left_1 lg:w-[50%] mx:text-center lg:text-start py-[20px]">
            <h1 className=' xl:text-[44px] lg:text-[40px] mx:text-[28px]  font-[700]  '>{t("text10A")}</h1>
            <p className=' text-[18px] xl:w-[65%] py-[20px]  font-[400]  '>{t("text10B")}</p>
          </div>
          <div className="right_1 py-[20px] ">
            <img src={main1} alt="" />
          </div>
        </div>
        </div>
      </div>

      <div className="main_2 py-[80px] dark:bg-[#000000cd] bg-[#F8F8F8]">
        <div className="contener md:w-[80%] mx:w-[90%] mx-auto">
        <h1 className='HH text-center xl:text-[48px] lg:text-[42px] mx:text-[28px] xl:w-[60%] mx-auto font-[700]  '>{t("text11")}</h1>
        <div className="main_2A lg:flex justify-between py-[80px]">
          <div className="left_2 py-[20px]">
            <img src={main2} alt="" />
          </div>

          <div className="right_2 py-[20px]">
            <img src={main2A} alt="" />
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <img src={main22} alt="" />
        </div>

        <div className="main_2A2 lg:flex justify-between py-[80px]">
          <div className="left_2 py-[20px]">
            <img src={main3} alt="" />
          </div>

          <div className="right_2 py-[20px]">
            <img src={main3A} alt="" />
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <img src={main22A} alt="" />
        </div>

        <div className="main_2A3 lg:flex justify-between py-[80px]">
          <div className="left_2 py-[20px]">
            <img src={main4} alt="" />
          </div>

          <div className="right_2 py-[20px]">
            <img src={main4A} alt="" />
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <img src={main22B} alt="" />
        </div>

        <div className="main_2A4 lg:flex justify-between py-[80px]">
          <div className="left_2 py-[20px]">
            <img src={main5} alt="" />
          </div>

          <div className="right_2 py-[20px]">
            <img src={main5A} alt="" />
          </div>
        </div>



        </div>
      </div>


    </div>
  )
}

export default Process