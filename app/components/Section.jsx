import React from 'react'
import Link from 'next/link'

const Section = ({ sec }) => {
    return (
        <section className="mb-4">
            <div className='flex items-center gap-2'>
                <span className="text-yellow-600 text-2xl pr-1" >{sec.id}.</span>
                {sec.link ? <Link href={sec.link}><h1 className="text-2xl font-light  sm:text-4xl hover:text-yellow-600">{sec.title}</h1></Link> :
                    <h1 className="text-2xl font-light  sm:text-4xl hover:text-yellow-600">{sec.title}</h1>}
            </div>
            <p className='font-light md:font-base md:text-xl my-2'>
                {sec.description}
            </p>
            <ul className="list-disc py-4 pl-6">
                {sec.items?.map((item, index) => (
                    <li key={index} className=' md:font-base md:text-xl'>
                        {item} <hr className='border-b-1 border-gray-300 my-2 ' />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Section