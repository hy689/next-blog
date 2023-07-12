import React from 'react'
import Markdown from './components/markdown'
import Header from '../header/index'
const markdown = `### 标题`
export default function Article() {
  return (
    <>
      <Header
        styles={{
          background: '#fff',
          boxShadow: '0 1px 4px rgba(89,90,89,.28)',
        }}
      ></Header>
      <Markdown markdown={markdown} />
    </>
  )
}
