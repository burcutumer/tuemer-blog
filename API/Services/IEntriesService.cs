using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data.Dtos;
using Domain;

namespace API.Services
{
    public interface IEntriesService
    {
        Task<Response<List<Entry>>> GetEntriesAsync();
        Task<Response<List<Entry>>> GetEntriesByTitleAsync(int id);
        Task<Response<EntryDto>> CreateEntryAsync(int titleId, EntryDto entryDto,string email);
        Task<Response<Entry>> GetEntryAsync(int id);
    }
}