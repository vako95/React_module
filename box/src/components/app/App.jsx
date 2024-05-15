import CardsList from '../cards/cards_list/CardsList';

import Nav from '../nav/Nav'
import './App.css'

const App = () => {

    const data = [
        {id:'1', name: 'Vaqif', city: 'Baku' }
    ]





    return (
        <>
            <Nav />
            <CardsList data={data} />

        </>
    )
}

export default App;