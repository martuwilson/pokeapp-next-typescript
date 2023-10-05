import Image from 'next/image'


export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-100px)] items-center self-center">
        <h1 className="text-2xl mt-10">No hay Favoritos</h1>
        <Image
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg'
          width={250}
          height={250}
          alt={'no favorites'}
          className='mt-5'
        />
      </div>
  )
}

