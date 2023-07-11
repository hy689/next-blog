import React from 'react'
import Markdown from './components/markdown'

const markdown = `### 标题`
export default function Article() {
  return (
    <>
      <Markdown markdown={markdown} />
    </>
  )
}
