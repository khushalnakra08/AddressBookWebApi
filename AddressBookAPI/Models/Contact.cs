﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AddressBook.Models
{
    public partial class Contact
    {
        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? Mobile { get; set; }
        public string? Landline { get; set; }
        public string? Website { get; set; }
        public string? Address { get; set; }
    }
}
