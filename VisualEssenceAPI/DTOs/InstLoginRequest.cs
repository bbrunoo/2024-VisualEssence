using System.ComponentModel.DataAnnotations;

namespace VisualEssenceAPI.DTOs
{
    public class InstLoginRequest
    {
        [Required]
        [EmailAddress]
        public string EmailInst { get; set; }
        public string Senha { get; set; }
    }
}
