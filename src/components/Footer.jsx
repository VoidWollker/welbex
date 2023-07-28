import { useMobile } from "../context/mobile"
import {ReactComponent as Telegram} from '../assets/telegram.svg'
import {ReactComponent as Whatsapp} from '../assets/whatsapp.svg'
import {ReactComponent as Viber} from '../assets/viber.svg'

export const Footer = () =>{
    const {isMobile} = useMobile()

    const MobileLayout =
        <div className="flex flex-col justify-betwee text-white w-full">
            <div className="flex flex-col bg-black z-10 px-5 pb-5" id="about">
                <p className="font-bold font-sans text-l text-gray-500 uppercase mb-3">О компании</p>
                <div className="flex flex-col">
                    <a href="" className="font-sans font-ligth mb-1">Партнерская программа</a>
                    <a href="" className="font-sans font-ligth mb-1">Вакансии</a>
                </div>
            </div>
            <div className="flex flex-col bg-black z-10 px-5 pb-5" id="features">
                <p className="font-bold font-sans text-lg text-gray-500 uppercase mb-3">Меню</p>
                <div className="flex flex-row">
                    <div className="flex flex-col me-10">
                        <p classname="font-sans font-ligth  text-gray-400 mb-1">Расчёт стоимости</p>
                        <p classname="font-sans font-ligth  text-gray-400 mb-1">Услуги</p>
                        <p classname="font-sans font-ligth  text-gray-400 mb-1">Виджеты</p>
                        <p classname="font-sans font-ligth  text-gray-400 mb-1">Интеграции</p>
                        <p classname="font-sans font-ligth  text-gray-400 mb-1">Наши клиенты</p>
                    </div>
                    <div className="flex flex-col">
                        <p classname="font-sans font-ligth  text-gray-400 mb-1">Кейсы</p>
                        <p classname="font-sans font-ligth  text-gray-400 mb-1">Балагодарственные письма</p>
                        <p classname="font-sans font-ligth  text-gray-400 mb-1">Сертификаты</p>
                        <p classname="font-sans font-ligth  text-gray-400 mb-1">Блог на YouTube</p>
                        <p classname="font-sans font-ligth  text-gray-400 mb-1">Вопрос / Ответ</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-black z-10 px-5">
                <p className="font-bold font-sans text-lg text-gray-500 uppercase mb-3">Контакты</p>
                <div className="flex flex-col mb-10">
                    <p id="phone">+7 555-55-55</p>
                    <div className="flex flex-row justify-start scale-125 ps-7 pt-2 mb-5" id="socials">
                        <a href="" className="mx-2"><Telegram /></a>
                        <a href="" className="mx-2"><Viber /></a>
                        <a href="" className="mx-2"><Whatsapp /></a>
                    </div>
                    <p id="adress">Москва, Путевой проезд 3с1, к 902</p>
                </div>
                <p className="text-sm text-gray-600">@WELBEX 2022, Все права защищены.</p>
                <a href="" className="underline text-sm text-gray-600 mb-5">Политика конфиденциальности</a>
            </div>
        </div> 

    const DesktopLayout =
        <div className="flex flex-row justify-between text-white w-full">
            <div className="flex flex-col" id="about">
                <p className="font-bold font-sans text-lg text-gray-500 uppercase mb-3">О компании</p>
                <div className="flex flex-col">
                    <a href="" className="font-sans font-ligth mb-1">Партнерская программа</a>
                    <a href="" className="font-sans font-ligth mb-1">Вакансии</a>
                </div>
            </div>
            <div className="flex flex-col" id="features">
                <p className="font-bold font-sans text-lg text-gray-500 uppercase mb-3">Меню</p>
                <div className="flex flex-row">
                    <div className="flex flex-col me-10">
                        <p classname="font-sans font-ligth  text-gray-400 mb-1">Расчёт стоимости</p>
                        <p classname="font-sans font-ligth  text-gray-400 mb-1">Услуги</p>
                        <p classname="font-sans font-ligth  text-gray-400 mb-1">Виджеты</p>
                        <p classname="font-sans font-ligth  text-gray-400 mb-1">Интеграции</p>
                        <p classname="font-sans font-ligth  text-gray-400 mb-1">Наши клиенты</p>
                    </div>
                    <div className="flex flex-col">
                        <p classname="font-sans font-ligth  text-gray-400 mb-1">Кейсы</p>
                        <p classname="font-sans font-ligth  text-gray-400 mb-1">Балагодарственные письма</p>
                        <p classname="font-sans font-ligth  text-gray-400 mb-1">Сертификаты</p>
                        <p classname="font-sans font-ligth  text-gray-400 mb-1">Блог на YouTube</p>
                        <p classname="font-sans font-ligth  text-gray-400 mb-1">Вопрос / Ответ</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col text-right">
                <p className="font-bold font-sans text-lg text-gray-500 uppercase mb-3">Контакты</p>
                <div className="flex flex-col mb-20">
                    <p className="mb-5" id="phone">+7 555-55-55</p>
                    <div className="flex flex-row justify-end scale-125 pt-2 pe-5 mb-5" id="socials">
                        <a href="" className="mx-2"><Telegram /></a>
                        <a href="" className="mx-2"><Viber /></a>
                        <a href="" className="mx-2"><Whatsapp /></a>
                    </div>
                    <p id="adress">Москва, Путевой проезд 3с1, к 902</p>
                </div>
                <p className="text-sm text-gray-600">@WELBEX 2022, Все права защищены.</p>
                <a href="" className="underline text-sm text-gray-600 mb-5">Политика конфиденциальности</a>
            </div>
        </div> 
    
    return(
        <footer>
            {isMobile 
                ? MobileLayout
                : DesktopLayout
            }
        </footer>
        
    )
}