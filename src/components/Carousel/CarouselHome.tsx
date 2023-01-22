import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css'
import slidePreviewData from '../../json/carouselDataPreview.json'
import { CarouselSlide } from './CarouselSlide'

export const CarouselHome = () => {

  SwiperCore.use([Autoplay])
  return (
    <section className='w-full'>
      <Swiper spaceBetween={20} slidesPerView={1} autoplay={{delay: 3000}}>
        {
          slidePreviewData.map(item => <SwiperSlide key={item.id}>
            <CarouselSlide id={item.id} title={item.title} subtitle={item.subtitle} imageUrl={item.imageURL} />
          </SwiperSlide>)
        }
      </Swiper>
    </section>
  )
}