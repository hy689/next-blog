// import styles from './header.module.css'
import { Button, ColorPicker, Input } from 'antd'
const { Search } = Input

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">logo</div>
        <div className="nav">
          {/* 搜索框 */}
          <div className="search">
            <Search placeholder="input search text" />
          </div>
          {/* 换色 */}
          <ColorPicker />
          {/* 分类 */}
          <div className="category">
            <span className="category-item">
              <i className="iconfont icon-jianshen"></i>
              <span>前端</span>
            </span>
            <span className="category-item">
              <i className="iconfont icon-jianshen"></i>
              <span>前端</span>
            </span>
            <span className="category-item">
              <i className="iconfont icon-jianshen"></i>
              <span>前端</span>
            </span>
          </div>
          {/* 登录按钮 */}
          <Button className="login">登录</Button>
        </div>
      </div>
      <style jsx>
        {`
          .header {
            height: 46px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 200px;
            z-index: 999;
          }
          .category {
            min-width: 240px;
          }
          .category-item {
            width: 80px;
            display: inline-block;
            text-align: center;
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
        `}
      </style>
    </>
  )
}
