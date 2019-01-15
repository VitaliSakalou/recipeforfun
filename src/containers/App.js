import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from './Main/Main'
import Category from './Category/Category'
import Area from './Area/Area'
import RandomRecipeContainer from './RandomRecipeContainer/RandomRecipeContainer'
import ListOfRecipes from './ListOfRecipes/ListOfRecipes'
import Recipe from './Recipe/Recipe'
import { ThemeContext } from './Context/ThemeContext'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from '../store/configureStore'
import { Provider } from 'react-redux'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === 'dark' ? 'light' : 'dark',
      }))
    }

    this.state = {
      theme: 'light',
      toggleTheme: this.toggleTheme,
    }
  }

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
    return (
      <Provider store={store}>
        <Router>
          <ThemeContext.Provider value={this.state}>
            <div className={`App--${this.state.theme} `}>
              {this.pageRender()}
            </div>
          </ThemeContext.Provider>
        </Router>
      </Provider>
    )
  }
}

export default App
