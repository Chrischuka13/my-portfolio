import React from 'react'
import { Github } from 'lucide-react'

const Hero = () => {
  return (
    <main className='bg-neutral-20 bg-[url(/images/blocks-gray.png)] bg-center bg-cover md:min-h-screen flex justify-center '>
        <section className='w-10/12 container mx-auto flex justify-center items-center h-screen py-16'>
        <div className='fixed z-20 top-4 text-neutral-600 border border-neutral-500 rounded-full p-3 backdrop-blur-2xl'><p className=''>Maduekwe Christopher</p></div>
            <div className='max-w-180 text-center'>
                <h1 className='text-3xl mb-8 font-bold text-neutral-700 text-balance lg:text-5xl'>Chris Chuka <span> is a fullstack</span> software engineer <span>building</span> cool stuff <span>around the world.</span></h1> 
                <button className='p-2 border border-neutral-800 rounded-lg group'><a href="/images/Maduekwe-Christopher-Chuka-FlowCV.pdf" class="text-neutral-600 font-medium inline-flex group-hover:translate-y-0.5 duration-300">Check Resume</a></button>

                <div className='mt-8 flex justify-center items-center'>
                    <a href='https://github.com/Chrischuka13' target='_blank'><Github className='hover:cursor-pointer'/></a>
                </div>
            </div>
             
        </section>
    </main>
  )
}

export default Hero