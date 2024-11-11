using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data.Dtos;

namespace API.Services
{
    public interface IAuthService
    {
        Task<Response<LoginResponseDto>> CheckUserCredentialsAsync(LoginRequestDto requestDto);
    }
}