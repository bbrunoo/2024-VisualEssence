using System.ComponentModel.DataAnnotations;

namespace VisualEssenceAPI.Models
{
    public class UserInst
    {
        public UserInst()
        {
        }

        [Key]
        public Guid Id { get; set; }

        [Required]
        [MaxLength(255)]
        public string NomeInst { get; set; }

        [Required]
        [EmailAddress]
        [MaxLength(255)]
        public string Email { get; set; }

        [Required]
        public string CNPJ { get; set; }

        [Required]
        public string Senha { get; set; }

        [Required]
        public bool IsAdmin { get; set; }

        public UserInst(string nomeInst, string email, string cnpj, string senha, bool isAdmin)
        {
            Id = Guid.NewGuid();
            NomeInst = nomeInst;
            Email = email;
            CNPJ = cnpj;
            Senha = senha;
            IsAdmin = isAdmin;
        }
    }
}
