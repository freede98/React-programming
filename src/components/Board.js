import React from 'react';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick }>
            {props.value}
        </button>
    );
}
  
class Board extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     squares: Array(9).fill(null),
    //     xIsNext: true,
    //   };
    //   this.handleClick = this.handleClick.bind(this);
    // }
  
    renderSquare(i) {
      return (
        <Square
          value={this.props.squares[i] ? this.props.squares[i] : '-'}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {  
      return ( 
        <div>
          {/* <div className="status">{status}</div> */}
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
}

function newRender(){
  for(let i = 0; i<3; i++)
    for(let j = 0; j<3; j++)
      this.renderSquare(i+j)
}

export default Board;