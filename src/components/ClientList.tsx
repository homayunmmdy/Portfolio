import Image from 'next/image'
import React from 'react'

const ClientList = () => {
  return (
    <div className='flex flex-wrap justify-center'>
        <span className='border-2 border-gray-300 bg-orange-50 hover:bg-orange-200 transition ease-in-out p-12'>
            <Image alt='flash' aria-label='flash 1' width={250} height={80} src="/flash.svg"/>
        </span>
        <span className='border-2 border-gray-300 bg-orange-50 hover:bg-orange-200 transition ease-in-out p-12'>
            <Image alt='flash' aria-label='flash 2' width={250} height={80} src="/flash.svg"/>
        </span>
        <span className='border-2 border-gray-300 bg-orange-50 hover:bg-orange-200 transition ease-in-out p-12'>
            <Image alt='flash' aria-label='flash 3' width={250} height={80} src="/flash.svg"/>
        </span>
        <span className='border-2 border-gray-300 bg-orange-50 hover:bg-orange-200 transition ease-in-out p-12'>
            <Image alt='flash' aria-label='flash 4' width={250} height={80} src="/flash.svg"/>
        </span>
        <span className='border-2 border-gray-300 bg-orange-50 hover:bg-orange-200 transition ease-in-out p-12'>
            <Image alt='flash' aria-label='flash 5' width={250} height={80} src="/flash.svg"/>
        </span>
        <span className='border-2 border-gray-300 bg-orange-50 hover:bg-orange-200 transition ease-in-out p-12'>
            <Image alt='flash' aria-label='flash 6' width={250} height={80} src="/flash.svg"/>
        </span>
        <span className='border-2 border-gray-300 bg-orange-50 hover:bg-orange-200 transition ease-in-out p-12'>
            <Image alt='flash' aria-label='flash 7' width={250} height={80} src="/flash.svg"/>
        </span>
        <span className='border-2 border-gray-300 bg-orange-50 hover:bg-orange-200 transition ease-in-out p-12'>
            <Image alt='flash' aria-label='flash 8' width={250} height={80} src="/flash.svg"/>
        </span>
        <span className='border-2 border-gray-300 bg-orange-50 hover:bg-orange-200 transition ease-in-out p-12'>
            <Image alt='flash' aria-label='flash 9' width={250} height={80} src="/flash.svg"/>
        </span>
        <span className='border-2 border-gray-300 bg-orange-50 hover:bg-orange-200 transition ease-in-out p-12'>
            <Image alt='flash' aria-label='flash 10' width={250} height={80} src="/flash.svg"/>
        </span>
    </div>
  )
}

export default ClientList