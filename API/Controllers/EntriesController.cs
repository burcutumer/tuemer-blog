using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data.Domain;
using API.Data.Dtos;
using API.Domain;
using API.Services;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class EntriesController : BaseApiController
    {
        private readonly IEntriesService _entriesService;
        public EntriesController(IEntriesService entriesService)
        {
            _entriesService = entriesService;
        }


        [HttpGet]
        public async Task<ActionResult<Response<List<Entry>>>> GetEntries()
        {
            var result = await _entriesService.GetEntriesAsync();
            if (result.Error != null)
            {
                return NotFound(result);
            }
            return Ok(result);
        }

        [Authorize]
        [HttpPost("title/{titleId}")]
        public async Task<ActionResult<Response<Entry>>> CreateEntry(int titleId, EntryDto entry)
        {
            var userEmail = User.Identity.Name;
            if (userEmail == null)
            {
                return Unauthorized(new Response<Entry> { Error = "User not authorized" });
            }

            var result = await _entriesService.CreateEntryAsync(titleId, entry, userEmail);
            if (result.Error != null)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpGet("titles/{id}")]
        public async Task<ActionResult<List<Entry>>> GetEntriesByTitle(int id)
        {
            var result = await _entriesService.GetEntriesByTitleAsync(id);

            if (result.Error != null)
            {
                return NotFound(result);
            }
            return Ok(result);
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Entry>> GetEntry(int id)
        {
            var result = await _entriesService.GetEntryAsync(id);

            if (result.Error != null)
            {
                return NotFound(result);
            }
            return Ok(result);
        }
    }
}