using System;
using System.IO;
using System.Threading;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace Company.Function
{
    public static class DoSomething
    {
        [FunctionName("DoSomethingSlow")]
        public static IActionResult RunSlow(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = "DoSomethingSlow")] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("Do Something Slow received a request.");
            Thread.Sleep(60 * 1000);
            string responseMessage = "Thanks for noticing me.";
            return new OkObjectResult(responseMessage);
        }

        [FunctionName("DoSomethingFast")]
        public static IActionResult RunFast(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = "DoSomethingFast")] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("Do Something Fast received a request.");
            string responseMessage = "Well, hello there!";
            return new OkObjectResult(responseMessage);
        }  
    }
}
