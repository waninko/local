using System;
using System.Collections.Generic;
using System.Text;

namespace myFirstInterfaceTest
{
    class Cat : IAnimal
    {
        public void Talk()
        {
            Console.WriteLine(" 'CatSound.' ");
        }
    }
}
