import { React, Fragment } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import
{
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { NavLink, Link } from 'react-router-dom'

import Paper from '@mui/material/Paper';




function classNames(...classes)
{
    return classes.filter(Boolean).join(' ')
}



function Header()
{
    return (
        <>
            <Paper elevation={3}>
                <header className="bg-white">
                    <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <Link to="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">BITA Solutions</span>
                                <img className="h-8 w-auto" src="../../bitalogo.png" alt="" />
                            </Link>
                        </div>
                        <Popover.Group className="hidden lg:flex lg:gap-x-12">
                            <NavLink to="/" className={({ isActive }) => `Popover.Group>"text-sm font-semibold leading-6 ${isActive ? "text-red-900" : "text-gray-900"} `}>
                                Home
                            </NavLink>
                            <NavLink to="/register" className={({ isActive }) => `Popover.Group>"text-sm font-semibold leading-6 ${isActive ? "text-orange-900" : "text-gray-900"} `}>
                                Register
                            </NavLink>
                            <NavLink to="/" className={({ isActive }) => `Popover.Group>"text-sm font-semibold leading-6 ${isActive ? "text-orange-900" : "text-gray-900"} `}>
                                Services
                            </NavLink>
                            <NavLink to="/about" className={({ isActive }) => `Popover.Group>"text-sm font-semibold leading-6 ${isActive ? "text-orange-900" : "text-gray-900"} `}>
                                About Us
                            </NavLink>
                            <NavLink to="/" className={({ isActive }) => `Popover.Group>"text-sm font-semibold leading-6 ${isActive ? "text-orange-900" : "text-gray-900"} `}>
                                Contact Us
                            </NavLink>
                        </Popover.Group>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <Link to="/"
                                className="text-sm font-semibold leading-6 text-gray-900">
                                Log in <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </nav>
                </header>
            </Paper>
        </>


    )
}

export default Header