import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  return (
  <>
    <MyComponent name="ReactJS" />
    <MyComponent name={100} />
  </>
  )
}

export default App
