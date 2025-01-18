using System.ComponentModel.DataAnnotations;

namespace Odtahovky.Server.Models
{
    public class UsersDto
    {
        [Key]
        public Guid UserId { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }

        //cizí klíč
        public ICollection<Offers> Offers { get; set; } = new List<Offers>();

    }
}
