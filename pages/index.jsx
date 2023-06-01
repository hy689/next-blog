import Header from '@/components/header/index'
export default function Index() {
  return (
    <>
      <div className="index-container">
        <Header></Header>
        <img className="banner" src="imgs/headerBg2.png" alt="" />
      </div>
     
      <style jsx>{`
        .index-container {
        }
        .banner {
          width: 100%;
          height: 200px;
          position: absolute;
          top: 0;
          left: 0;
        }
      `}</style>
    </>
  )
}
