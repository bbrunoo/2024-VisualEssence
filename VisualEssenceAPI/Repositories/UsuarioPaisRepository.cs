using Microsoft.EntityFrameworkCore;
using VisualEssenceAPI.Context;
using VisualEssenceAPI.Interfaces;
using VisualEssenceAPI.Models;

namespace VisualEssenceAPI.Repositories
{
    public class UsuarioPaisRepository : IUsuarioPaisRepository
    {
        private readonly ApplicationDbContext _context;

        public UsuarioPaisRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<bool> UsuarioExistente(string email)
        {
            return await _context.UserPais.AnyAsync(e => e.Email == email);
        }

        public async Task AddUsuarioPais(UserPais userPais)
        {
            await _context.AddAsync(userPais);
            await _context.SaveChangesAsync();
        }

        public async Task<UserPais> GetUsuarioByEmail(string email)
        {
            return await _context.UserPais.FirstOrDefaultAsync(e => e.Email == email);
        }

    }
}
