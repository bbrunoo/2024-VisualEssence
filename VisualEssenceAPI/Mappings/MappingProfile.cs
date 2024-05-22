using AutoMapper;
using VisualEssenceAPI.DTOs;
using VisualEssenceAPI.Models;

namespace VisualEssenceAPI.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile() { 
            CreateMap<UserPaisDTO, UserPais>();
            CreateMap<UserInstDTO, UserInst>();
        }
    }
}
