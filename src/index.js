import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchResultScreen from './screens/SearchResult/SearchResult.js';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="search" element={<SearchResultScreen />}>
                    <Route
                        path=":searchValue"
                        element={<SearchResultScreen />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
