import React from 'react'
import ReactDOM from 'react-dom'

// JS原生版
// let div1 = 
// createElement('div', 
//   createElement('p', 
//     createElement('span', 'hi')
//   )
// )
// document.body.appendChild(div1)

// function createElement(tagName, children) {
//   const element = document.createElement(tagName)
//   if (children) {
//     if (typeof children === 'string') {
//       let childElement = document.createTextNode(children)
//       element.appendChild(childElement)
//     } else {
//       element.appendChild(children)
//     } 
//   }
//   return element;
// }

// react版
// const div = (
//   React.createElement('div', null,
//     React.createElement('p', null, (
//       React.createElement('span', null, 'hi')
//     ))
//   )
// )

// 改进版
// const div = (
//   <div>
//     <p>
//       <span>hi</span>
//     </p>
//   </div>
// )

// 拆分版
const Header = (
  <header>
    header
  </header>
)

const Header2 = (props) => {
  return (
    <header>
      header2是{ props.name }
    </header>
  )
}

const Footer = (
  <footer>
    footer
  </footer>
)

const Footer2 = () => {
  const [n, setN] = React.useState(0); // 
  return (
    <div>
      {n}
      <button onClick={() => {
        setN(n + 1)
      }}>点击相加</button>
    </div>
  )
}

class Boottom extends React.Component {
  render() {
    return (
      <div>Boottom</div>
    )
  }
}

const div = (
  <div>
    { Header }
    { Header2({name: 'HAHA'}) }
    <Header2 name="jacky" />
      <p>
        <span>hi</span>
      </p>
    { Footer }
    <Footer2 />
    <Boottom />
  </div>
)


ReactDOM.render(div, document.querySelector('#root'))
