import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import store from './store'
import { Provider } from 'react-redux'
import Editor from './containers/Editor';
import { PageViewer } from './components/PageViewer/pageViewer';
 
import page from './cashData/page-data0.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/low-code-platform" element={<App />} />
        <Route path="/low-code-platform/editor" element={<Editor page={page}/>} />
        <Route path="*" element={<Navigate to="/low-code-platform" />} />
        <Route path="/low-code-platform/preview" element={<PageViewer page={page}/>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
