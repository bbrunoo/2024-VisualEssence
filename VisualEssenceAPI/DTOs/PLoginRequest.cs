using System.ComponentModel.DataAnnotations;

namespace VisualEssenceAPI.DTOs
{
    public class PLoginRequest
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        public string Senha { get; set; }
    }
}
