import { useState } from 'react'
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  function handleCounter(event) {
    const { id } = event.target
    if (id === 'increase' && counter < 100) {
      setCounter(counter + 5)
    }
    if (id === 'decrease' && counter > 0) {
      setCounter(counter - 5)
    }
  }

  function draw(n) {

    let triangle = ''


    for (let i = 1; ; i++) {
      if (i == n - 6) {
        continue;
      }
      if (i > n - 2) {
        for (i = 1; i < n; i++) {
          triangle += 'x '
        }
        break;
      }
      for (let j = 1; j <= n; j++) {

        if (j == n - i && i < n - 1) {
          triangle += 'x'
        } else {
          if (j == n) {

          } else {
            triangle += ' '
          }

        }

      }
      let j = i
      while (j - 2 > 0 && i < n - 1) {
        triangle += ' '
        j--
      }

      j = i
      while (j - 1 > 0 && i < n - 1) {
        triangle += 'x'
        break;

      }

      triangle += "\n"

    }

    console.log(triangle)
  }


  draw(13)




  return (
    <div className="App">
      <h4>Progess Bar</h4>
      <div>
        <p>{counter}%</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ marginRight: '10px' }}>
            <button id='increase' onClick={(e) => handleCounter(e)}>+</button>
          </div>
          <div>
            <button id='decrease' onClick={(e) => handleCounter(e)}>-</button>
          </div>

        </div>
        <br />
        <div style={{ width: '500px', height: '20px', backgroundColor: 'gray', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ width: `${counter}%`, height: '20px', backgroundColor: 'cornflowerblue' }}>

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
