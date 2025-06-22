// File: Program.cs
using System;

public class Program
{
    public static void Main(string[] args)
    {
        // Get instance of Logger
        Logger logger1 = Logger.GetInstance();
        logger1.Log("This is the first log message.");

        // Get another instance and log
        Logger logger2 = Logger.GetInstance();
        logger2.Log("This is the second log message.");

        // Test if both references point to the same object
        if (object.ReferenceEquals(logger1, logger2))
        {
            Console.WriteLine("Both logger instances are the same (Singleton works).");
        }
        else
        {
            Console.WriteLine("Different instances exist (Singleton failed).");
        }
    }
}
