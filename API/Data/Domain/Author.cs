using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace API.Domain
{
    public class Author : IdentityUser<int>
    {
        required public string FullName { get; set; }
        public string? AvatarUrl { get; set; }
        public List<Entry> Entries { get; set; } = new List<Entry>();
    }
}
