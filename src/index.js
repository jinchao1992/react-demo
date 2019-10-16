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
  const [bFlag, setBflag] = React.useState(false)
  const tell = (cells) => {
    console.log(cells)
    // 判断横排 如果三个一样
    for(let i = 0;  i < cells[0].length; i++) {
      if (cells[i][0] === cells[i][1] 
        && cells[i][1] === cells[i][2] 
        && cells[i][0] !== null) {
          setBflag(true)
        }
    }
    // 判断竖排 如果三个一样
    for (let i = 0; i < cells[0].length; i++) {
      if(cells[0][i] === cells[1][i] 
        && cells[1][i] === cells[2][i]
        && cells[2][i] !== null
      ) {
        setBflag(true)
      }
    }
    if ((cells[0][0] === cells[1][1] 
      && cells[1][1] === cells[2][2]
      && cells[1][1] !== null)
    ) {
      setBflag(true)     
    }
    if ((cells[0][2] === cells[1][1] 
      && cells[1][1] === cells[2][0]
      && cells[0][2] !== null)
    ) {
      setBflag(true)     
    }
  };
  const [n, setN] = React.useState(0);
  const copyCells = JSON.parse(JSON.stringify(cells));
  const onClickCell = (row, col) => {
    setN(n + 1);
    copyCells[row][col] = n % 2 === 0 ? 'X' : 'O';
    setCells(copyCells)
    tell(copyCells);
  }
  return (
    <div style={{'position': 'relative'}}>
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
      {bFlag ? (<div className="grameover">游戏结束</div>) : null}
    </div>
  )
}

ReactDOM.render(
  <div>
    <Chessboard />
  </div>
  , document.querySelector('#root'))