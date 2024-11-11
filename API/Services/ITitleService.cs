using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data.Dtos;
using API.Domain;

namespace API.Services
{
    public interface ITitleService
    {
        Task<Response<List<Title>>> GetTitlesAsync();
    }
}