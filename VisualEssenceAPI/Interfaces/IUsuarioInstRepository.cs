using VisualEssenceAPI.Models;

namespace VisualEssenceAPI.Interfaces
{
    public interface IUsuarioInstRepository
    {
        Task AddUsuarioInst(UserInst userInst);
        Task<bool> UsuarioExistente(string email);
        Task<UserInst> GetUsuarioInstByEmail(string email);
    }
}
