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
                  detail.content.map((item) => (
                     item.startsWith("http") ? <img src={item} alt="image" className="content-image"/> : <p >{item}</p>
                  ))
               }
            </div>
        </div>
    )
}