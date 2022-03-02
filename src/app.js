import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const FiKoDashboardPage = () =>(
  <div>
    This is from my dashboard component
  </div>
);

const AddExpensePage = () =>(
  <div>
    This is my AddExpense component
  </div>
);
const EditExpensePage = () =>(
  <div>
    This is my Edit component
  </div>
);
const HelpPage = () =>(
  <div>
    This is my Help component
  </div>
);
const NotFoundPage = () =>(
  <div>
    404!
  </div>
);



const routes = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<FiKoDashboardPage/>} exact={true}/>
      <Route path="/create" element={<AddExpensePage/>}/>
      <Route path="/edit" element={<EditExpensePage/>}/>
      <Route path="/help" element={<HelpPage/>}/>
      <Route element={<NotFoundPage/>}/>
    </Routes>
  </BrowserRouter>

);

ReactDOM.render(routes, document.getElementById('app'));


