using System.ComponentModel.DataAnnotations;

namespace AddressBook.DTO
{
    public class ContactDTO
    {
        [Key]
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? Mobile { get; set; }
        public string? Landline { get; set; }
        public string? Website { get; set; }
        public string? Address { get; set; }
    }
}
