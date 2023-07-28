import './css/App.css';
import { useMobile } from './context/mobile';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  const {isMobile} = useMobile()

  const createBgCircle = (positionTag, color, blurTag, size) =>
  <div className={`absolute ${positionTag} bg-${color} border-1 border-black rounded-full blur-${blurTag} drop-shadow-[15px_10px_100px_rgb(255,255,255)] w-${size} h-${size} bg-object`}>
    <div className='relative left-1/4 top-6 bg-white rounded-full blur-md w-1/5 h-1/5'></div>
    <div className='relative left-1/4 top-6 bg-white rounded-full blur-xl w-1/5 h-1/5'></div>
  </div>

  const MobileLayout = 
    <div className='min-h-screen min-w-screen bg-black'>
      <Header />
      <div className='absolute -left-[30%] -top-[10%] bg-lime-700 border-1 border-black rounded-full blur-3xl opacity-20 w-72 h-72 bg-object z-0'>
      </div>
      <div className='absolute left-[75%] top-[30%] bg-[#833AB4] border-1 border-black rounded-full blur-3xl opacity-30 w-72 h-72 bg-object z-0'>
      </div>
      <div className='absolute left-[90%] top-[42%] bg-[#833AB4] border-1 border-black rounded-full blur-md drop-shadow-[3px_6px_27px_rgba(117,118,217,0.25)] w-16 h-16 bg-object z-0'>
        <div className='relative left-1/4 top-6 bg-white rounded-full blur-md w-1/5 h-1/5'></div>
        <div className='relative left-1/4 top-6 bg-white rounded-full blur-xl w-1/5 h-1/5'></div>
      </div>
      <div className='absolute -left-[10%] top-[50%] bg-[#401519] border-1 border-black rounded-full blur-3xl opacity-30 w-72 h-72 bg-object z-0'>
      </div>
      <div className='absolute left-[10%] top-[60%] bg-[#401519] border-1 border-black rounded-full blur-md drop-shadow-[3px_6px_27px_rgba(117,118,217,0.25)] w-16 h-16 bg-object z-0'>
        <div className='relative left-1/4 top-6 bg-white rounded-full blur-md w-1/5 h-1/5'></div>
        <div className='relative left-1/4 top-6 bg-white rounded-full blur-xl w-1/5 h-1/5'></div>
      </div>
      <div className="flex flex-col text-white mx-5 mt-10 mb-20">
        <div className='mb-8'>
          <div className='text-5xl mb-5'>
            <p>Зарабатывайте больше</p>
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#FF3F78] font-extrabold'>с WELBEX</p>
          </div>
          <p className='text-2xl'>Развиваем и контролируем продажи за вас</p>
        </div>
        <div className='text-xl font-normal font-sans mb-10'>
          <div className="flex flex-row">
            <p className='me-1'>Вместе с</p>
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#FD8757] to-[#FF3F78] font-extrabold uppercase'>бесплатной</p>
          </div>
          <div className="flex flex-row">
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#FE7161] font-extrabold me-1 uppercase'>консультацией</p>
            <p>мы дарим:</p>
          </div>
        </div>
        <div className="flex flex-col">
          <ul className="text-lg font-extralight uppercase">
            <div className="flex flex-row justify-around w-full">
              <div className='flex flex-row justify-start w-[45%]'>
                <div className='flex self-center w-3 h-0.5 bg-gradient-to-r from-[#FCB045] to-[#FE7161] mx-1'></div>
                <p>Skype аудит</p>
              </div>
              <div className='flex flex-row justify-start w-[45%]'>
                <div className='flex self-center w-3 h-0.5 bg-gradient-to-r from-[#FCB045] to-[#FE7161] mx-1'></div>
                <p>30 виджетов</p>
              </div>
            </div>
            <div className="flex flex-row justify-around w-full">
              <div className='flex flex-row justify-start w-[45%]'>
                <div className='flex self-center w-3 h-0.5 bg-gradient-to-r from-[#FCB045] to-[#FE7161] mx-1'></div>
                <p>Dashboard</p>
              </div>
              <div className='flex flex-row justify-start w-[45%]'>
                <div className='flex self-center w-3 h-0.5 bg-gradient-to-r from-[#FCB045] to-[#FE7161] mx-1'></div>
                <p>Месяц amocrm</p>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <Footer />
    </div>

  const DesktopLayout = 
    <div className='min-h-screen min-w-full bg-black pt-[2%]'>
      <div className='mx-[13%]'>
        <div className='absolute left-[45%] -top-40 bg-[#833AB4] border-1 border-black rounded-full blur-3xl opacity-30 w-72 h-72 bg-object'>
        </div>
        <div className='absolute -left-20 top-80 bg-[#961A1A] border-1 border-black rounded-full blur-3xl opacity-30 w-72 h-72 bg-object'>
        </div>
        <div className='absolute left-[60%] top-0 bg-indigo-900 border-1 border-black rounded-full blur-sm drop-shadow-[3px_6px_27px_rgba(117,118,217,0.25)] w-20 h-20 bg-object'>
          <div className='relative left-1/4 top-6 bg-white rounded-full blur-md w-1/5 h-1/5'></div>
          <div className='relative left-1/4 top-6 bg-white rounded-full blur-xl w-1/5 h-1/5'></div>
        </div>
        <div className='absolute left-[35%] top-20 bg-[#401519] border-1 border-black rounded-full drop-shadow-[3px_6px_27px_rgba(223,125,125,0.25)] 
          xl:w-32 lg:w-24 md:w-16 sm:w-16 xl:h-32 lg:h-24 md:h-16 sm:h-16 bg-object'>
          <div className='relative left-1/4 top-6 bg-white rounded-full blur-md w-1/5 h-1/5'></div>
          <div className='relative left-1/4 top-6 bg-white rounded-full blur-xl w-1/5 h-1/5'></div>
        </div>
        <div className='absolute left-[55%] top-[76%] bg-[#501519] border-1 border-black rounded-full blur-sm drop-shadow-[3px_6px_27px_rgba(223,125,125,0.25)] w-12 h-12 bg-object'>
          <div className='relative left-1/4 top-6 bg-white rounded-full blur w-1/5 h-1/5'></div>
          <div className='relative left-1/4 top-6 bg-white rounded-full blur-xl w-1/5 h-1/5'></div>
        </div>
        <Header />
        {/* {createBgCircle('left-[60%] top-0', 'indigo-900', 'sm', '20')}
        {createBgCircle('left-[35%] top-20', 'rose-900', 'none', '32')} */}
        
        <div className="flex flex-row justify-between text-white mt-52 mb-24 w-full">
          <div className="flex flex-col w-4/12">
            <div className='xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl mb-10'>
              <p className=''>Зарабатывайте больше</p>
              <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#FF3F78] font-extrabold'>с WELBEX</p>
            </div>
            <p className="font-sans font-thin xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl w-7/8">Развиваем и контрлируем продажи за вас </p>
          </div>
          <div className="flex flex-col w-4/12">
            <div className='xl:text-3xl lg:text-2xl md:text-xl sm:text-lg font-medium font-sans mb-10'>
              <div className="flex flex-row whitespace-nowrap justify-end">
                <p className='me-1'>Вместе с</p>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#FD8757] to-[#FF3F78] font-extrabold uppercase'>бесплатной</p>
              </div>
              <div className="flex flex-row whitespace-nowrap justify-end">
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#FE7161] font-extrabold me-1 uppercase'>консультацией</p>
                <p>мы дарим:</p>
              </div>
            </div>
            <div className="flex flex-row self-end justify-between text-right w-full mb-10">
              <div className='w-5/12'>
                <p className='xl:text-3xl lg:text-2xl md:text-xl sm:text-lg font-ligth'>Виджеты</p>
                <p className='xl:text-xl lg:text-xl md:text-lg font-thin'>3D готовых решений</p>
              </div>
              <div className='w-5/12'>
                <p className='xl:text-3xl lg:text-2xl md:text-xl sm:text-lg font-ligth'>Dashboard</p>
                <p className='xl:text-2xl lg:text-xl md:text-lg font-thin'>с показателями вашего бизнеса</p>
              </div>
            </div>
            <div className="flex flex-row self-end justify-between text-right w-full mb-20">
              <div className='w-5/12'>
                <p className='xl:text-3xl lg:text-2xl md:text-xl sm:text-lg font-ligth'>Skype аудит</p>
                <p className='xl:text-2xl lg:text-xl md:text-lg font-thin'>отдела продаж и CRM системы</p>
              </div>
              <div className='w-5/12'>
                <p className='xl:text-3xl lg:text-2xl md:text-xl sm:text-lg font-ligth'>35 дней</p>
                <p className='xl:text-2xl lg:text-xl md:text-lg font-thin'>использования CRM</p>
              </div>
            </div>
            <button className='self-end xl:text-xl lg:text-lg md:text-md sm:text-sm bg-[#4077F3] py-7 w-10/12'>Получить консультацию </button>
          </div>
        </div>
        <Footer />  
      </div>
      
    </div>

  return (
    <div className="App">
      {isMobile 
        ?MobileLayout
        :DesktopLayout
      }
      
    </div>
  );
}

export default App;
