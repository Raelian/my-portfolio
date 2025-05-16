import {BrowserRouter as Router} from "react-router-dom";
import Header from './components/header/Header.jsx'
import Navigation from './components/navigation/Navigation.jsx'
import Content from './components/content/Content.jsx'
import './App.scss'

function App() {
  return (
    <Router basename="/my-portfolio">
      <div className="app-container">
        <Header />
        <Navigation />
        <Content />
      </div>
    </Router>
  )
}

export default App
