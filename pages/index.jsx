import ArticlesCard from '@/components/articlesCard'
import ArticlesItem from '@/components/articlesItem'
import Header from '@/components/header/index'
import Advert from './index/advert'
import CarouselBanner from './index/carouselBanner'

export default function Index() {
  const title = (
    <>
      <i
        style={{ color: '#3e8bf8', marginRight: '10px' }}
        className="iconfont icon-jianzhu"
      ></i>
      <h3 style={{ display: 'inline-block' }}>推荐文章</h3>
    </>
  )
  return (
    <>
      <Header></Header>
      <div
        style={{ width: '1200px', margin: '0 auto' }}
        className="index-container"
      >
        <div>
          <img className="banner" src="imgs/headerBg2.png" alt="" />
        </div>
        <div className="carousel-banner">
          <CarouselBanner />
        </div>
        <div className="main">
          <div className="article-card">
            <ArticlesCard title={title}>
              <ArticlesItem style={{ padding: '20px', marginBottom: '10px' }} />
              <ArticlesItem style={{ padding: '20px', marginBottom: '10px' }} />
              <ArticlesItem style={{ padding: '20px', marginBottom: '10px' }} />
            </ArticlesCard>
          </div>
          <div className="other-info">
            <div className="advert">
              <Advert />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .index-container {
        }
        .banner {
          width: 100vw;
          height: 200px;
          position: absolute;
          left: 0;
          top: 0;
        }
        .carousel-banner {
          padding-top: 184px;
        }
        .main {
          display: flex;
          margin-top: 40px;
        }
        .article-card {
          margin-right: 20px;
          width: 900px;
        }
        .other-info {
          overflow: hidden;
          flex: 1;
        }
        .advert {
          width: 100%;
          height: 338px;
        }
      `}</style>
    </>
  )
}
