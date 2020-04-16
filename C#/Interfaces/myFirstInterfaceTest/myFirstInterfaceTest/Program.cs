using System;

namespace myFirstInterfaceTest
{
    class Program
    {
        static void Main(string[] args)
        {
            var allAnimals = new IAnimal[]{
              new Cat(),
              new Dog()
            };
            foreach(var a in allAnimals)
            {
                a.Talk();
            }

        }
    }
}
