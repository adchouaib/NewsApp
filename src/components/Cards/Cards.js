/* eslint-disable jsx-a11y/anchor-is-valid */
const Cards = (props) => {
    const Articles = props.articles.map((article)=>{
        return(
            <div className="my-8 w-10/12 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:w-10/12">
                <div className="md:flex">
                    {article.article_img? 
                        <div className="md:flex-shrink-0">
                            <img className="h-48 w-full object-cover md:w-48" src={article.article_img} alt="A cat" />
                        </div> 
                        : 
                        null
                    } 
                    <div className="p-8">
                        {
                            article.headline?
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{article.headline}</div>
                            :
                            null
                        }
                        {
                            article.article_title?
                            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{article.article_title}</a>
                            :
                            null
                        }
                        {
                            article.paragraph?
                            <p class="mt-2 text-gray-500">{article.paragraph}</p>
                            :
                            null
                        }
                        
                    </div>
                </div>
            </div>
        );
    });

    return(
        <>
            {Articles}
        </>
    )
}

export default Cards