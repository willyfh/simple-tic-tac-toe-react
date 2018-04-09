/* js compiled Babel */

'use strict';

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Square = function(_React$Component) {
    _inherits(Square, _React$Component);

    function Square() {
        _classCallCheck(this, Square);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Square.prototype.render = function render() {
        var _this2 = this;

        return React.createElement('button', {
            className: "square " + (this.props.value == 'X' ? 'red' : this.props.value == 'O' ? 'green' : ''),
            onClick: function onClick() {
                return _this2.props.onClick();
            }
        }, this.props.value);
    }
    ;

    return Square;
}(React.Component);

var Restart = function(_React$Component2) {
    _inherits(Restart, _React$Component2);

    function Restart() {
        _classCallCheck(this, Restart);

        return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
    }

    Restart.prototype.render = function render() {
        var _this4 = this;

        return React.createElement('button', {
            className: 'btn-restart',
            onClick: function onClick() {
                return _this4.props.onClick();
            }
        }, 'Restart');
    }
    ;

    return Restart;
}(React.Component);

var Board = function(_React$Component3) {
    _inherits(Board, _React$Component3);

    function Board() {
        _classCallCheck(this, Board);

        var _this5 = _possibleConstructorReturn(this, _React$Component3.call(this));

        _this5.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        };
        return _this5;
    }

    Board.prototype.renderSquare = function renderSquare(i) {
        var _this6 = this;

        return React.createElement(Square, {
            value: this.state.squares[i],
            onClick: function onClick() {
                return _this6.handleClick(i);
            }
        });
    }
    ;

    Board.prototype.renderRestart = function renderRestart() {
        var _this7 = this;

        return React.createElement(Restart, {
            onClick: function onClick() {
                return _this7.restart();
            }
        });
    }
    ;

    Board.prototype.render = function render() {
        var winner = calculateWinner(this.state.squares);
        var status = undefined;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return React.createElement('div', null, React.createElement('div', {
            className: 'status'
        }, status), React.createElement('div', {
            className: 'board-row'
        }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), React.createElement('div', {
            className: 'board-row'
        }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), React.createElement('div', {
            className: 'board-row'
        }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)), React.createElement('div', {
            className: 'game-restart'
        }, this.renderRestart()));
    }
    ;

    Board.prototype.handleClick = function handleClick(i) {
        var squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }
    ;

    Board.prototype.restart = function restart() {
        this.setState({
            squares: Array(9).fill(null),
            xIsNext: true
        });
    }
    ;

    return Board;
}(React.Component);

var Game = function(_React$Component4) {
    _inherits(Game, _React$Component4);

    function Game() {
        _classCallCheck(this, Game);

        return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
    }

    Game.prototype.render = function render() {
        return React.createElement('div', {
            className: 'game'
        }, React.createElement('div', {
            className: 'game-board'
        }, React.createElement(Board, null)), React.createElement('div', {
            className: 'game-info'
        }, React.createElement('div', null), React.createElement('ol', null)));
    }
    ;

    return Game;
}(React.Component);

// ========================================

ReactDOM.render(React.createElement(Game, null), document.getElementById('container'));

function Square(props) {
    return React.createElement('button', {
        className: 'square',
        onClick: function onClick() {
            return props.onClick();
        }
    }, props.value);
}

function calculateWinner(squares) {
    var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (var i = 0; i < lines.length; i++) {
        var _lines$i = lines[i];
        var a = _lines$i[0];
        var b = _lines$i[1];
        var c = _lines$i[2];

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
