import {Navbar} from './components/Navbar'
import {Routesp} from './components/Routes'
import {Footer} from './components/Footer'
import { useState } from 'react';
function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className={darkTheme ? 'dark': ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar darkTheme = {darkTheme} setDarkTheme = {setDarkTheme}/>
        <Routesp/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
