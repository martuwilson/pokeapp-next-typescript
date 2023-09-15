import {FC} from 'react'
import {Spacer} from "@nextui-org/react";
import Image from 'next/image';


const Navbar:FC = () => {

   
    

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
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt='icon app'
        width={70}
        height={70}
        />

        <h2 style={{ color: 'white', fontSize: '2rem' }}>P</h2>
        <h3 style={{ color: 'white', fontSize: '1.5rem' }}>okemon</h3>
        
        <Spacer className="flex-1"/>

        <p style={{ color: 'white', fontSize: '1rem' }}>Favoritos</p>
    </div>
  )
}

export default Navbar