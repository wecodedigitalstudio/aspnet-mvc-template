using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using WeCode.Web.Models;
using FizzWare.NBuilder;

namespace WeCode.Web.Api
{
    public class CountriesController : ApiController
    {
        private static IList<Country> countries
        {
            get { return HttpContext.Current.Session["countries"] as IList<Country>; }
            set { HttpContext.Current.Session["countries"] = value; }
        }

        public CountriesController()
        {
            if (countries == null)
            {
                countries = Builder<Country>
                .CreateListOfSize(100)
                .All()
                    .With(c => c.Description = Faker.Address.City())
                .Build();
            }
        }

        [HttpGet]
        public IHttpActionResult Index(string fulltext = "")
        {
            return Ok(countries.Where(c => c.Description.Contains(fulltext)));
        }
    }
}