import Head from 'next/head'
import { FC, ReactNode } from 'react';
import Navbar from '../ui/Navbar';

interface Props {
        title?: string;
}

export const Layout: FC<Props> = ({ children, title}) => {
    return (
        <>
                <Head>
                        <title>
                                {title || 'PokeApp'}
                        </title>
                        <meta name="author" content="MartuWilson" />
                        <meta name="description" content={`Información sobre el pokemon ${title}`} />
                        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
                </Head>
                <Navbar/>
                <main style={{
                    padding: '0px 20px',
                }}>
                        {children}
                </main>
        </>
    )
}

