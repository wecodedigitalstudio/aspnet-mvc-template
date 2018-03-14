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
    public class DevsController : ApiController
    {

        private static IList<Developer> devs
        {
            get { return HttpContext.Current.Session["devs"] as IList<Developer>; }
            set { HttpContext.Current.Session["devs"] = value; }
        }

        public DevsController()
        {
            if(devs == null)
            {
                devs = Builder<Developer>
                .CreateListOfSize(100)
                .TheFirst(40)
                    .With(c => c.Category = "FullStack")
                .TheNext(30)
                    .With(c => c.Category = "BackEnd")
                .TheNext(30)
                    .With(c => c.Category = "FrontEnd")
                .All()
                    .With(c => c.FirstName = Faker.Name.First())
                    .With(c => c.LastName = Faker.Name.Last())
                    .With(c => c.Email = Faker.Internet.Email())
                    .With(c => c.Phone = Faker.Phone.Number())
                    .With(c => c.Birthday = new DateTime(Faker.RandomNumber.Next(1960, 2000), Faker.RandomNumber.Next(1, 12), Faker.RandomNumber.Next(1, 28)))
                .Build();
            }

        }


        [HttpGet]
        public IHttpActionResult Index()
        {
            return Ok(devs);
        }

        [HttpGet]
        public IHttpActionResult Details([FromUri] long id)
        {
            return Ok(devs.FirstOrDefault(d => d.Id == id));
        }

        [HttpPost]
        public IHttpActionResult Save([FromBody] Developer dev)
        {
            var selectedDev = devs.FirstOrDefault(d => d.Id == dev.Id);

            if(selectedDev != null)
            {
                selectedDev.FirstName = dev.FirstName;
                selectedDev.LastName = dev.LastName;
            }

            return Ok();
        }

        [HttpGet]
        [Route("api/devs/search")]
        public IHttpActionResult Search()
        {
            NameValueCollection nvc = HttpUtility.ParseQueryString(Request.RequestUri.Query);

            string search = nvc["search[value]"].ToLower();
            int draw = Convert.ToInt32(nvc["draw"]);
            int start = Convert.ToInt32(nvc["start"]);
            int length = Convert.ToInt32(nvc["length"]);
            string orderColumn = nvc["order[0][column]"];
            string orderDir = nvc["order[0][dir]"];

            switch (orderColumn)
            {
                case "0":
                    devs = orderDir == "asc" ? devs.OrderBy(d => d.Id).ToList() : devs.OrderByDescending(d => d.Id).ToList();
                    break;
                case "1":
                    devs = orderDir == "asc" ? devs.OrderBy(d => d.FirstName).ToList() : devs.OrderByDescending(d => d.FirstName).ToList();
                    break;
                case "2":
                    devs = orderDir == "asc" ? devs.OrderBy(d => d.LastName).ToList() : devs.OrderByDescending(d => d.LastName).ToList();
                    break;
                case "3":
                    devs = orderDir == "asc" ? devs.OrderBy(d => d.Category).ToList() : devs.OrderByDescending(d => d.Category).ToList();
                    break;
            }

            var filteredDevs = String.IsNullOrEmpty(search) ? devs : devs.Where(d => d.FirstName.ToLower().Contains(search) || d.LastName.ToLower().Contains(search) || d.Category.ToLower().Contains(search)).ToList();

            var pagedDevs = filteredDevs.Skip(start).Take(length).ToList();

            DataTablesResult<Developer> result = new DataTablesResult<Developer>()
            {
                draw = draw,
                recordsTotal = devs.Count,
                recordsFiltered = filteredDevs.Count,
                data = pagedDevs
            };

            return Ok(result);
        }

    }
}