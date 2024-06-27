
import About from './Components/About'
import Home from './Components/Home'
import './globals.css'

function App() {
  

  return (
   <div className='flex flex-col items-center justify-center'>
    <div className='flex w-full h-[98px] bg-[#F8F8F8] items-center justify-center fixed top-0 z-50'>
      <div className='flex flex-row px-20 w-full items-center justify-between'>
        <img
        src='./assets/catSmall.svg'
        />

        <div className='flex flex-row items-center ml-20 justify-center space-x-14'>
          <p>HOME</p>
          <p>ABOUT</p>
          <p>TOKENOMICS</p>
          <p>ROADMAP</p>
        </div>

        <div className=' bg-headerText'>
          <div className='px-5 py-2 tracking-widest text-white text-[14px]'>
            COMMUNITY
          </div>
        </div>
      </div>

    </div>

    <Home/>
    <About/>

   </div>
  )
}

export default App
