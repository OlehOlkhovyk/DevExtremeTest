using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DevExtreme2.Controllers
{
    //http://localhost:63871/api/DataService
    [Route("api/[controller]")]
    public class DataService : Controller
    {
        // GET: api/<controller>
        [HttpGet]
        public string Get()
        {
            string json;
            using (StreamReader r = new StreamReader(@"D:\Workuta\DevExtreme\ProjTest\Test2\DevExtreme2\wwwroot\js\СustomersData.json"))
            {
                json = r.ReadToEnd();
            }
            return json;
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            //Newtonsoft.Json.JsonConvert.DeserializeObject<Mycustomclassname>(jsonString);
            string json;
            using (StreamReader r = new StreamReader(@"D:\Workuta\DevExtreme\ProjTest\Test2\DevExtreme2\wwwroot\js\OrdersData.json"))
            {
                json = r.ReadToEnd();
                var ordersList =  JsonConvert.DeserializeObject<OrdersData>(json);
                ordersList.data = ordersList.data.Where(row => row.CustomerId == id).ToList();
                json = JsonConvert.SerializeObject(ordersList);
            }
            
            return json;
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, Customer values)
        {
            int key2 = id;
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

    public class Customer
    {
        public int ID { get; set; }
        public string CompanyName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zipcode { get; set; }
        public string Phone { get; set; }
        public string Fax { get; set; }
        public string Website { get; set; }
    }
    public class Orders
    {
        public int ID { get; set; }
        public int CustomerId { get; set; }
        public string ProductName { get; set; }
        public int CountProd { get; set; }
        public int VendorID { get; set; }
        public string Vendor { get; set; }
        public DateTime OrderDate { get; set; }
    }
    public class OrdersData
    {
        public List<Orders> data { get; set; }
    }
}
