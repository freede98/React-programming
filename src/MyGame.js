import React from 'react';
import './index.css';

import Board from "./components/Board"

class MyGame extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            history : [{
                squares: Array(10).fill(null)
            }],
            stepNumber : 0,
            xIsNext : true,
            descOrder : true,
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        const current = history[history.length - 1]

        const squares = current.squares.slice();
  
        if(calculateWinner(squares) || squares[i] || allFilled(current.squares))
          return
  
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        squares[9] = i

        this.setState({
            history: history.concat([{squares : squares}]),
            
            xIsNext: !this.state.xIsNext,
            stepNumber : history.length
        });
    }

    reverse(){
      this.setState({
        descOrder : !this.state.descOrder
      })
    }

    jumpTo(step){
        this.setState({
            stepNumber : step,
            xIsNext : (step % 2) === 0
        })
    }

    render() {
        const history = this.state.history
        const current = history[this.state.stepNumber]
        const winner = calculateWinner(current.squares)
        const draw = allFilled(current.squares)

        const moves = history.map((step, move) => {
            const pos = history[move].squares[9]

            const desc = move ?
                'Go to move #' + move + " with position (" + calCol(pos) + "," + calRow(pos) + ")":
                'Go to game start'
            return  (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })

        let status
        if(winner)
            status = 'Winner ' + winner
        
        else if(draw){
            status = 'Draw'
        }

        else 
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

      return (
        <div className="game">
          <div className="game-board">
            <Board 
                squares = {current.squares}
                onClick = {i => this.handleClick(i) }
            />
          </div>
          <div className="game-info">
            <div>{ status }</div>
            <ol>{ moves }</ol>
            <button onClick={() => this.reverse()}>Reverse Order</button>
          </div>
        </div>
      );
    }
}

function calCol(pos){
  const changePos = 0
  return (pos % 3 + changePos)
}

function calRow(pos){
  const changePos = 0
  return (Math.floor(pos / 3) + changePos)
}

function allFilled(squares){
  for (let i = 0; i < squares.length; i++) {
    if(!squares[i])
      return false
  }

  return true
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        console.log(a,b,c)
        return squares[a];
      }
    }
    return null;
}

export default MyGame;