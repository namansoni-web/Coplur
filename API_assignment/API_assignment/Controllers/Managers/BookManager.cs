using System.Globalization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewFeatures;

namespace API_assignment.Controllers.Managers

{
    public class BookManager :IBookManager
    {
        public string AddBook(Bookdetails Book)
        {
            return "Your Book is Added";
        }

        public string DeleteBook(int id)
        {
            return "Book Deleted";
        }

        public string GetAllBooks()
        {
            return "You get all books";
        }

        public string GetBookById(int id)
        {
            return "Book recieved";
        }
        public string UpdateBook(int id)
        {
            return "Book is updated";
        }

    }
}
