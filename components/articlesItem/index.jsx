import { Divider, Space, Tag } from 'antd'
export default function ArticlesItem(options) {
  return (
    <>
      <div style={options.style} className="articles-item">
        <div className="cover">
          <img src="/imgs/adv.png" alt="" />
        </div>
        <div className="info">
          <div className="title">
            <span>分类</span>
            <h4>这里是标题</h4>
          </div>
          <div className="tags">
            <Tag color="blue">blue</Tag>
            <Tag color="blue">blue</Tag>
            <Tag color="blue">blue</Tag>
          </div>
          <div className="description ant-typography ant-typography-ellipsis ant-typography-ellipsis-multiple-line css-1a94xbs">
            <p>这里是文章的描述，字数多。固定高度，超出省略号 多行文本</p>
          </div>
          <div className="data">
            <span>2022-09-01 07:12 |</span>
            <span>
              <i className="iconfont icon-shuju"></i>200 
            </span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .articles-item {
          display: flex;
          align-items: center;
        }
        .cover {
          height: 165px;
          width: 260px;
          overflow: hidden;
          margin-right: 30px;
        }
        .cover img {
          height: 100%;
          width: 100%;
        }
        .info {
          height: 100%;
        }
        .title {
          display: flex;
          margin-bottom: 15px;
        }
        .title span {
          font-size: 12px;
          border-radius: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 34px;
          color: #fff;
          height: 21px;
          margin-right: 10px;
          vertical-align: text-bottom;
          font-weight: 400;
          background-image: var(--g-primary-image);
        }
        .title h4 {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
            'Noto Color Emoji';
          font-size: 14px;
          box-sizing: border-box;
        }
        .tags{
          margin-bottom: 15px;
        }
        .description{
          color: var(--text-color-light);
          font-size: 14px;
          margin-bottom: 10px;
          height:44px
        }
        .data{
          color: var(--text-color-light);
          font-size: 14px;
        }
        .articles-item:hover {
          background: #f4f7fa;
        }
        .articles-item:hover .cover img {
          transition: all 0.5s;
          transform: scale(1.1);
        }
      `}</style>
    </>
  )
}
