import { useMobile } from "../context/mobile"
import "../css/Header.css"
import {ReactComponent as Telegram} from '../assets/telegram.svg'
import {ReactComponent as Whatsapp} from '../assets/whatsapp.svg'
import {ReactComponent as Viber} from '../assets/viber.svg'

export const Header = () =>{
    const {isMobile} = useMobile()

    const MobileLayout =
        <div className="flex flex-row items-center w-screen h-16">
            <nav className="font-['Inter'_sans] uppercase bg-black bg-opacity-50 z-10 flex justify-around items-center px-1 w-full h-full">
                <a href="" className="z-10">Услуги</a>
                <a href="" className="z-10">Виджеты</a>
                <a href="" className="z-10">Интеграции</a>
                <a href="" className="z-10">Кейсы</a>
            </nav>
        </div>

    const DesktopLayout =
        <div className="flex flex-row w-screen">
            <div className="flex flex-col w-[10%] me-20">
                <p className="font-['Montserrat'_sans] font-thin text-md">крупный интегратор CRM в России и ещё 8 странах</p>
            </div>
            <nav className="flex justify-between w-[30%] font-['Inter'_sans] flex-wrap font-normal xl:text-xl lg:text-md md:text-md sm:text-sm me-40">
                <a href="" className="z-10">Услуги</a>
                <a href="" className="z-10">Виджеты</a>
                <a href="" className="z-10">Интеграции</a>
                <a href="" className="z-10">Кейсы</a>
                <a href="" className="z-10">Сертификаты</a>
            </nav>
            <div className="font-['Inter'_sans] font-normal text-xl me-16">
                <p>+7 555 555-55-55</p>
            </div>
            <div className="flex flex-row justify-between scale-125 pt-2 w-[8%]">
                <a href=""><Telegram /></a>
                <a href=""><Viber /></a>
                <a href=""><Whatsapp /></a>
            </div>
        </div>

    return(
        <header>
            {isMobile
                ? MobileLayout
                : DesktopLayout
            }
        </header>
    )
}