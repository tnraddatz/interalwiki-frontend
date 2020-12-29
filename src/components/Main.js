import { Switch, Route } from 'react-router-dom'
import Home from './Home.js'
import About from './About.js'

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/About' component={About}/>
        <Route path='/Home' component={Home}/>
      </Switch>
    </main>
  );
}

export default Main;