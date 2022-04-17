import CardContainer from './components/CardContainer';
import Card from './components/Card';
import Header from './components/Header';
import './sass/main.scss';
import { data } from './data';

function App() {
    return (
        <>
        <Header/>
        <CardContainer>
            <Card data={data}/>
            <Card data={data}/>
            <Card data={data}/>
        </CardContainer>
        </>
    );
}

export default App;
