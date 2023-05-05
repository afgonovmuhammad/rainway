import React from 'react'
import '../.././App.css'
import './home.css'

import Swire_home from '../../Swioers/Swioer_home'

import main1 from './img/main1.png'
import main2 from './img/main2.png'
import main3 from './img/main3.png'
import main3A from './img/main3A.png'
import main3B from './img/main3B.png'

import main4 from './img/main4.png'
import main4A from './img/main4A.png'
import main4B from './img/main4B.png'
import main4C from './img/main4C.png'

import main6 from './img/main6.png'
import main6A from './img/main6A.png'
import main6B from './img/main6B.png'
import main6C from './img/main6C.png'
import main6D from './img/main6D.png'
import main6I from './img/mainI.png'
import main6F from './img/mainF.png'

import main7 from './img/main77.png'
import main7A from './img/main777.png'
import main7B from './img/main7B.png'




import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const Home = () => {
  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }

  return (
    <div className=' dark:bg-[#000000cd] dark:text-[#fff]'>
      <div className="main_1">
        <div className="contener w-[80%] mx-auto">
          <div className="main_1A lg:flex pb-[80px]">
            <div className="left_1 lg:w-[50%] py-[100px] mx:text-center lg:text-start">
              <h1 className='HH xl:text-[58px] lg:text-[38px] mx:text-[40px] xl:w-[80%] font-[700]  text-[#0e1d36]'>{t("text5")}</h1>
              <p className='text-[20px] py-[20px] xl:w-[70%] font-[500] leading-[35px] dark:text-[#fff] text-[#0e1d36]'>{t("text5A")}</p>

              <p className='text-[24px] py-[40px] xl:w-[70%] font-[700] leading-[35px] dark:text-[#fff] text-[#0e1d36]'>{t("text5B")}</p>

            </div>
            <div className="righr_1 lg:w-[50%] py-[30px]">
              <img src={main1} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="main_2 py-[80px]  dark:bg-[#00000080] dark:text-[#fff] bg-[#F8F8F8]">
        <div className="contener w-[80%] mx-auto">
          <h1 className='HH text-center xl:text-[48px] lg:text-[42px] mx:text-[28px] xl:w-[60%] mx-auto font-[700]  text-[#0e1d36]'>{t("text6")}</h1>
          <div className='flex justify-center py-[80px]'>
            <img className='w-[85%]' src={main2} alt="" />
          </div>
        </div>
      </div>

      <div className="main_3 py-[90px]">
        <div className="contener w-[80%] mx-auto">
          <h1 className='HH text-center xl:text-[48px] lg:text-[42px] mx:text-[28px] xl:w-[60%] mx-auto font-[700]  text-[#0e1d36]'>{t("text6A")}</h1>
          <p className=' text-[24px] mx-auto xl:w-[50%] py-[15px] text-center font-[400]'>{t("text5A")}</p>

          <div className="main_3A lg:flex justify-between pt-[90px]">
            <div className="left_3 py-[25px]">
                <img src={main3} alt="" />
            </div>
            <div className="right_3 lg:w-[50%] py-[25px]">
              <h1 className='main3 text-[25px] xl:w-[60%] px-[20px] font-[700]'>{t("text6B")}</h1>
              <p className='text-[17px] mx:text-center lg:text-start font-[400] pl-[20px] py-[15px]  xl:w-[80%]'>{t("text6I")}</p>
            </div>
          </div>

          <div className="main_3A2 lg:flex justify-between pt-[90px]">
            <div className="right_3 lg:w-[50%] py-[25px]">
              <h1 className='main3 text-[25px] xl:w-[60%] px-[20px] font-[700]'>{t("text6C")}</h1>
              <p className='text-[17px] mx:text-center lg:text-start font-[400] pl-[20px] py-[15px]  xl:w-[80%]'>{t("text6I")}</p>
            </div>
            <div className="left_3 lg:w-[50%] py-[25px]">
                <img src={main3A} alt="" />
            </div>
          </div>

          <div className="main_3A3 lg:flex justify-between pt-[90px]">
            <div className="left_3 lg:w-[50%] py-[25px]">
                <img src={main3B} alt="" />
            </div>
            <div className="right_3 lg:w-[50%] lg:py-[55px] mx:py-[30px]">
              <h1 className='main3 text-[25px] xl:w-[60%] px-[20px] font-[700]'>{t("text6D")}</h1>
              <p className='text-[17px] mx:text-center lg:text-start font-[400] pl-[20px] py-[15px]  xl:w-[80%]'>{t("text6I")}</p>

            </div>
          </div>
        </div>
      </div>

      <div className="main_4 py-[120px]">
        <div className="contener w-[80%] mx-auto">
          <h1 className=' HH text-center xl:text-[48px] lg:text-[42px] mx:text-[28px] xl:w-[60%] mx-auto font-[700]  text-[#0e1d36]'>{t("text7")}</h1>

          <div className='main_4A xl:w-[90%] mx-auto md:flex mt-[80px] mx:text-center md:text-start justify-between'>
                <div className='md:w-[15%] flex mx:justify-center md:justify-start'>
                  <img src={main4} alt="" />
                </div>
                <div className='md:w-[60%] pt-[10px]'>
                <p className='text-[18px] font-[700]'>{t("text7B")}</p>
                </div>
                <div className=' md:w-[15%] pt-[30px] '>
                  <button className='bnt4  px-[25px] py-[5px] text-[20px] text-[#fff] font-[700]'>{t("text7A")}</button>
                </div>
          </div>

          <div className='main_4A xl:w-[90%] mx-auto md:flex mt-[5px] mx:text-center md:text-start justify-between'>
                <div className='md:w-[15%] flex mx:justify-center md:justify-start'>
                  <img src={main4A} alt="" />
                </div>
                <div className='md:w-[60%] pt-[10px]'>
                <p className='text-[18px] font-[700]'>{t("text7B")}</p>
                </div>
                <div className=' md:w-[15%] pt-[30px] '>
                  <button className='bnt4  px-[25px] py-[5px] text-[20px] text-[#fff] font-[700]'>{t("text7A")}</button>
                </div>
          </div>

          <div className='main_4A xl:w-[90%] mx-auto md:flex mt-[5px] mx:text-center md:text-start justify-between'>
                <div className='md:w-[15%] flex mx:justify-center md:justify-start'>
                  <img src={main4B} alt="" />
                </div>
                <div className='md:w-[60%] pt-[10px]'>
                <p className='text-[18px] font-[700]'>{t("text7B")}</p>
                </div>
                <div className=' md:w-[15%] pt-[30px] '>
                  <button className='bnt4  px-[25px] py-[5px] text-[20px] text-[#fff] font-[700]'>{t("text7A")}</button>
                </div>
          </div>

          <div className='main_4A4 xl:w-[90%] mx-auto md:flex mt-[5px] mx:text-center md:text-start justify-between'>
                <div className='md:w-[15%] flex mx:justify-center md:justify-start'>
                  <img src={main4C} alt="" />
                </div>
                <div className='md:w-[60%] pt-[10px]'>
                <p className='text-[18px] font-[700]'>{t("text7B")}</p>
                </div>
                <div className=' md:w-[15%] pt-[30px] '>
                  <button className='bnt4  px-[25px] py-[5px] text-[20px] text-[#fff] font-[700]'>{t("text7A")}</button>
                </div>
          </div>
        </div>
      </div>

      <div className="main_5 bg-[#F8F8F8] dark:bg-[#00000080] dark:text-[#fff] py-[100px]">
        <div className="contener w-[80%] mx-auto">
          <h1 className=' HH text-center xl:text-[48px] lg:text-[42px] mx:text-[28px] xl:w-[60%] mx-auto font-[700]'>{t("text8")}</h1>
          <div className='py-[80px]'>
            <Swire_home/>
          </div>
        </div>
      </div>

      <div className="main_6 py-[120px]">
        <div className="contener mx:w-[90%] lg:w-[99%] mx-auto">
          <div className='flex flex-wrap justify-between'>
            <img src={main6} alt="" />
            <img src={main6A} alt="" />
            <img src={main6B} alt="" />
            <img src={main6C} alt="" />
            <img src={main6D} alt="" />
            <img src={main6I} alt="" />
            <img src={main6F} alt="" />

          </div>
        </div>
      </div>

      <div className="main_7 py-[100px] dark:bg-[#00000080] dark:text-[#fff] bg-[#F8F8F8]">
        <div className="contener w-[80%] mx-auto">
          <div className="main_7A lg:flex justify-between">
            <div className="left_7 lg:w-[40%]">
              <h1 className=' HH text-center xl:text-[48px] lg:text-[42px] mx:text-[28px] font-[700] '>{t("text9")}</h1>
              <div className='flex flex-col '>
              <input className='py-[10px] dark:bg-[#000000] font-[400] rounded-[7px] my-[15px] px-[20px]' type="text" placeholder='Name' />
              <input className='py-[10px] dark:bg-[#000000] font-[400] rounded-[7px] my-[15px] px-[20px]' type="text" placeholder='Company' />
              <input className='py-[10px] dark:bg-[#000000] font-[400] rounded-[7px] my-[15px] px-[20px]' type="text" placeholder='Email' />
              <input className='py-[10px] dark:bg-[#000000] font-[400] rounded-[7px] my-[15px] px-[20px]' type="text" placeholder='Phone' />
              <input className='py-[10px] dark:bg-[#000000] font-[400] rounded-[7px] mt-[15px] pb-[120px] px-[20px]' type="text" placeholder='Whats on your mind?' />
              <p className='mt-[20px] font-[400] '>By clicking on the button, You agree with Privacy Policy</p>
              <button className='py-[10px] rounded-[7px] text-[#fff] font-[600] bg-black my-[20px] px-[20px]'>Send</button>
              </div>
            </div>
            <div className="right_7  mx-auto">
              <h1 className='  text-center xl:text-[48px] lg:text-[42px] mx:text-[28px] font-[700] dark:text-[#fff] text-[#0e1d36]'>{t("text9A")}</h1>
              <div className=' flex flex-col justify-center items-center'>
                <div className='flex'>
                <img src={main7} alt="" />
                <img src={main7A} alt="" />

                </div>
                <div>
                  <img src={main7B} alt="" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home