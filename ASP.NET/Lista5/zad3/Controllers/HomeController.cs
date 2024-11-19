using Microsoft.AspNetCore.Mvc;
// using Newtonsoft.Json;
using System.Diagnostics;
using System.Text;

namespace zad3.Controllers
{
    public class HomeController : Controller
    {
        private static int calcSignature(string filename, long fileSize)
        {
            int signature = 0;
            foreach (char c in filename)
            {
                signature += c;
            }
            signature += (int)fileSize;
            return signature % 0xFFFF;
        }
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        async public Task<ActionResult> Index(IFormFile file)
        {
            if ( file != null )
            {
                string fileName = file.FileName;
                var fileSize = file.Length;
                int signature = calcSignature(fileName, fileSize);
                string xml = $@"
    <opis>
        <filename>{fileName}</filename>
        <filesize>{fileSize}</filesize>
        <signature>{signature}</signature>
    </opis>";
                this.Response.Clear();
                this.Response.ContentType = "text/xml";
              
                this.Response.Headers.Append("Content-Disposition", "attachment; filename=opis.xml");
                //await this.Response.WriteAsync(xml);

                return this.File(Encoding.UTF8.GetBytes(xml), "text/xml");
            }
            else
            {
                this.Response.StatusCode = 400;
                await this.Response.WriteAsync("No file uploaded");
            }

            
            return Ok();
            
        }
    }
}