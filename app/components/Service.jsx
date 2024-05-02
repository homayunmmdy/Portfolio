import React from 'react'
import Link from 'next/link'

const Service = ({ number, title, desc, items }) => {
    return (
        <section className="mb-4">
            <div className='flex items-center gap-2'>
                <span className="text-yellow-600 text-2xl pr-1" >{number}.</span>
                <h1 className="text-2xl font-light  sm:text-4xl ">{title}</h1>
            </div>
            <p className='font-light md:font-base md:text-xl my-2'>
                {desc}
            </p>
            <ul class="list-disc py-4 pl-6">
                {items?.map((item, index) => (
                    <li key={index} className=' md:font-base md:text-xl'>
                        {item} <hr className='border-b-1 border-gray-300 my-2 ' />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Service