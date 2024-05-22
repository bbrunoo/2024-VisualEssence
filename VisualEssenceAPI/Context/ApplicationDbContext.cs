using Microsoft.EntityFrameworkCore;
using VisualEssenceAPI.Models;

namespace VisualEssenceAPI.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<UserInst> UserInst{ get; set; }
        public DbSet<UserPais> UserPais{ get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
            modelBuilder.Entity<UserInst>().HasIndex(e => e.Email).IsUnique();
            modelBuilder.Entity<UserPais>().HasIndex(e => e.Email).IsUnique();
        }
    }
}
