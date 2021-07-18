/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './Article.scss';
import Author from '../Author/Author';

const Article = (props) => {
    
        const Articles = props.articles.map((article)=>{
        var words = article.article_title.split(" ");
        var keywords = article.keyword ? article.keyword : [] ;
        return(
            <article className="article">
                {
                    article.headline? 
                    <small class="article-category">
                        <span>{article.headline}</span>
                    </small>
                    :
                    null
                }
                {
                    article.article_img? 
                    <figure class="article-img">
                        <img src={article.article_img} />
                    </figure>
                    :
                    null
                }
                {
                    article.article_title ? 
                    <h2 className={"article-title article-title--"+article.type} >
                        <a href="#" class="article-link">
                            {
                                words.map((word)=>{
                                    if(keywords.includes(word)){
                                        switch (article.outline_color) {
                                            case "pink":
                                                return <mark className="mark">{word+" "}</mark>; 
                                            case "blue":
                                                return <mark className="mark--secondary">{word+" "}</mark>
                                            case "yellow":
                                                return <mark className="mark--tertiary">{word+" "}</mark>;    
                                            default:
                                                return <mark className="mark">{word+" "}</mark>;
                                        }
                                    }
                                    return(word+" ");
                                })
                            }
                        </a>
                    </h2>
                    :
                    null
                }
                {
                    article.paragraph ? 
                    <div class="article-excerpt">
                        <p>
                            { article.paragraph }
                        </p>
                    </div>
                    :
                    null
                }
                {
                    article.author ?
                    <Author author={article.author}/>
                    :
                    null
                } 
            </article>
        );
    })
    return(
        <>
            {Articles}
        </>
    );
}

export default Article;