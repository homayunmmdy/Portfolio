
import PageDescription from '@/components/PageDescription'
import PageTitle from '@/components/PageTitle'
import React from 'react'

const Contacts = () => {
    return (
        <div>
            <PageTitle titr="Contacts" title="Get In Touch" />
            <div className='px-5 w-[98%] md:w-[92%] mx-auto'>
                <PageDescription title="Let's take your business to the next level." description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eos quas blanditiis, quos sint nostrum fugit aperiam inventore optio itaque molestias corporis, ipsa tenetur eligendi nihil iste porro, natus culpa consequuntur? Maxime, corporis tempore. Sed tenetur veritatis velit recusandae eum, molestiae voluptate ducimus laudantium esse illo doloribus atque eligendi deleniti iusto." />
            </div>
        </div>
    )
}

export default Contacts