using System;
using System.Threading;

namespace TicTacToe
{
    class Program
    {
        static void Main(string[] args)
        {
            var model = new BoardModel();
            var view = new BoardView(model);

            while (!model.BoardIsFull())
            {
                view.Show();
                Console.Write("Skriv inn hvor du vil sette kryss (f.eks. \"a2\"): ");
                var position = Console.ReadLine();
                model.Fill(position, 1);
                Thread.Sleep(400);
                model.SetRandom(2);
            }
            view.Show();
        }
    }
}
