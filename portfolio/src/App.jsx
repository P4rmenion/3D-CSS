import Deck from './components/Deck/Deck'
import './App.less'

function App() {

  return (
    <div className='App'>
      <div className='frame'>
        <Deck z='0px' skin='black-white' text='Home' />
        <Deck z='25px' skin='orange-black' text='About' />
        <Deck z='50px' skin='black-white' text='Timeline'/>
      </div>
    </div>
  )
}

export default App
