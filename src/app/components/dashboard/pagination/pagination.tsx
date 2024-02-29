"use client"

import { ITEM_PER_PAGE } from '@/app/lib/config'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import styles from './pagination.module.css'

type Props = {
    count: number
}

const Pagination = ({ count }: Props) => {
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const { replace } = useRouter()

    const page = searchParams?.get('page') || "1"

    const params = new URLSearchParams(searchParams)

    const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0
    const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count

    const handlePagination = (type: string) => {
        type === 'prev' ? params.set("page", (parseInt(page) - 1).toString()) : params.set("page", (parseInt(page) + 1).toString())
        replace(`${pathName}?${params}`)
    }

    return (
        <div className={styles.container} >
            <button className={styles.button} disabled={!hasPrev} onClick={() => handlePagination('prev')}>Previous</button>
            <button className={styles.button} onClick={() => handlePagination('next')} disabled={!hasNext}>Next</button>
        </div >
    )
}

export default Pagination