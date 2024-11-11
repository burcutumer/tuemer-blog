using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data.Dtos;
using API.Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Storage;

namespace API.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<Author> _userManager;
        public UserService(UserManager<Author> userManager)
        {
            _userManager = userManager;
        }
        public async Task<Response<AuthorDto>> RegisterAsync(RegisterUserDto userDto)
        {
            if (userDto == null)
            {
                var user = new Author
                {
                    FullName = userDto!.FullName,
                    UserName = userDto.UserName,
                    Email = userDto.Email,
                };
                var result = await _userManager.CreateAsync(user, userDto.Password);
                if (!result.Succeeded)
                {
                    return new Response<AuthorDto>
                    {
                        Error = result.Errors.Select(x => x.Description).ToList(),
                    };
                }
                return new Response<AuthorDto>
                {
                    Data = new AuthorDto
                    {
                        FullName = userDto.FullName,
                        Email = userDto.Email,
                        UserName = userDto.UserName
                    }
                };
            }
            return new Response<AuthorDto> { Error = "User cant created" };
        }

        public async Task<Response<AuthorDto>> GetCurrentUserAsync(string userEmail)
        {
            var user = await _userManager.FindByEmailAsync(userEmail);
            if (user == null)
                {
                    return new Response<AuthorDto>
                    {
                        Error = "User not found"
                    };
                }
                return new Response<AuthorDto>
                {
                    Data = new AuthorDto
                    {
                        FullName = user!.FullName,
                        Email = user.Email,
                        UserName = user.UserName!
                    }
                };
        }
    }
}