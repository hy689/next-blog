// import styles from './header.module.css'
import { useEffect } from 'react'
import { Button, ColorPicker, Input } from 'antd'
const { Search } = Input

export default function Header(options) {

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
              <span className="category-item">
                <i
                  className="iconfont icon-aiqing"
                  style={{ color: '#3e8bf8' }}
                ></i>
                <span>前端</span>
              </span>
              <span className="category-item">
                <i
                  className="iconfont icon-tongqian"
                  style={{ color: '#a5adf6' }}
                ></i>
                <span>go语言</span>
              </span>
              <span className="category-item">
                <i
                  className="iconfont icon-chushi"
                  style={{ color: '#ffd05c' }}
                ></i>
                <span>开发经验</span>
              </span>
            </div>
            {/* 登录按钮 */}
            <div className="login">登录</div>
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
