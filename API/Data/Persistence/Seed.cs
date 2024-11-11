using API.Domain;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<Author> userManager)
        {
            if (context.Entries.Any()) return;

            var Title1 = new Title
            {
                Header = "Title1",
            };


            var Title2 = new Title
            {
                Header = "Title2",
            };

            var Title3 = new Title
            {
                Header = "Title3",
            };

            var Burcucuk = new Author
            {
                FullName = "Burcu Tumer",
                AvatarUrl = "my-avatar-url",
                Email = "burcu@mail.com",
                UserName = "burcucuk"
            };

            var Mert = new Author
            {
                FullName = "Mert Tumer",
                AvatarUrl = "my-avatar-urlMert",
                Email = "mert@mail.com",
                UserName = "merttumer"
            };

            await userManager.CreateAsync(Burcucuk, "Pa$$w0rd!");
            await userManager.CreateAsync(Mert, "Pa$$w0rd!");

            var entries = new List<Entry>
            {
                new Entry
                {
                     Title = Title1,
                     Message = "this is my first Entry",
                     Likes = 20,
                     Dislikes = 2,
                     Date = DateTime.UtcNow,
                     Author  = Burcucuk,
                },
                new Entry
                {
                     Title = Title1,
                     Message = "this is my 2nd Entry",
                     Likes = 20,
                     Dislikes = 2,
                     Date = DateTime.UtcNow.AddDays(1),
                     Author = Mert,
                },
                new Entry
                {
                     Title = Title2,
                     Message = "this is my 3 Entry",
                     Likes = 88,
                     Dislikes = 8,
                     Date = DateTime.UtcNow,
                     Author = Burcucuk,
                },
                new Entry
                {
                     Title = Title2,
                     Message = "this is my 4 Entry",
                     Likes = 10,
                     Dislikes = 12,
                     Date = DateTime.UtcNow,
                     Author = Mert,
                },
                new Entry
                {
                     Title = Title3,
                     Message = "this is my 5 Entry",
                     Likes = 250,
                     Dislikes = 52,
                     Date = DateTime.UtcNow,
                     Author = Mert
                }
            };

            await context.Entries.AddRangeAsync(entries);
            await context.SaveChangesAsync();
        }
    }
}