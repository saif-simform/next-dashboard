"use client"

import Link from "next/link"
import styles from './menu.module.css'
import { ReactNode } from "react"
import { usePathname } from "next/navigation"

type Props = {
    item: {
        title: string,
        path: string,
        icon: ReactNode
    }
}

const Menu = ({ item }: Props) => {
    const pathName = usePathname()

    return (
        <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>
            {item.icon}
            {item.title}
        </Link>
    )
}

export default Menu