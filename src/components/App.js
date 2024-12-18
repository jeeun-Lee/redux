
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import React from 'react';
import Home from '../routes/Home';
function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' Component={Home} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;