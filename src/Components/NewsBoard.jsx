import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=nz&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        let req = new Request(url);

        fetch(req).then(response => response.json()).then(data => setArticles(data.articles));
    }, [category, setArticles]);

    return (
        <div>
            <h2>Latest <span>News</span></h2>
            {articles.map((news, index) => {
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            })}
        </div>

    )
}

NewsBoard.propTypes = {
    category: PropTypes.string.isRequired
}

export default NewsBoard