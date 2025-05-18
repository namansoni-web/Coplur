using Microsoft.AspNetCore.Mvc;
using NewAPI.Controllers.Manager;

namespace NewAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : Controller
    {
        IUserManager _UserManager;
        public HomeController(IUserManager UserManager)
        {
            _UserManager = UserManager;
        }

        [HttpGet("Users")]

        public IActionResult GetAllUsers()
        {
            var res = _UserManager.GetAllUser();
            return Ok(res);
        }

        [HttpGet("Users/get")]

        public IActionResult GetUserById(int id)
        {
            var res = _UserManager.GetuserById(id);
            return Ok(res);
        }

        [HttpPost("Users/add")]

        public IActionResult AddUser([FromBody] Userdetails User)
        {
            var res = _UserManager.AddUser(User);
            return Ok(res);
        }

        [HttpPut("Users/update")]

        public IActionResult UpdateUser(int id)
        {
            var res = _UserManager.UpdateUser(id);
            return Ok(res);
        }

        [HttpDelete("Users/delete")]

        public IActionResult DeleteUser(int id)
        {
            var res = _UserManager.Deleteuser(id);
            return Ok(res);
        }
    }
}

public class Userdetails
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public required string Data { get; set; }
}