export default function NewsDetail({ detail }) {
    return (
        <div className="news-detail">
            <h1>{detail.title}</h1>
            <p className="date">{detail.date}</p>
            <div className="category">
               {
                  detail.categories.map((item, index) => (
                     <span key={index}>{item}</span>
                  ))
               }
            </div>
            <div className="detail-content">
               {
                  detail.content.map((item, index) => (
                     item.startsWith("http") ? (
                         <img key={index} src={item} alt="image" className="content-image" />
                     ) : (
                         <p key={index}>{item}</p>
                     )
                 ))
               }
            </div>
        </div>
    )
}