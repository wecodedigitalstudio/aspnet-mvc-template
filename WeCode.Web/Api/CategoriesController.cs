using FizzWare.NBuilder;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Web;
using System.Web.Http;
using WeCode.Web.Models;

namespace WeCode.Web.Api
{
    public class CategoriesController : ApiController
    {

        [HttpGet]
        public IHttpActionResult Index()
        {
            var categories = new List<Category>();

            categories.Add(new Category()
            {
                Code = "FullStack",
                Description = "Full Stack"
            });

            categories.Add(new Category()
            {
                Code = "BackEnd",
                Description = "Back End"
            });

            categories.Add(new Category()
            {
                Code = "FrontEnd",
                Description = "Front End"
            });

            return Ok(categories);
        }

    }
}