using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using API.Data.Dtos;
using API.Domain;
using API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    public class UserController : BaseApiController
    {

        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;

        }

        [HttpPost("register")]
        public async Task<ActionResult<Response<AuthorDto>>> Register([FromBody] RegisterUserDto userDto)
        {
            var result = await _userService.RegisterAsync(userDto);

            if (result.Error != null)
            {
                return BadRequest(result);


            }
            return Ok(result);

        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<Response<AuthorDto>>> GetCurrentUser()
        {
            var userEmail = User.Identity.Name;

            if (userEmail != null)
            {
                var response = await _userService.GetCurrentUserAsync(userEmail);

                if (response.Error != null)
                {
                    return BadRequest(response);
                }
                return Ok(response);
            }
            return BadRequest();
        }
    }
}