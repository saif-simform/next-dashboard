"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { MdSearch } from 'react-icons/md'
import { useDebouncedCallback } from 'use-debounce'
import styles from './search.module.css'

type Props = {
    placeholder: string
}

const Search = ({ placeholder }: Props) => {
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const { replace } = useRouter();


    const handleSearch = useDebouncedCallback((e: { target: { value: string } }) => {
        const params = new URLSearchParams(searchParams)
        const targetInstance = e.target.value

        params.set('page', "1")

        if (targetInstance) {
            targetInstance.length > 2 && params.set('query', targetInstance)
        } else {
            params.delete('query')
        }

        replace(`${pathName}?${params}`)
    }, 300)


    return (
        <div className={styles.container} >
            <MdSearch />
            <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch} />
        </div>
    )
}

export default Search