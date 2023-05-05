import React from 'react'
import '../.././App.css'
import './Company.css'

import CustomizedAccordions from './accordion/Accordion'

import main1 from './img/main1.png'
import main1A from './img/main1A.png'

import main2 from './img/main2.png'
import main2A from './img/main2A.png'

import main3 from './img/main3.png'
import main3A from './img/main3A.png'

import main4 from './img/main4.png'
import main4A from './img/main4A.png'

import main5 from './img/main5.png'
import main5A from './img/main5A.png'

import main6 from './img/main6.png'
import main6A from './img/main6A.png'








import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const Company = () => {
  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }
  return (
    <div className=' dark:bg-[#252025d7] dark:text-[#FFF]'>
      <div className="main_1 py-[100px]">
        <div className="contener w-[80%] mx-auto">
        <h1 className='HH text-center xl:text-[48px] lg:text-[42px] mx:text-[28px] xl:w-[60%] mx-auto font-[700]  '>{t("text11A")}</h1>
        <div className="main_1A py-[60px] lg:flex justify-between">
          <div className="left_1 py-[25px]">
            <img src={main1} alt="" />
          </div>
          <div className="right_1 py-[25px]">
          <img src={main1A} alt="" />

          </div>
        </div>

        <div className="main_1A2 py-[60px] lg:flex justify-between">
          <div className="left_1 py-[25px]">
            <img src={main2} alt="" />
          </div>
          <div className="right_1 py-[25px]">
          <img src={main2A} alt="" />

          </div>
        </div>

        <div className="main_1A2 py-[60px] lg:flex justify-between">
          <div className="left_1 py-[25px]">
            <img src={main3} alt="" />
          </div>
          <div className="right_1 py-[25px]">
          <img src={main3A} alt="" />

          </div>
        </div>

        <div className="main_1A2 py-[60px] lg:flex justify-between">
          <div className="left_1 py-[25px]">
            <img src={main4} alt="" />
          </div>
          <div className="right_1 py-[25px]">
          <img src={main4A} alt="" />

          </div>
        </div>

        <div className="main_1A2 py-[60px] lg:flex justify-between">
          <div className="left_1 py-[25px]">
            <img src={main5} alt="" />
          </div>
          <div className="right_1 py-[25px]">
          <img src={main5A} alt="" />

          </div>
        </div>

        <div className="main_1A2 py-[60px] lg:flex justify-between">
          <div className="left_1 py-[25px]">
            <img src={main6} alt="" />
          </div>
          <div className="right_1 py-[25px]">
          <img src={main6A} alt="" />

          </div>
        </div>

        </div>
      </div>

      <div className="main_2 bg-[] py-[100px]">
        <div className="contener w-[80%] mx-auto">
        <h1 className='HH text-center xl:text-[48px] lg:text-[42px] mx:text-[28px] xl:w-[60%] mx-auto font-[700] '>{t("text11B")}</h1>
        <p className='text-center xl:text-[24px] py-[10px] lg:text-[23px] mx:text-[23px] xl:w-[30%] mx-auto font-[600] '>{t("text11C")}</p>

        <div className='xl:w-[70%] mx-auto py-[30px]'>
          <CustomizedAccordions/>
        </div>

        </div>
      </div>

    </div>
  )
}

export default Company