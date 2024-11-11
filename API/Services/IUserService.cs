using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace API.Services
{
    public interface IUserService
    {
        Task<Response<AuthorDto>> RegisterAsync(RegisterUserDto userDto);
        Task<Response<AuthorDto>> GetCurrentUserAsync(string userEmail);
    }
}