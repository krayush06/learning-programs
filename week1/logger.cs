// File: Logger.cs
using System;

public class Logger
{
    // Step 2: private static instance of Logger (eager initialization)
    private static readonly Logger instance = new Logger();

    // Step 2: private constructor to prevent instantiation
    private Logger()
    {
        Console.WriteLine("Logger Initialized");
    }

    // Step 2: public method to return the single instance
    public static Logger GetInstance()
    {
        return instance;
    }

    // Example method for logging
    public void Log(string message)
    {
        Console.WriteLine("Log: " + message);
    }
}
