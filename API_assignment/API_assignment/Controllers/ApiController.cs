using API_assignment.Controllers.Managers;
using Microsoft.AspNetCore.Mvc;

namespace API_assignment.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ApiController : Controller
    {
        IBookManager _BookManager;
        public ApiController(IBookManager BookManager)
        {
            _BookManager = BookManager;
        }

        [HttpGet("Books")]

        public IActionResult GetAllBooks()
        {
            var res = _BookManager.GetAllBooks();
            return Ok(res);
        }

        [HttpGet("Books/get")]

        public IActionResult GetBookById(int id)
        {
            var res = _BookManager.GetBookById(id);
            return Ok(res);
        }

        [HttpPost("Books/add")]

        public IActionResult AddBook([FromBody] Bookdetails Book)
        {
            var res = _BookManager.AddBook(Book);
            return Ok(res);
        }

        [HttpPut("Books/update")]

        public IActionResult UpdateBook(int id)
        {
            var res = _BookManager.UpdateBook(id);
            return Ok(res);
        }

        [HttpDelete("Books/delete")]

        public IActionResult DeleteBook(int id)
        {
            var res = _BookManager.DeleteBook(id);
            return Ok(res);
        }
    }
}

public class Bookdetails
{
    public int Id { get; set;}
    public string Title { get; set; }
    public string Author { get; set; }
    public int YearOfPublication { get; set; }
}