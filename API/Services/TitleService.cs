using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data.Dtos;
using API.Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Services
{
    public class TitleService : ITitleService
    {
        private readonly DataContext _context;
        public TitleService(DataContext dataContext)
        {
            _context = dataContext;
        }

        public async Task<Response<List<Title>>> GetTitlesAsync()
        {
            var titles = await _context.Titles
            .Include(e => e.Entries)
            .ToListAsync();

            if (titles.Count == 0)
            {
                return new Response<List<Title>>
                {
                    Data = null,
                    Error = "Titles NotFound"
                };
            }

            return new Response<List<Title>>
            {
                Data = titles,
                Error = null
            };
        }
    }
}