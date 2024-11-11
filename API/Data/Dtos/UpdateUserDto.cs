using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data.Dtos
{
    public class UpdateUserDto
    {
        public string? CurrentPassword { get; set; }
        public string? Password { get; set; }
    }
}