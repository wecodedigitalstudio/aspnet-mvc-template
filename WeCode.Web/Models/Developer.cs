﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WeCode.Web.Models
{
    public class Developer
    {
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Category { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public DateTime Birthday { get; set; }
    }
}