import PropTypes from "prop-types";
import image from "../assets/default.jpg"

const NewsItem = ({title, description, src, url}) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
            <img src={src?src:image} style={{height:"200px", width:"360px"}} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0,50)}</h5>
                <p className="card-text">{description?description.slice(0,90):"Latest news"}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

NewsItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default NewsItem