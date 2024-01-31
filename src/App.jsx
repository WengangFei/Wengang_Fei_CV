import Header from './components/header';
import Body from './components/body';
import './App.css'

function App() {
 

  return (
    <div className='m-auto p-2 rounded-md shadow shadow-blue-500/40 
    md:shadow-indigo-50/700 max-w-screen-md'>
      <Header />
      <Body />
    </div>
  )
}

export default App
