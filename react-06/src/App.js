import './App.css';
import Accordion from './components/Accordion';

const items = [
    {
        title: 'Title 1',
        content: 'Content 1'
    },
    {
        title: 'Title 2',
        content: 'Content 2'
    },
    {
        title: 'Title 3',
        content: 'Content 3'
    }
];


function App() {
    return (
        <div>
            <Accordion items={items}></Accordion>
        </div>
    );
}

export default App;
