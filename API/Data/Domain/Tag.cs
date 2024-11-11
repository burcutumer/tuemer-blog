using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data.Domain
{
    public class Tag
    {
        public int Id { get; set; }
        required public string Header { get; set; }

    }
}