import {FC} from 'react'
import {Spacer,Link} from "@nextui-org/react";
import Image from 'next/image';
import NextLink from "next/link";

const Navbar:FC = () => {

  const random = Math.floor(Math.random() * (150 - 1)) + 1;
    

  return (
    <div
    style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: '#1f1f1f',
    }}
    >
        <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${random}.png`}
        alt='icon app'
        width={70}
        height={70}
        />

        <Link href='/' as={NextLink}>
          <h2 style={{ color: 'white', fontSize: '2rem' }}>P</h2>
          <h3 style={{ color: 'white', fontSize: '1.5rem' }}>okemon</h3>
        </Link>
        
        

        <Spacer className="flex-1"/>
        <Link href='/favorites' as={NextLink}> 
          <p style={{ color: 'white', fontSize: '1rem' }}>Favoritos</p>
        </Link>

        
    </div>
  )
}

export default Navbar