import {Data} from '../../Data/Article';
import './All.scss';
import Cards from '../Cards/Cards';
const All = () => {
    const Column = Data.map((article)=>{
        return(
            <Cards articles={article.column}/>
        )
    })
    return(
        <>
            <div className="page-title">
                    <h1>
                        All News
                    </h1>
            </div>
            <div className="content">
                {Column}
            </div>
        </>
    );
}

export default All;