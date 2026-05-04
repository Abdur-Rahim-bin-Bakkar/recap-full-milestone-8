"use client";
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React from 'react';
import { Check, Power } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const path = usePathname()
    return (
        <div className='flex justify-between h-15 shadow items-center'>
            <Link href={'/'} className='text-2xl font-bold'>Logo</Link>
            <div className="flex gap-5 text-red-400">
                <Link className={`${path === '/' && 'border-b  border-red-500'} `} href={'/'}>Home</Link>
                <Link className={`${path === '/books' && 'border-b  border-red-500'} `} href={'/books'}>Books</Link>
                <Link className={`${path === '/server' && 'border-b  border-red-500'} `} href={'/server'}>Server</Link>
                <Link className={`${path === '/developer' && 'border-b  border-red-500'} `} href={'/developer'}>Developers</Link>
            </div>
            <div className="">
                <button >
                    <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")} >
                        {({ isSelected }) => (
                            <>
                                <Switch.Control
                                    className={`h-[31px] w-[51px] bg-blue-500 ${isSelected ? "bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]" : ""}`}
                                >
                                    <Switch.Thumb
                                        className={`size-[27px] bg-white shadow-sm ${isSelected ? "ms-[22px] shadow-lg" : ""}`}
                                    >
                                        <Switch.Icon>
                                            {isSelected ? (
                                                <Check className="size-4 text-cyan-600" />
                                            ) : (
                                                <Power className="size-4 text-blue-600" />
                                            )}
                                        </Switch.Icon>
                                    </Switch.Thumb>
                                </Switch.Control>
                            </>
                        )}
                    </Switch>
                </button>
            </div>
        </div>
    );
};

export default Navbar;