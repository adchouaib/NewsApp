import './Latest.scss';
import {Data} from '../../Data/Article';
import Article from '../Article/Article';

const Latest = (props) => {
    const Column = Data.map((article)=>{
        return(
            <div className="magazine-column">
                <Article articles={article.column}/>
            </div>
        );
    })
    return(
        <main className="responsive-wrapper">
            <div className="page-title">
                <h1>
                    Latest Updates
                </h1>
            </div>
            <div className="magazine-layout">
                {Column}
            </div>
            
        </main>
    );
}

export default Latest;