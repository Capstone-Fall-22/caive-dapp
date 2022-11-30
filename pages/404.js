import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from '../styles/404.module.css'

const NotFound = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => { router.push("/") }, 5000)

    }, [])
    return (
        <div className={styles['not-found']}>
            <h1>Ooooops.....</h1>
            <h2>That page cannot be found.</h2>
            <p>redirecting to home in {5}</p>
            <p className={styles.HomeLink}><Link href="/">Homepage</Link></p>
        </div>
    )
}

export default NotFound
