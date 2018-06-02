import React from 'react';

import Form from './Form';
import ItemList from './ItemList';

class App extends React.Component {

    state = {
        articles : []
    };

    addArticle = (article) => {

        let oldArticles = this.state.articles;
        // console.log(oldArticles);
        //creation d'une clé unique pour le state article
        article.id = Date.now();
        //push es6 plus simple
        let newArticles = [...oldArticles, article];
        //changement du state apres avoir fait toutes les modifications
        this.setState({ articles: newArticles })
    }

    render(){
        return (
            <div>
                <h3>Liste de courses !</h3>
                <Form fromTitle="Ajouter un article"  addArticle={this.addArticle}/>
                <ItemList articles = {this.state.articles} />
            </div>
        );
    }
}

export default App; 