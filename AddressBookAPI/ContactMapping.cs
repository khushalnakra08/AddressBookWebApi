using AddressBook.Models;
using AddressBook.DTO;
using AutoMapper;

namespace AddressBook
{
    public class ContactMapping:Profile
    {
        public ContactMapping()
        {
            CreateMap<Contact, ContactDTO>().ReverseMap();
        }
    }
}
