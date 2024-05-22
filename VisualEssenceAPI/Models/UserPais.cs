using System.ComponentModel.DataAnnotations;

namespace VisualEssenceAPI.Models
{
    public class UserPais
    {
        public UserPais()
        {
        }

        [Key]
        public Guid Id { get; set; }

        [Required]
        [MaxLength(255)]
        public string Nome { get; set; }

        [Required]
        [EmailAddress]
        [MaxLength(255)]
        public string Email { get; set; }

        [Required]
        public string Senha { get; set; }

        [Required]
        public bool IsAdmin { get; set; }

        public UserPais(string nome, string email, string senha, bool isAdmin)
        {
            Id = Guid.NewGuid();
            Nome = nome;
            Email = email;
            Senha = senha;
            IsAdmin = isAdmin;
        }
    }
}
