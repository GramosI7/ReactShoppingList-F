import React from "react";
import Article from "./Article";


const ItemList = (props) => {
    return(
        <div>
            <h3>Votre liste de courses</h3>
            <div>
                {
                    props.articles.map(article => <Article key={article.id} data={article} editArticle={props.editArticle}/> )
                }        
            </div>
        </div>
    );
};

export default ItemList;