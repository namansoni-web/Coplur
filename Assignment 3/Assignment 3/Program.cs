using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Customer;

namespace Assignment_3
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Customer cust = new GoldCustomerRegister
            {
                CustomerId = 0967,
                FirstName = "Naman",
                LastName = "Soni",
                Email = "naman@soni.com"
            };
            cust.Register();

            ICustomerDiscount dis = new GoldCustomerDiscount();
            dis.GetDiscountPercentage();

            IProcessOrder order = new OrderProcess(dis);
            order.ProcessOrder();


            Leads lead = new Leads
            {
                Name="Rahul",
                Email="Rahul@gmail.com"
            };

            lead.Check();
        }

    }
}

public class Customer
{
    public int CustomerId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }


    public virtual void Register()
    {
        Console.WriteLine("Customer registered!!");
    }


    public class BronzeCustomerRegister : Customer
    {
        public override void Register()
        {
            Console.WriteLine($"{FirstName} is registred as a Bronze customer.");
        }
    }

    public class SilverCustomerRegister : Customer
    {
        public override void Register()
        {
            Console.WriteLine($"{FirstName} is registred as a Silver customer.");
        }
    }

    public class GoldCustomerRegister : Customer
    {
        public override void Register()
        {
            Console.WriteLine($"{FirstName} is registred as a Gold customer.");
        }
    }

    public class PlatinumCustomerRegister : Customer
    {
        public override void Register()
        {
            Console.WriteLine($"{FirstName} is registred as a Platinum customer.");
        }
    }


    public interface ICustomerDiscount
    {
        int GetDiscountPercentage();
    }

    public class BronzeCustomerDiscount : ICustomerDiscount
    {
        public int GetDiscountPercentage()
        {
            return 15;
        }
    }

    public class SilverCustomerDiscount : ICustomerDiscount
    {
        public int GetDiscountPercentage()
        {
            return 20;
        }
    }

    public class GoldCustomerDiscount : ICustomerDiscount
    {
        public int GetDiscountPercentage()
        {
            return 25;
        }
    }

    public class PlatinumCustomerDiscount : ICustomerDiscount
    {
        public int GetDiscountPercentage()
        {
            return 27;
        }
    }




    public interface ISaveCustomer
    {
        bool SaveCustomer();
    }

    public class AddCustomer: ISaveCustomer
    {
        public bool SaveCustomer()
        {
            //save customer details to database
            Console.WriteLine("Details Saved");
            return true;
        }
    }

    public interface IProcessOrder
    {
        void ProcessOrder();
    }

    public class OrderProcess: IProcessOrder
    {
        private ICustomerDiscount _getDiscount;

        public OrderProcess(ICustomerDiscount getDiscount)
        {
            _getDiscount = getDiscount;
        }
        public void ProcessOrder()
        {
           

            int dis = _getDiscount.GetDiscountPercentage();

            Console.WriteLine(dis + " percent discount ");
            Console.WriteLine("Order Placed Successfully");

        }

    }
}

public class Leads
{
    //It is just a lead no need to save it in the database
    public String Name { get; set; }
    public String Email { get; set; }

    public void Check()
    {
        Console.WriteLine(Name + " Chececked deatails");
    }
}
