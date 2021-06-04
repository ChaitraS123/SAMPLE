import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { IoIosPaper } from 'react-icons/io'
import { FaCartPlus } from 'react-icons/fa'

export const SidebarData = [

    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
        cName: 'nav-text'

    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIosPaper />,
        cName: 'nav-text'

    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaCartPlus />,
        cName: 'nav-text'

    },


]