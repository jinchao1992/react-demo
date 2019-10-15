import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css'


const Cell = () => {
  const [text, setText] = React.useState();
  const buttonClick = () => {
    setText('x')
  }
  return (
    <div className="cell" onClick={buttonClick}>
      {text}
    </div>
  )
}

const cells = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

const Chessboard = () => {
  return (
    <div>
      {
        cells.map((items, indexP) => {
          return (
            <div className="row" key={indexP + 'p'}>
              {
                items.map((item, index)=> 
                  <div className="col" key={index + 'a'}>
                    <Cell />
                  </div>
                )
              }
            </div>
          )
        })
      }
    </div>
  )
}

ReactDOM.render(
  <div>
    <Chessboard />
  </div>
, document.querySelector('#root'))