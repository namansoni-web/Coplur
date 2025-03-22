using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.AccessControl;
using System.Text;
using System.Threading.Tasks;

namespace Assignment_4{
    public class FoodItem
        {
            public string Name { get; set; }
            public double Price { get; set; }
            public string Category { get; set; }
            public FoodItem(string name, double price, string category)
            {
                Name = name;

                Price = price;

                Category = category;
            }
        public override string ToString()
        {
            return $"{Name} - ${Price} - Category: {Category}";
        }
    }

        public class FoodOrderingSystem
        {
            public List<FoodItem> Menu { get; set; } = new List<FoodItem>();
            public Dictionary<int, List<FoodItem>> Orders { get; set; } = new Dictionary<int, List<FoodItem>>();
            public Queue<int> PendingDeliveries { get; set; } = new Queue<int>();
            public Stack<int> DeliveredOrders { get; set; } = new Stack<int>();
            public HashSet<string> Categories { get; set; } = new HashSet<string>();

            public void AddFoodItem(string name, double price, string category)
            {
                var foodItem = new FoodItem(name, price, category);
                Menu.Add(foodItem);
                Categories.Add(category);
                Console.WriteLine($"Food item '{name}' added to the menu.");
            }

            public void ShowMenu()
            {
                Console.WriteLine("\n--- Menu ---");
                foreach (var item in Menu)
                {
                    Console.WriteLine(item);
                }
            }

            public void PlaceOrder(int orderId, List<FoodItem> orderedItems)
            {
                Orders[orderId] = orderedItems;
                PendingDeliveries.Enqueue(orderId);
                Console.WriteLine($"Order {orderId} placed.");
            }

            public void DeliverOrder()
            {
                if (PendingDeliveries.Count > 0)
                {
                    int orderId = PendingDeliveries.Dequeue();
                    DeliveredOrders.Push(orderId);
                    Console.WriteLine($"Order {orderId} delivered.");
                }
                else
                {
                    Console.WriteLine("No pending orders to deliver.");
                }
            }

            public void ShowPendingDeliveries()
            {
                Console.WriteLine("\n--- Pending Deliveries ---");
                foreach (var orderId in PendingDeliveries)
                {
                    Console.WriteLine($"Order ID: {orderId}");
                }
            }

            public void ShowDeliveredOrders()
            {
                Console.WriteLine("\n--- Delivered Orders ---");
                foreach (var orderId in DeliveredOrders)
                {
                    Console.WriteLine($"Order ID: {orderId}");
                }
            }

            public void ShowFoodCategories()
            {
                Console.WriteLine("\n--- Food Categories ---");
                foreach (var category in Categories)
                {
                    Console.WriteLine(category);
                }
            }
        }

        class Program
        {
            static void Main(string[] args)
            {
                var system = new FoodOrderingSystem();
                bool running = true;

                while (running)
                {
                    Console.WriteLine("Food Ordering System");
                    Console.WriteLine("1. Add Food Item");
                    Console.WriteLine("2. Show Menu");
                    Console.WriteLine("3. Place Order");
                    Console.WriteLine("4. Deliver Order");
                    Console.WriteLine("5. Show Pending Deliveries");
                    Console.WriteLine("6. Show Delivered Orders");
                    Console.WriteLine("7. Show Food Categories");
                    Console.WriteLine("8. Exit");
                    Console.Write("Enter your choice: ");
                    var choice = Console.ReadLine();

                    switch (choice)
                    {
                        case "1":
                            Console.Write("Enter food name: ");
                            string name = Console.ReadLine();
                            Console.Write("Enter price: ");
                            double price = Convert.ToDouble(Console.ReadLine());
                            Console.Write("Enter category: ");
                            string category = Console.ReadLine();
                            system.AddFoodItem(name, price, category);
                            break;

                        case "2":
                            system.ShowMenu();
                            break;

                        case "3":
                            Console.Write("Enter order ID: ");
                            int orderId = Convert.ToInt32(Console.ReadLine());
                            List<FoodItem> itemsToOrder = new List<FoodItem>();
                            bool ordering = true;

                            while (ordering)
                            {
                                Console.Write("Enter food name to order (or 'done' to finish): ");
                                string foodName = Console.ReadLine();
                                if (foodName.ToLower() == "done")
                                {
                                    ordering = false;
                                    continue;
                                }

                                var foodItem = system.Menu.Find(f => f.Name.Equals(foodName, StringComparison.OrdinalIgnoreCase));
                                if (foodItem != null)
                                {
                                    itemsToOrder.Add(foodItem);
                                    Console.WriteLine($"Added {foodItem.Name} to your order.");
                                }
                                else
                                {
                                    Console.WriteLine("Food item not found.");
                                }
                            }

                            system.PlaceOrder(orderId, itemsToOrder);
                            break;

                        case "4":
                            system.DeliverOrder();
                            break;

                        case "5":  
                            system.ShowPendingDeliveries();
                            break;

                        case "6":
                            system.ShowDeliveredOrders();
                            break;

                         case "7":
                            system.ShowFoodCategories();
                            break;

                        case "8":
                            running = false;
                            break;

                        default:
                            Console.WriteLine("Invalid choice. Please try again.");
                            break;
                    }
                }
            }
        }
    }
