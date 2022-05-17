using AddressBook.Models;
using AddressBook.DTO;
using Microsoft.AspNetCore.Mvc;

namespace AddressBook.Services
{
    public interface IAddressBookService
    {
        IEnumerable<Contact> GetContacts();
        Contact GetContact(int id);
        Contact AddContact(Contact contact);
        Contact UpdateContact(int id,Contact contact);
        Contact DeleteContact(int id);
    }
}
