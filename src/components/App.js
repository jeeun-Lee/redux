
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import React from 'react';
import Home from '../routes/Home';
import Detail from '../routes/Detail';
import Product from './Product';
function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' Component={Home} />
                <Route path='/:id' Component={Detail} />
                <Route path='/product' Component={Product} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;