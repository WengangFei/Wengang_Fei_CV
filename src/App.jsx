import Header from './components/header';
import Body from './components/body';
import './App.css'

function App() {
 

  return (
    <div className='mx-auto my-8 py-2 rounded-md shadow-lg p-3
    shadow-blue-900/60 md:shadow-indigo-50/900 max-w-screen-sm'>
      <Header />
      <Body />
    </div>
  )
}

export default App
