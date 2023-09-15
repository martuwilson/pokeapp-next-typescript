import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@nextui-org/react'
import {Layout} from '../components/layouts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Layout title='Listado de Pokemons'>
      <h1>
        holis como va
      </h1>
      <Button color='primary' variant='faded'>
        asfgds
      </Button>
    </Layout>
    </>
  )
}
