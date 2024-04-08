// import React,{Component} from "react";
import React from "react";



// export class NewsItem extends Component {
//   render() {
 const NewsItem  = (props) => {
    
  
    let {title,description,urlToImage,newsUrl,author,date,source} = props; //this.props;
    return (
      <div>
        <div className="card"><div style={{display:"flex", justifyContent: "flex-end", position: "absolute",right: "0", top: "",}}>
        <span className="badge rounded-pill bg-danger" style={{left: "90%",zIndex:"1"}}>
               {source}</span></div>
          <img src={!urlToImage?"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg":urlToImage}className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknow":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-dark">
             Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}
// }
export default NewsItem;
