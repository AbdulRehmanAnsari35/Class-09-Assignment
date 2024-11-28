import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div>
       <section className='Hero bg-white min-h-screen w-screen flex py-20 bg-cover bg-center overflow-hidden'>
      <div className="text-white text-left px-4 md:px-16">

      <div className="absolute top-[30%] right-[-0] transform translate-y-[-25%] z-20 ">
      {/* Other website content */}
      <Image 
        src="/governer.png" 
        alt="logo"
        width={900} 
        height={1100}
       
           
      />
    </div>

      <Image
          src="/governer-sind-logo.png"
          alt="Logo"
          width={125}
          height={50}
          className="absolute top-10 left-10 transform translate-y-[-25%] z-20  lg:h-50 w-30  object-contain "
        />
        <h1 className='text-sky-800 text-bold text-7xl'>Governor Sindh</h1>
        <h4 className='text-sky-800 text-5xl'>Kamran Khan Tessori</h4>
        <br/>
        <h2 className='text-[rgb(46,182,232)] text-5xl font-extrabold'>Certified Cloud <br />Applied Generative AI <br />Engineer (GenEng)</h2>
        <br />
        <h2 className='text-sky-800 font-bold text-3xl  '>Earn up to $5,000 / month <br/><br/> Now admissions are open in <br/> Hyderabad</h2>
        
        <div className="mt-6 flex items-center space-x-20">
            <button className="px-10 py-4 bg-sky-800 hover:bg-blue-700 rounded-md font-bold text-white">
              APPLY NOW
            </button>
            <div className="space-y-1">
              <h3 className="text-sky-800 font-extrabold text-3xl">562,143</h3>
              <p className="text-sky-700 text-sm font-extralight">Accepted Applications</p>
            </div>
          </div>
          <div className='mt-40 '>
            <h2 className='text-sky-800 text-3xl text-center text-bold '>Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur<br/> Developing Billion-Dollar Valued Developers and Solopreneurs</h2>
          </div>
          <div>
            <p className='text-black mt-7 text-xl text-justify'>The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.</p>
          </div>
          
          <div className='flex space-x-2 '>
            <Image
            src={'/hera khan.png'}
            alt='pic'
            width={600}
            height={500}
            className='rounded-md'
            />
             <Image
            src={'/student.png'}
            alt='pic'
            width={600}
            height={500}
            className='rounded-md'
            />
           
          </div>
          <br/>
          <br/>

          <div className='flex space-x-10 '>
            <Image
            src={'/advanced c 1.jpg'}
            alt='pic'
            width={350}
            height={300}
            className='rounded-md'
            />
             <Image
            src={'/advanced c 2.jpg'}
            alt='pic'
            width={350}
            height={300}
            className='rounded-md'
            />
            <Image
            src={'/advanced c 4.jpg'}
            alt='pic'
            width={350}
            height={300}
            className='rounded-md'
            />
           
          </div>


      </div>
    </section>
    
    </div>
  )
}

export default Hero
