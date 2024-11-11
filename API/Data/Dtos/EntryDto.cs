using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data.Domain;

namespace API.Data.Dtos
{
    public class EntryDto
    {
        required public string Message { get; set; }
        public List<TagDto> Tags { get; set; } = new List<TagDto>();
    }
}