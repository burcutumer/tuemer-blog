using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data.Domain;
using API.Data.Dtos;
using API.Domain;
using Domain;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Services
{
    public class EntriesService : IEntriesService
    {
        private readonly DataContext _context;
        private readonly UserManager<Author> _userManager;
        public EntriesService(DataContext context, UserManager<Author> userManager)
        {
            _userManager = userManager;
            _context = context;
        }

        public async Task<Response<List<Entry>>> GetEntriesAsync()
        {
            var entries = await _context.Entries
            .Include(e => e.Author)
            .Include(e => e.Title)
            .ToListAsync();

            if (entries.Count == 0)
            {
                return new Response<List<Entry>>
                {
                    Data = null,
                    Error = "Entries NotFound"
                };
            }

            return new Response<List<Entry>>
            {
                Data = entries,
                Error = null
            };
        }

        public async Task<Response<EntryDto>> CreateEntryAsync(int titleId, EntryDto entry, string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            var title = await _context.Titles.FirstOrDefaultAsync(t => t.Id == titleId);

            if (title == null || user == null)
            {
                return new Response<EntryDto>
                {
                    Error = "Invalid User or Title"
                };
            }

            var newEntry = new Entry
            {
                Author = user,
                AuthorId = user.Id,
                Title = title,
                TitleId = titleId,
                Date = DateTime.Now,
                Message = entry.Message,
                IsDeleted = false,
                Tags = entry.Tags
                .Select(t => new Tag { Header = t.Header })
                .ToList()
            };

            await _context.Entries.AddAsync(newEntry);
            await _context.SaveChangesAsync();

            return new Response<EntryDto>
            {
                Data = new EntryDto
                {
                    Message = entry.Message,
                    Tags = entry.Tags
                }
            };
        }

        public async Task<Response<List<Entry>>> GetEntriesByTitleAsync(int id)
        {
            var result = await _context.Entries
                        .Where(e => e.TitleId == id)
                        .Include(e => e.Author)
                        .Include(e => e.Title)
                        .Include(e => e.Tags)
                        .ToListAsync();
            if (result.Count == 0)
            {
                return new Response<List<Entry>>
                {
                    Data = null,
                    Error = "Entries NotFound"
                };
            }
            return new Response<List<Entry>>
            {
                Data = result
            };
        }

        public async Task<Response<Entry>> GetEntryAsync(int id)
        {
             var result = await _context.Entries
            .Include(e => e.Author)
            .Include(e => e.Title)
            .Include(e => e.Tags)
            .FirstOrDefaultAsync(e => e.Id == id);

            if (result == null)
            {
                return new Response<Entry>
                {
                    Data = null,
                    Error = "Entry NotFound"
                };
            }
            return new Response<Entry>
            {
                Data = result,
                Error = null
            };
        }
    }
}