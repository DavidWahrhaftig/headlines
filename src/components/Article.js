import React from 'react'

const Article = (props) => {
    const {article, num} = props;
    return (
        <div className="card my-4">
            
            <div className="card-body">
                <h5 className="card-text">{num}</h5>
                <h4 className="card-title">{article.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted mt-2">{article.source.name}</h6>
                {/* <p className="card-text"></p> */}
                <a href={article.url}  target="_blank" rel="noopener noreferrer" className="card-link">Article Link</a>
            </div>
        </div>
    );
}

export default Article;
