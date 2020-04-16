using System;
using System.Collections.Generic;
using System.Text;

namespace TicTacToe
{
    class BoardView
    {
        private BoardModel _model;

        public BoardView(BoardModel model)
        {
            _model = model;
        }

        public void Show()
        {
            Console.WriteLine(
                "  a b c\n" +
                " ┌─────┐\n" +
                $"1│{GetSquare(0)} {GetSquare(1)} {GetSquare(2)}│\n" +
                $"2│{GetSquare(3)} {GetSquare(4)} {GetSquare(5)}│\n" +
                $"3│{GetSquare(6)} {GetSquare(7)} {GetSquare(8)}│\n" +
                " └─────┘"
            );
        }

        char GetSquare(int index )
        {
            const string chars = " xo";
            var characterIndex = _model.GetSquare(index);
            return chars[characterIndex];
        }
    }
}
