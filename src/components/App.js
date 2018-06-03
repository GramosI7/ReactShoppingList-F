import React from 'react';

import Form from './Form';
import ItemList from './ItemList';
import { connect } from 'react-redux';

class App extends React.Component {

    state = {
        articles : []
    };

    // addArticle = (article) => {

    //     let oldArticles = this.state.articles;
    //     // console.log(oldArticles);
    //     //creation d'une clé unique pour le state article
    //     article.id = Date.now();
    //     //push es6 plus simple
    //     let newArticles = [...oldArticles, article];
    //     //changement du state apres avoir fait toutes les modifications
    //     this.setState({ articles: newArticles })
    // }

    // addArticle = (article) => {
    //     // this.props.dispatch({type: "ADD_ARTICLE", payload: article});
    //     this.props.addArticle(article);
    // }

    render(){
        return (
            <div>
                <h3>Liste de courses !</h3>
                <Form fromTitle="Ajouter un article"  addArticle={this.props.addArticle}/>
                <ItemList articles = {this.props.articles} editArticle={this.props.editArticle}/>
            </div>
        );
    }
}

const addArticleActionCreator = (article) => {
    return {
        type: "ADD_ARTICLE",
        payload: article
    }
};

const editArticleActionCreator = (article) => {
    return {
        type: "EDIT_ARTICLE",
        payload: article
    }
}

const mapStateToProps = (state) => {
    return {
        articles : state.articles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addArticle: (article) => {
            dispatch(addArticleActionCreator(article));
        },
        editArticle : (article) => {
            dispatch(editArticleActionCreator(article))
        }
    }
}

// export default App; 
export default connect(mapStateToProps, mapDispatchToProps)(App);