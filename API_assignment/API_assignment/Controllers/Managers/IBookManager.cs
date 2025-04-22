using Microsoft.AspNetCore.Mvc;

namespace API_assignment.Controllers.Managers
{
    public interface IBookManager
    {
        public string GetAllBooks();
        public string GetBookById(int id);
        public string AddBook(Bookdetails Book);
        public string UpdateBook(int id);
        public string DeleteBook(int id);

    }
}
