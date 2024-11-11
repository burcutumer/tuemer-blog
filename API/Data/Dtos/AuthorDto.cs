using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data.Dtos
{
    public class AuthorDto
    {
        public string UserName { get; set; }
        public string? FullName { get; set; }
        public string? Email { get; set; }
    }
}