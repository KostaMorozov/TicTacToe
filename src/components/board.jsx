import React from 'react';
import Result from './result';
import Square from './square';
import { detectWinner } from './detectWinner';

export const EMPTY='';
export const CIRCLE='Circle';
export const CROSS='Cross';


class Board extends React.Component {
    state = {
        board:[
            EMPTY,EMPTY,EMPTY,
            EMPTY,EMPTY,EMPTY,
            EMPTY,EMPTY,EMPTY
        ],
        player:CROSS,
        winner:EMPTY
    }
    handleChoice=(position)=>{
        const board = [...this.state.board];
        let player = this.state.player;

        if(board[position] !== EMPTY)
            return null;
        else
            board[position]=player;
        this.setState({board,player:player === CROSS ? CIRCLE:CROSS,winner:detectWinner(board)});
    }
    handleReset=()=>{
        this.setState({board:[
            EMPTY,EMPTY,EMPTY,
            EMPTY,EMPTY,EMPTY,
            EMPTY,EMPTY,EMPTY
        ],winner:EMPTY})
    }
    render() {
        return (
            <React.Fragment>
                <div className='board'>
                    <Square position={0} value={this.state.board[0]} onChoice={this.handleChoice}/>
                    <Square position={1} value={this.state.board[1]} onChoice={this.handleChoice}/>
                    <Square position={2} value={this.state.board[2]} onChoice={this.handleChoice}/>
                    <Square position={3} value={this.state.board[3]} onChoice={this.handleChoice}/>
                    <Square position={4} value={this.state.board[4]} onChoice={this.handleChoice}/>
                    <Square position={5} value={this.state.board[5]} onChoice={this.handleChoice}/>
                    <Square position={6} value={this.state.board[6]} onChoice={this.handleChoice}/>
                    <Square position={7} value={this.state.board[7]} onChoice={this.handleChoice}/>
                    <Square position={8} value={this.state.board[8]} onChoice={this.handleChoice}/>
                </div>
                <div>
                    {this.state.winner && <Result board={this.state.board} winner={this.state.winner} onReset={this.handleReset}/>}
                </div>
                
            </React.Fragment>
        )
    }
}
 
export default Board;