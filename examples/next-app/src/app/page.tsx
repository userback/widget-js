import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Main from '../components/Main'; // eslint-disable-line import/no-unresolved
import './index.css';

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Image className={styles.logo} src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
                <Main />
            </main>
        </div>
    );
}
