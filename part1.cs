
using System;
class Logger
{
    public virtual void Log(string message )
    {
        Console.WriteLine(message);
    }

}

class databaseLogger : Logger
{
    public override void Log(string message)
    {
        Console.WriteLine("Database log - " + message);
    }
}

class fileLogger : Logger
{
    public override void Log(string message)
    {
        Console.WriteLine("file logger - " + message);
    }
}

class CldLogger : Logger
{
    public override void Log(string message)
    {
        Console.WriteLine("Cloud logger- " + message);
    } 
}

class Code
{
    static void Main()
    {
        Logger databaseLogger = new databaseLogger();
        Logger fileLogger = new fileLogger();
        Logger CldLogger = new CldLogger();

        databaseLogger.Log("Database Created ");
        fileLogger.Log("File Created");
        CldLogger.Log("Cloud Created");
    }
}