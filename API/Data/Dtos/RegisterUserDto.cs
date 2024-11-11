using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data.Dtos
{
    public class RegisterUserDto
    {
        required public string UserName { get; set; }
        required public string FullName { get; set; }
        required public string Email { get; set; }
        required public string Password { get; set; }
    }
}