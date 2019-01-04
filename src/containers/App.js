import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from './Main/Main'
import Category from './Category/Category'
import Area from './Area/Area'
import RandomRecipeContainer from './RandomRecipeContainer/RandomRecipeContainer'
import ListOfRecipes from './ListOfRecipes/ListOfRecipes'
import Recipe from './Recipe/Recipe'
import './App.scss'

class App extends Component {
  pageRender = () => {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/category" component={Category} />
        <Route path="/area" component={Area} />
        <Route path="/random" component={RandomRecipeContainer} />
        <Route path="/listofrecipes/:type/:param" component={ListOfRecipes} />
        <Route path="/recipe/:type/:group?/:param" component={Recipe} />
      </Switch>
    )
  }

  render() {
    return <div className="App">{this.pageRender()}</div>
  }
}

export default App
