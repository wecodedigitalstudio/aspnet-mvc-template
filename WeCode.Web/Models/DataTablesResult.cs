using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WeCode.Web.Models
{
    public class DataTablesResult<T>
    {
        public int draw { get; set; }
        public long recordsTotal { get; set; }
        public long recordsFiltered { get; set; }

        public IList<T> data { get; set; }

        public DataTablesResult()
        {
            this.data = new List<T>();
        }
        

    }
}