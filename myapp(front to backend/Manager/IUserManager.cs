using Microsoft.AspNetCore.Mvc;

namespace NewAPI.Controllers.Manager
{
    public interface IUserManager 
    {
        public string GetAllUser();
        public string GetuserById(int id);
        public string AddUser(Userdetails User);
        public string UpdateUser(int id);
        public string Deleteuser(int id);

    }
}