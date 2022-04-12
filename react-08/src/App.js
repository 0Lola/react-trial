import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './componrnts/Home';
import About from './componrnts/About';

function App() {
    return (
        <div className="App">
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" exact element={<About />}>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
