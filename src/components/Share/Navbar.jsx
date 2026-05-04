import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between h-15 shadow items-center'>
            <Link href={'/'} className='text-2xl font-bold'>Logo</Link>
            <div className="flex gap-5 ">
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>Home</Link>
            </div>
            <div className="">
                
            </div>
        </div>
    );
};

export default Navbar;