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
        [FunctionName("DoSomething")]
        public static IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("Do Something received a request.");
            Thread.Sleep(60 * 1000);

            string responseMessage = "Thanks for noticing me.";
            return new OkObjectResult(responseMessage);
        }
    }
}
