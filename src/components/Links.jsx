import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
    const app = [
        {image: "/images/auth_l.png", name: "User Auth App", desc: "A user authentication and verification app designed basically for security first purposes", link: "https://user-authentication-app-phi.vercel.app/"},
        {image: "/images/dz_l.png", name: "Dessertz", desc: "Your home for various kinds of dessert after meal you can order  ", link: "https://dessert-cart-two.vercel.app/"},
        {image: "/images/hr_l.png", name: "Hillcrest Realty", desc: "Your clear guidance for buying and selling homes.", link: "https://hillcrest-xgu2.vercel.app/"},
        {image: "/images/c_l.png", name: "Corebuild", desc: "Designed to elevate how firms showcase their work, communicate their values, and build trust with clients.", link: "https://corebuild-x.vercel.app/"},
        {image: "/images/mg_l.png", name: "Manage", desc: "Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.", link: "https://manage-landing-page-weld-nine.vercel.app/"},
        {image: "/images/cb_l.png", name: "CoBuilders", desc: "Professional Cleaning Services for Homes, Businesses, and Government Facilities Nationwide", link: "https://cobuilders-fe.vercel.app"}
    ]

  return (
    <main className='bg-neutral-200'>
        <section className='w-10/12 container mx-auto py-16'>
            <p className='text-neutral-500'>PROJECTS</p>
            <h3 className='text-3xl font-bold text-neutral-800 mb-8'>Some cool projects I've built.</h3>

            <div className='md:grid grid-cols-3 gap-5'>
                {app.map((webapp, i)=>(
                <div key={i} className='bg-neutral-100 group relative rounded-2xl p-8 overflow-hidden transition duration-300 hover:shadow-xl mb-4'>
                    <img src={webapp.image} alt="" className='w-12 rounded-4xl mb-2'/>
                    <p className='text-2xl font-semibold mb-2'>{webapp.name}</p>
                    <p className='text-neutral-500 mb-4'>{webapp.desc}</p>
                    <a href={`${webapp.link}`} target="_blank" className='opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-600'><p className="text-neutral-600 font-medium inline-flex items-center gap-2">View Project →</p></a>

                    
                    
                </div>
            ))}
            </div>
        </section>
    </main>
  )
}

export default Links