using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using API.Data.Dtos;
using API.Domain;
using API.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;

namespace API.Controllers
{
    public class AuthController : BaseApiController
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;

        }

        [HttpPost("login")]
        public async Task<ActionResult<Response<LoginResponseDto>>> CheckUserCredentials(LoginRequestDto requestDto)
        {
            var result =  await _authService.CheckUserCredentialsAsync(requestDto);

            if (result.Error != null)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

    }
}