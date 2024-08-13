import React from 'react'
import Link from "next/link";

const WorkBtn = () => {
    return (
        <>
            <button className="btn bg-[#f2ad00] btn-warning w-full">
                <Link href="/contacts" className="font-bold text-xl">
                    Let us Work Together
                </Link>
            </button>
        </>
    )
}

export default WorkBtn