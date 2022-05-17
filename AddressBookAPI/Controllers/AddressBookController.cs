using Microsoft.AspNetCore.Mvc;
using AddressBook.Models;
using AddressBook.Services;
using AddressBook.DTO;

namespace AddressBook.Controllers
{
    [Route("api/AddressBook")]
    [ApiController]
    public class AddressBookController : ControllerBase
    {
        private readonly IAddressBookService AddressBookService;
        public AddressBookController(IAddressBookService contact)
        {
            AddressBookService = contact;
        }
        [HttpGet("")]
        public IEnumerable<Contact> GetContacts()
        {
            return AddressBookService.GetContacts();
        }
        [HttpPost("")]
        public Contact AddContact(Contact contact)
        {
            return AddressBookService.AddContact(contact);
        }
        [HttpPut("{id}")]
        public Contact EditContact(int id,Contact contact)
        {
            return AddressBookService.UpdateContact(id,contact);
        }
        [HttpDelete("{id}")]
        public Contact DeleteContact(int id)
        {
            return AddressBookService.DeleteContact(id);
        }
        [HttpGet("{id}")]
        public Contact GetContact(int id)
        {
            return AddressBookService.GetContact(id);
        }
    }
}
