import React from 'react'
import Article from './Article'

const Articles = (props) => {

    const articles = props.articles.map((article, index) => {
        const articleNum = (props.page - 1) * 10 + (index + 1);
        return <Article key={article.url} article={article} num={articleNum}/>
    })
    
    return articles;
}

export default Articles;
