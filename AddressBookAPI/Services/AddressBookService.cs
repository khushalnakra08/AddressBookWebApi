using AddressBook.Models;
using AddressBook.DTO;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AddressBook.Services
{
    public class AddressBookService : IAddressBookService
    {
        private readonly AddressBookContext Context;
        public IMapper Mapper;
        public AddressBookService(AddressBookContext context, IMapper mapper)
        {
            Context = context;
            Mapper = mapper;
        }

        public Contact AddContact(Contact contact)
        {
            if (contact != null)
            {
                Context.Contacts.Add(contact);
                Context.SaveChanges();
                return Mapper.Map<Contact>(contact);
            }
            return null;
        }

        public Contact DeleteContact(int id)
        {
            var contact = Context.Contacts.FirstOrDefault(x => x.Id == id);
            Context.Entry(contact).State = EntityState.Deleted;
            Context.SaveChanges();
            return Mapper.Map<Contact>(contact);

        }

        public IEnumerable<Contact> GetContacts()
        {
            var contact = Context.Contacts.ToList();
            return Mapper.Map<IEnumerable<Contact>>(contact);
        }

        public Contact GetContact(int id)
        {
            var contact = Context.Contacts.FirstOrDefault(x => x.Id == id);
            return Mapper.Map<Contact>(contact);
        }
        public Contact UpdateContact(int id, Contact contact)
        {
            var contactData = Context.Contacts.Where(model => model.Id == id).FirstOrDefault();
            if (contactData != null)
            {
                contact.Id=id;
                Context.Entry(contactData).CurrentValues.SetValues(contact);
            Context.SaveChanges();
            }
            return Mapper.Map<Contact>(contact);
        }
    }
}
