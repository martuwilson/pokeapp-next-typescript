import Head from 'next/head'
import { FC, ReactNode } from 'react';
import Navbar from '../ui/Navbar';

interface Props {
        title?: string;
        children: ReactNode;
}


const origin = (typeof window === 'undefined') ? '' : window.location.origin;


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

                        {/* grpah meta tags -- importante para seo*/}
                        <meta property="og:title" content={`Informacion sobre ${title}`} />
                        <meta property="og:description" content={`Esta es la página con los datos sobre ${title}`} />
                        <meta property="og:image" content={`${origin}/_next/image?url=%2Fimg%2Fbanner.png&w=256&q=75`} />
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

