import Link from 'next/link'

interface slideData {
  id: number,
  title: string,
  subtitle: string,
  imageUrl: string
}

export const CarouselSlide = ({id, title, subtitle, imageUrl} : slideData) => {
  return (
    <div className='bg-teal-800 w-100 bg-cover inset-0 bg-center bg-no-repeat h-auto md:h-96 rounded-xl' style={{backgroundImage: `url('${imageUrl}')`}}>
      <Link href='/' className='absolute cursor-pointer inset-0 bg-black dark:border-gray-800 dark:border-2 bg-opacity-60 rounded-xl'>
        <div className='content absolute bottom-3 text-white p-10 flex flex-col gap-4 w-10/12'>
          <p className='text-base xl:text-xl text-gray-300'>Destacado</p>
          <h2 className='text-3xl xl:text-4xl font-bold'>{title}</h2>
          <p className='text-base xl:text-xl font-normal'>{subtitle}</p>
        </div>
      </Link>
    </div>
  )
}