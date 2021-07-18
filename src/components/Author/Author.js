/* eslint-disable jsx-a11y/alt-text */
import './Author.scss';

const Author = (props) => {
    return(
        <div class="article-author">
            {
                props.author.author_img?
                <div class="article-author-img">
				    <img src={props.author.author_img} />
			    </div>
                :
                null
            }
			<div class="article-author-info">
				<dl>
                    {
                        props.author.article_author?
                        <dt>{props.author.article_author}</dt>
                        :
                        null
                    }
                    {
                        props.author.article_desc?
                        <dd>{props.author.article_desc}</dd>
                        :
                        null
                    }		
				</dl>
			</div>
		</div>
    );
}

export default Author;