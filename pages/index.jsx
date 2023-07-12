import React, { useState, useEffect } from 'react'

import ArticlesCard from '@/components/articlesCard'
import ArticlesItem from '@/components/articlesItem'
import Header from '@/pages/header/index'
import Advert from './index/advert'
import CarouselBanner from './index/carouselBanner'
import { apiArticleGetAll } from '@/api/articles'
import handleError from '@/utils/handleError'
import { useRouter } from 'next/router'

export default function Index() {
  const [articles, setArticles] = useState([])
  const router = useRouter()

  useEffect(() => {
    getArticles()
  }, [])

  useEffect(() => {
    console.log(document.querySelector('.header'),"document.querySelector('.header')")
    document.querySelector('.header')?.classList.add('active')
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 200) {
        document.querySelector('.header')?.classList.remove('active')
      }else{
        document.querySelector('.header')?.classList.add('active')
      }
    })

    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  const getArticles = async () => {
    const [err, r] = await apiArticleGetAll()
    if (err) {
      handleError(err)
      return
    }
    setArticles(r.data)
  }

  const goDetail = (id) => {
    router.push(`/article/${id}`)
  }

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
              {articles.map((article) => (
                <ArticlesItem
                  key={article.id}
                  article={article}
                  style={{ padding: '20px', marginBottom: '10px' }}
                  goDetail={goDetail}
                />
              ))}
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
        .active {
          background: none !important;
          transition: all;
          box-shadow: none!important;
        }
        .active .category {
          color: #fff !important;
        }
      `}</style>
    </>
  )
}
