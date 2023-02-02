
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Authoto } from './Authoto'
import LoginTodos from './LoginTodos';
import Registertodos from './Registertodos';
import TodosView from './TodosView';
import TodosPost from './TodosPost';
import {Toast} from './Toast'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Toast>
        <Authoto>
          <Routes>
            <Route path='/' element={<LoginTodos/>}/>
            <Route path='/Register' element={<Registertodos/>}/>
            <Route path='/view' element={<TodosView/>}/>
            <Route path='/add' element={<TodosPost/>}/>
          </Routes>
        </Authoto>
        </Toast>
      </BrowserRouter>
    </div>
  );
}

export default App;
