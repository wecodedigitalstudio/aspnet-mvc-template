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
            return Ok(new List<string>() { "FullStack", "FrontEnd", "BackEnd" });
        }

    }
}