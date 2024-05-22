using VisualEssenceAPI.Models;

namespace VisualEssenceAPI.Interfaces
{
    public interface IUsuarioPaisRepository
    {
        Task AddUsuarioPais(UserPais userpais);
        Task<bool> UsuarioExistente(string email);
        Task<UserPais> GetUsuarioByEmail (string email);    

    }
}
