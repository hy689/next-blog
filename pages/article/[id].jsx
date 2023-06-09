import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Markdown from '../../components/article/markdown'
import Header from '../header/index'

import { apiArticleDetail } from '@/api/articles'
import handleError from '@/utils/handleError'

export default function Article(a) {
  const router = useRouter()
  
  const [article,setArticle] = useState({content:''})

  useEffect(() => {
    articleDetail()
  }, [])

  const articleDetail = async () => {
    const id = router.query.id
    const [err, r] = await apiArticleDetail({id})

    if (err) {
      handleError(err)
      return
    }

    setArticle(r.data)

  }

  return (
    <>
      <Header
        styles={{
          background: '#fff',
          boxShadow: '0 1px 4px rgba(89,90,89,.28)',
        }}
      ></Header>
      <div>

      </div>
      <Markdown markdown={article.content} />
    </>
  )
}
