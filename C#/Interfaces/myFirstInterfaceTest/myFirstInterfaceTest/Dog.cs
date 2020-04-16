using System;
using System.Collections.Generic;
using System.Text;

namespace myFirstInterfaceTest
{
    class Dog : IAnimal
    {
      public  void Talk()
        {
            Console.WriteLine(" 'NotCatSound.' ");
        }
    }
}
