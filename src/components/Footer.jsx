import React from 'react'

const Footer = () => {
  return (
    <main className='bg-neutral-200'>
        <section className='w-10/12 container mx-auto py-16'>
            <div>
                <p className='text-4xl mb-8 text-neutral-500 font-semibold'>My work experience</p>
                <div className='md:grid grid-cols-2 text-[14px] md:text-[18px] text-neutral-500'>
                    <div className=''>
                        <p>August 2025 - Present</p>
                    </div>
                    <div className='flex justify-between text-neutral-800 font-medium mb-6'>
                        <div className='flex justify-center items-center'>
                            <p>Junior Full-Stack Software Developer at</p>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <img src="/images/tsa.png" alt="" className='w-7'/>
                            <p>TechStudio Academy</p>
                        </div>
                    </div>

                    <div className=''>
                        <p>January 2025 - May 2025</p>
                    </div>
                    <div className='flex justify-between text-neutral-800 font-medium mb-6'>
                        <div className='flex justify-center items-center'>
                            <p>Software Developer at</p>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <img src="/images/scalebyrenda.png" alt="" className='w-7 bg-blue-900 '/>
                            <p>Scale by Renda/Renda Africa</p>
                        </div>
                    </div>

                    <div className=''>
                        <p>July 2023 - May 2025</p>
                    </div>
                    <div className='flex justify-between text-neutral-800 font-medium mb-6'>
                        <div className='flex justify-center items-center'>
                            <p>Brand / Product Designer at</p>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <img src="/images/rendaA.png" alt="" className='w-7'/>
                            <p>Renda Africa</p>
                        </div>
                    </div>

                    <div className=''>
                        <p>October 2022 - March 2023</p>
                    </div>
                    <div className='flex justify-between text-neutral-800 font-medium mb-6'>
                        <div className='flex justify-center items-center'>
                            <p>Graphic / Motion Designer at</p>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <img src="/images/jumia.png" alt="" className='w-7 '/>
                            <p>Jumia</p>
                        </div>
                    </div>

                    <div className=''>
                        <p>2000 - PRESENT</p>
                    </div>
                    <div className='flex justify-between text-neutral-800 font-medium'>
                        <div className='flex justify-center items-center'>
                            <p>Artist / Sketcher at</p>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <img src="/images/rebornL.png" alt="" className='w-7 '/>
                            <p>REBORN</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-150 py-12 '>
                <p>LET'S GET IN TOUCH</p>
                <p className='text-3xl font-semibold hover:underline hover:text-blue-700 transition duration-300'><a href="mailto:chrischuka1@gmail.com">Let's work together and bring ideas to life. Reach me at chrischuka1@gmail.com</a></p>
                <div className='flex gap-6 mt-6'>
                    <a href="https://www.instagram.com/chris.chuka1?igsh=NDN0cHJtYjU4YnR3&utm_source=qr" target='_blank' className=' hover:text-blue-700 transition duration-300'>🔗 INSTAGRAM</a>
                    <a href="https://tinyurl.com/56eyhu3r" target='_blank' className=' hover:text-blue-700 transition duration-300'>🔗 LINKEDiN</a>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Footer