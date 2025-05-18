using System.Reflection.Metadata;
using Microsoft.AspNetCore.Mvc;

namespace NewAPI.Controllers.Manager
{
    public class UserManager : IUserManager
    {
        public string AddUser(Userdetails User)
        {
            return "Your User is Added";
        }

        public string Deleteuser(int id)
        {
            return "User Deleted";
        }

        public string GetAllUser()
        {
            return "You get all users";
        }

        public string GetuserById(int id)
        {
            return "User recieved";
        }
        public string UpdateUser(int id)
        {
            return "User is updated";
        }

    }
}