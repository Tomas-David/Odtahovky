using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Odtahovky.Server.Models;
namespace Odtahovky.Server.Data
{
    public class ApplicationDbContext: IdentityDbContext<IdentityUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Offers> Offers { get; set; }
        public DbSet<UsersDto> UsersDto { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Offers>().ToTable("Offers");
            modelBuilder.Entity<UsersDto>().ToTable("UsersDto");

            modelBuilder.Entity<Offers>()
                    .HasOne(o => o.Users)
                    .WithMany(u => u.Offers)
                    .HasForeignKey(o => o.UserId)
                    .OnDelete(DeleteBehavior.NoAction);


        }

    }
}
