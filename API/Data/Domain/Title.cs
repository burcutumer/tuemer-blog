using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace API.Domain
{
    public class Title
    {
        public int Id { get; set; }
        required public string Header { get; set; }
        public List<Entry> Entries { get; set; } = new List<Entry>();
    }
}