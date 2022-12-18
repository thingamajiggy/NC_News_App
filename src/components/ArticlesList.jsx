import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArticleSort } from './ArticleSort';

export const ArticlesList = ({ articlesLists, setArticlesLists }) => {
    const [sort, setSort] = useState("Date");

    useEffect(() => {
        axios.get(`/articles?sort=${sort}`)
        .then((res) => {
            return setArticlesLists(res.data.result);
        })
    }, [setArticlesLists, sort])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xs-12 col-sm-12 col-lg-9">
                    <div className='container my-5'>
                    <div className='row'>
                        <div className='col-xs-12'>
                            <div className="d-flex justify-space-between">
                                <h2 className='mr-auto'>
                                    Headline
                                </h2>
                                <div>
                                    <ArticleSort handleChange={setSort} sortValue={sort} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                
                    {articlesLists.map((articleList) => {
                        return (
                        <div key={articleList.article_id} className="col-xs-12 col-sm-6">
                        <div className="card">
                        <div className="card-body">
                        <div className="card-title">
                                <Link to={`/articles/${articleList.article_id}`}>{articleList.title}</Link>
                        </div>
                        </div>
                        </div>
                        </div>
                        )
                    })}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )

}

    export default ArticlesList;

