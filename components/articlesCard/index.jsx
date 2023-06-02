export default function ArticlesCard(options) {
  console.log(options)
  return (
    <>
      <div className="card-header">
        {options.title}
      </div>
      <div className="card-content">
        {options.children}
      </div>
      <style jsx>{`
        .card-header {
          padding: 24px;
          background: #fff;
          border-bottom: 1px solid #f0f0f0;
          border-radius: 8px 8px 0 0;
        }
        .card-content{
          background: #fff;
          height:100x;
        }
      `}</style>
    </>
  )
}
