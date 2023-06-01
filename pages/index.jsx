import Header from '@/components/header/index'
import CarouselBanner from './index/carouselBanner'

export default function Index() {
  return (
    <>
      <div className="index-container">
        <div className="header">
          <Header></Header>
        </div>
        <div>
          <img className="banner" src="imgs/headerBg2.png" alt="" />
        </div>
        <div className="carousel-banner">
          <CarouselBanner />
        </div>
      </div>

      <style jsx>{`
        .index-container {
        }
        .header {
          position: sticky;
          top: 0;
          z-index: 999;
          width: 100%;
        }
        .banner {
          width: 100vw;
          height: 200px;
          position: absolute;
          left: 0;
          top: 0;
        }
        .carousel-banner{
          padding-top:184px

        }
      `}</style>
    </>
  )
}
