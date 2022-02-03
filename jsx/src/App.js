import './App.css';
import imageinRES from './image1.jpg'

function App() {
  return (
        <div className="div-1">
          <h1 className="title">Hello</h1>
          <br/>
          <img className='img' src={imageinRES} alt='Not Found'/>
          <br/>
          <img className='img' src='/image2.jpg' alt='Not found'/>
          <video className='img' src='/vid1.mp4' type='video/mp4' width="320" height="240" controls></video>
        </div>

    
  )
}

export default App;
