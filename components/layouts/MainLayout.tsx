import Head from 'next/head'
import { FC, ReactNode } from 'react';

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
                {/* navbar */}
                <main>
                        {children}
                </main>
        </>
    )
}

