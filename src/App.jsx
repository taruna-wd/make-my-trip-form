
import './App.css'
import Form from './Form'
import Signup from './Signup'

function App() {

  return (
    <>
          <h2 className='text-2xl font-serif font-semibold place-content-center flex mt-3'> Make my trip form</h2>

    <div className='flex my-10'>
    <Form/>
    <Signup/>
    </div>
   
     
    </>
  )
}

export default App
