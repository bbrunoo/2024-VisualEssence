using Microsoft.EntityFrameworkCore;
using VisualEssenceAPI.Context;
using VisualEssenceAPI.Interfaces;
using VisualEssenceAPI.Models;

namespace VisualEssenceAPI.Repositories
{
    public class UsuarioInstRepository : IUsuarioInstRepository
    {
        private readonly ApplicationDbContext _context;

        public UsuarioInstRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task AddUsuarioInst(UserInst userInst)
        {
            await _context.UserInst.AddAsync(userInst);
            await _context.SaveChangesAsync();
        }

        public async Task<bool> UsuarioExistente(string email)
        {
            return await _context.UserInst.AnyAsync(e => e.Email == email);
        }

        public async Task<UserInst> GetUsuarioInstByEmail(string email)
        {
            return await _context.UserInst.FirstOrDefaultAsync(e => e.Email == email);
        }
    }
}


