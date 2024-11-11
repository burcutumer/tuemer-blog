using API.Data.Dtos;
using API.Domain;
using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class TitleController : BaseApiController
    {
        private readonly ITitleService _titleService;

        public TitleController(ITitleService titleService)
        {
            _titleService = titleService;
        }

        [HttpGet]
        public async Task<ActionResult<Response<List<Title>>>> GetTitles()
        {
            var result = await _titleService.GetTitlesAsync();

            if (result.Error != null)
            {
                return BadRequest(result);
            }
            return Ok(result);
        }


    }
}