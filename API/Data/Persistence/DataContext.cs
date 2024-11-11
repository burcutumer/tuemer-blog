using API.Data.Domain;
using API.Domain;
using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<Author, AuthorRole, int>
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Entry> Entries { get; set; }
        public DbSet<Title> Titles { get; set; }
        public DbSet<Author> Authors { get; set; }

    }
}