import Home from './Home.js'
import About from './About.js'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About
  }
]

export default routes
