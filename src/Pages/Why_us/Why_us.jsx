import React from 'react'
import '../.././App.css'
import './Why_us.css'

import main1 from './img/main1A.png'
import main2 from './img/main2A.png'

import ma1 from './img/ma1.png'
import ma2 from './img/ma2.png'
import ma3 from './img/ma3.png'
import ma4 from './img/ma4.png'

import main3 from './img/main3A.png'


import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const Why_us = () => {
  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }
  return (
    <div>
      <div className="main_1">
        <div className="contener w-[80%] mx-auto">
        <h1 className='HH text-center xl:text-[48px] py-[20px] lg:text-[42px] mx:text-[28px] xl:w-[60%] mx-auto font-[700] '>{t("text14")}</h1>

        <div className="main_1A lg:flex justify-between lg:pt-[80px]">
          <div className="left_1 lg:w-[50%] mx:py-[20px] lg:py-[120px] ">
            <div className=' flex justify-center'>
            <h1 className='H4  bg-[#fff] py-[5px] xl:w-[50%] text-[24px] font-[600] px-[15px] rounded-[10px]'>{t("text15")}</h1>

            </div>
            <p className='text-[17px] font-[400] py-[15px] xl:w-[75%]'>{t("text15B")}</p>
          </div>
          <div className="right_1 lgw:w-[50%] pt-[20px]">
            <div>
            <img src={main1} alt="" />
            </div>
          </div>
        </div>

        <div className="main_1A lg:flex justify-between mx:py-[40px] lg:py-0 ">
          <div className="right_1 lgw:w-[50%] ">
            <img src={main2} alt="" />
          </div>
          <div className="left_1 lg:w-[50%] ">
            <div className=' flex justify-around'>
            <h1 className='H4  bg-[#fff] py-[5px] xl:w-[50%] text-[24px] font-[600] px-[15px] rounded-[10px]'>{t("text15A")}</h1>

            </div>
            <p className='text-[17px] font-[400] py-[15px] xl:w-[75%]'>{t("text15B")}</p>
          </div>
        </div>

        </div>
      </div>

      <div className="main_2 py-[100px]">
        <div className="contener sm:w-[80%] mx:w-[40%] mx-auto">
        <h1 className='HH text-center xl:text-[48px] py-[20px] lg:text-[42px] mx:text-[28px] xl:w-[60%] mx-auto font-[700] '>{t("text16")}</h1>

        <div className=' flex flex-wrap pt-[30px] justify-between'>
          <img src={ma1} alt="" />
          <img src={ma2} alt="" />
          <img src={ma3} alt="" />

          <img src={ma1} alt="" />
          <img src={ma2} alt="" />
          <img src={ma3} alt="" />
        </div>

        <div className=' flex flex-wrap justify-between py-[30px]'>
          <img src={ma4} alt="" />
          <img src={ma2} alt="" />
          <img src={ma3} alt="" />

          <img src={ma4} alt="" />
          <img src={ma2} alt="" />
          <img src={ma3} alt="" />
        </div>

        <div className=' flex flex-wrap justify-between'>
          <img src={ma1} alt="" />
          <img src={ma2} alt="" />
          <img src={ma3} alt="" />

          <img src={ma1} alt="" />
          <img src={ma2} alt="" />
          <img src={ma3} alt="" />
        </div>

        <div className=' flex flex-wrap  justify-between py-[30px]'>
          <img src={ma4} alt="" />
          <img src={ma2} alt="" />
          <img src={ma3} alt="" />

          <img src={ma4} alt="" />
          <img src={ma2} alt="" />
          <img src={ma3} alt="" />
        </div>

        </div>


        
      </div>

      
      <div className="main_3 py-[50px]">
          <div className="contener w-[80%] mx-auto">

            <div className="main_3A py-[100px] lg:flex justify-between">
              <div className="left_3 flex flex-col py-[20px] justify-center">
                <h1 className='HH text-[40px] pb-[15px] font-[700]'>Join Team?</h1>
                <p className='text-[20px] py-[15px] font-[500]'>We’re always looking for passionate people to be a part of our Brainway team!</p>
                <p className='text-[30px] font-[700]'>join@brainway.co.il</p>
              </div>

              <div className="right_3 py-[20px]">
                <div className=" bg-[url('./img/bg.png')] w-[100%] bg-cover bg-no-repeat ">
                  <img src={main3} alt="" />
                </div>
              </div>


            </div>

          </div>
        </div>
    </div>
  )
}

export default Why_us