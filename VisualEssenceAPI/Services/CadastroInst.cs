using AutoMapper;
using VisualEssenceAPI.DTOs;
using VisualEssenceAPI.Interfaces;
using VisualEssenceAPI.Models;

namespace VisualEssenceAPI.Services
{
    public class CadastroInst
    {
        private readonly IUsuarioInstRepository _usuarioInstRepository;
        private readonly IMapper _mapper;

        public CadastroInst(IUsuarioInstRepository usuarioInstRepository, IMapper mapper)
        {
            _usuarioInstRepository = usuarioInstRepository;
            _mapper = mapper;
        }

        public async Task ExcetuteAsyncs(UserInstDTO userInstDTO)
        {
            var user = _mapper.Map<UserInst>(userInstDTO);
            user.Senha = BCrypt.Net.BCrypt.HashPassword(userInstDTO.Senha);
            await _usuarioInstRepository.AddUsuarioInst(user);
        }
    }
}
