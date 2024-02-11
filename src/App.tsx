import {Link, Route, Routes} from 'react-router-dom'
import Micro_react from './components/micro_react.tsx'
import Micro_vue from './components/micro_vue.tsx'
import './App.css'
function App() {
  return (
    <div className='App'>
      <button className='btnClass'>
        <Link to='/reactApp' className='linkClass'>
          react
        </Link>
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; || &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className='btnClass'>
        <Link to='/vueApp' className='linkClass'>
          vue
        </Link>
      </button>
      <Routes>
        <Route path='reactApp' element={<Micro_react />}></Route>
        <Route path='vueApp' element={<Micro_vue />}></Route>
      </Routes>
    </div>
  )
}

export default App
