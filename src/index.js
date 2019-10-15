import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css'


const Cell = (props) => {
  return (
    <div className="cell" onClick={props.onClick}>
      {props.text}
    </div>
  )
}

const Chessboard = () => {
  const [cells, setCells] = React.useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]);
  const tell = () => {
    console.log('tell')
  };
  const [n, setN] = React.useState(0);
  const copyCells = JSON.parse(JSON.stringify(cells));
  const onClickCell = (row, col) => {
    setN(n + 1);
    copyCells[row][col] = n % 2 === 0 ? 'X' : 'O';
    setCells(copyCells)
    tell();
  }
  return (
    <div>
      {
        cells.map((items, rowIndex) => {
          return (
            <div className="row" key={rowIndex + 'p'}>
              {
                items.map((item, colIndex) =>
                  <div className="col" key={colIndex + 'a'}>
                    <Cell text={item} onClick={() => onClickCell(rowIndex, colIndex)} />
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