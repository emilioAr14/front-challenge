import React from 'react';
import { APIProvider } from '../services/context';
import { AppUI } from './AppUI';

function App() {

    return (
        <APIProvider>
            <AppUI />
        </APIProvider>
    );
}

export default App;
