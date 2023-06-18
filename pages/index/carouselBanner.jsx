import { Carousel } from 'antd'
const contentStyle = {
  height: '400px',
  background: '#364d79',
}
export default function CarouselBanner(options) {

  return (
    <>
      <div className="carousel-banner">
        <div>
          <Carousel autoplay style={{width:"830px"}} >
            <div  style={contentStyle}>
              <img src="/imgs/carousel.png" alt="" />
            </div>
            <div  style={contentStyle}>
              <img src="/imgs/carousel2.png" alt="" />
            </div>
          </Carousel>
        </div>
        <div className="hot">
          <div className="hot-item">
            <img src="/imgs/right1.png" alt="" />
            <p>最新疫情数据</p>
          </div>
          <div className="hot-item">
            <img src="/imgs/right2.png" alt="" />
            <p>调整作息早睡早起</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .carousel-banner {
          height: 400px;
          display: flex;
          justify-content: space-between;
        }
        .hot {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: end;
        }
        .hot-item {
          height: 193px;
          position: relative;
        }
        .hot p {
          color: #fff;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.2);
          box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.2);
          line-height: 2;
          font-size: 14px;
          padding: 0 10px;
          font-weight: 700;
          z-index: 998;
        }
        .hot img {
          height: 180px;
          width: 350px;
        }
      `}</style>
    </>
  )
}
