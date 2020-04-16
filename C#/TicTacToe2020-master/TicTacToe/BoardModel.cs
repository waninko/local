using System;
using System.Collections.Generic;
using System.Text;

namespace TicTacToe
{
    class BoardModel
    {
        /*
         * 0 betyr blank
         * 1 betyr x (spiller 1)
         * 2 betyr o (spiller 2)
         */
        private int[] _squares;
        private Random _random;

        public BoardModel()
        {
            _squares = new int[9];
            _random = new Random();
        }

        public int GetSquare(int index)
        {
            return _squares[index];
        }

        public void Fill(string position, int squareContent)
        {
            // gitt at position == 'a2'
            var colChar = position[0];
            var rowChar = position[1];
            var row = rowChar - '1';
            var index = colChar - 'a' + row * 3;
            _squares[index] = squareContent;
        }

        public void SetRandom(int squareContent)
        {
            var blankCount = BlankCount();
            if (blankCount == 0) return;
            var blankNo = _random.Next(0, blankCount);
            var randomIndex = IndexFromBlankNo(blankNo);
            _squares[randomIndex] = squareContent;
        }

        private int IndexFromBlankNo(int blankNo)
        {
            var count = 0;
            for (var index = 0; index < _squares.Length; index++)
            {
                var n = _squares[index];
                if (n == 0)
                {
                    if (blankNo == count) return index;
                    count++;
                }
            }
            return -1;
        }

        private int BlankCount()
        {
            var count = 0;
            foreach(var n in _squares)
            {
                if (n == 0) count++;
            }

            return count;
        }

        public bool BoardIsFull()
        {
            return BlankCount() == 0;
        }
    }
}
