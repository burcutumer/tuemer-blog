using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using API.Data.Dtos;
using API.Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;

namespace API.Services
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<Author> _userManager;
        private readonly SignInManager<Author> _signInManager;
        private readonly string _secretKey;
        public AuthService(UserManager<Author> userManager, SignInManager<Author> signInManager, IConfiguration config)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _secretKey = config["Jwt:Secret"] ?? throw new ArgumentNullException("Jwt:Secret configuration is missing");
        }

        private static string GenerateJwtToken(string secretKey, int expireMinutes, List<Claim> claims)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddMinutes(expireMinutes),
                signingCredentials: creds
            );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public async Task<Response<LoginResponseDto>> CheckUserCredentialsAsync(LoginRequestDto requestDto)
        {
            var user = await _userManager.FindByEmailAsync( requestDto.Email);

            if (user == null)
            {
                return new Response<LoginResponseDto>
                {
                    Error = "User is not found",
                };
            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, requestDto.Password, false);

            if (!result.Succeeded)
            {
                return new Response<LoginResponseDto>
                {
                    Error = "Password or User Email is wrong",
                };
            }
            var claims = new List<Claim>{
                new Claim(ClaimTypes.Name, requestDto.Email)
            };

            Console.WriteLine(_secretKey);
            var token = GenerateJwtToken(_secretKey, 10, claims);
            var data = new LoginResponseDto
            {
                JwtToken = token
            };
            return new Response<LoginResponseDto>
            {
                Data = data,
                Error = null
            };
        }
    }
}