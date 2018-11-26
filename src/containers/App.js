import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Main from './Main/Main'
import Category from './Category/Category'
import Area from './Area/Area'
import Menu from '../components/Menu/Menu'
import ListOfRecipes from './ListOfRecipes/ListOfRecipes'
import Recipe from './Recipe/Recipe'
import SearchMeals from './SearchMeals/SearchMeals'

class App extends Component {
  pageRender = () => {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/category" component={Category} />
        <Route path="/area" component={Area} />
        <Route path="/listofrecipes/:type/:param" component={ListOfRecipes} />
        <Route path="/recipe/:type/:group?/:param" component={Recipe} />
      </Switch>
    )
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <SearchMeals />
        {this.pageRender()}
      </div>
    )
  }
}

export default App
