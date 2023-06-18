// import styles from './header.module.css'
import { useEffect,useState } from 'react'
import { apiCategoryGetAll } from '@/api/articles'
import {  Input } from 'antd'
import handleError from '@/utils/handleError'
const { Search } = Input

export default function Header() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
  },[])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 200) {
        document.querySelector('.header').classList.add('active')
      } else {
        document.querySelector('.header').classList.remove('active')
      }
    })

    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  const getCategories = async () => {
    const [err,r ] = await apiCategoryGetAll()
    if(err){
      handleError(err)
      return
    }
    setCategories(r.data)
  }

  const login = ()=>{
    handleError({message:'不好意思哦，暂未开放登录~'})
  }

  return (
    <>
      <div className="header">
        <div
          style={{
            width: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height:'100%'
          }}
        >
          <div className="logo">
            <img src="/imgs/logo.png" alt="" />
          </div>
          <div className="nav">
            {/* 搜索框 */}
            <div className="search">
              <Search placeholder="搜点啥" />
            </div>
            {/* 换色 */}
            {/* <ColorPicker /> */}
            {/* 分类 */}
            <div className="category">
              {
                categories.map(category=>(
                  <span className="category-item">
                  <i
                    className={`iconfont ${category.icon}`}
                    style={{ color: category.iconColor }}
                  ></i>
                  <span>{category.name}</span>
                </span>
                ))
              }
             
            </div>
            {/* 登录按钮 */}
            <div className="login" onClick={login}>登录</div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .header {
            height: 46px;
            position: sticky;
            top: 200px;
            z-index: 99999;
            top: 0;
          }
          .logo {
            width: 36px;
            height: 36px;
          }
          .logo img {
            width: 100%;
            height: 100%;
          }
          .category {
            color: #fff;
            display: flex;
            align-items: center;
          }
          .category-item {
            padding: 0 20px;
            display: inline-block;
            text-align: center;
            cursor: pointer;
          }
          .iconfont {
            margin-right: 6px;
          }
          .search {
            margin-right: 10px;
          }
          .nav {
            display: flex;
            align-items: center;
            height: 100%;
          }
          :global(.login.ant-btn) {
            height: 100%;
          }
          .login {
            width: 80px;
            border-radius: 20px;
            height: 36px;
            background-image: var(--g-primary-image);
            color: #fff;
            line-height: 36px;
            text-align: center;
            cursor: pointer;
          }
          .active{
            background: #fff !important;
            transition: all;
            box-shadow: 0 1px 4px rgba(89,90,89,.28);
          }
          .active .category{
            color: var(--text-color-deep) !important;
          }
        `}
      </style>
    </>
  )
}
