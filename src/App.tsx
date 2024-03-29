import {Link, Route, Routes} from 'react-router-dom'
import Micro_react from './components/micro_react.tsx'
import Micro_vue from './components/micro_vue.tsx'
import './App.css'
function App() {
  return (
    <div className='App'>
      <button className='btnClass'>
        <Link to='/page/reactApp' className='linkClass'>
          react
        </Link>
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; || &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className='btnClass'>
        <Link to='/page/vueApp' className='linkClass'>
          vue
        </Link>
      </button>
      <Routes>
        <Route path='/page/reactApp' element={<Micro_react />}></Route>
        <Route path='/page/vueApp' element={<Micro_vue />}></Route>
      </Routes>
    </div>
  )
}

export default App
