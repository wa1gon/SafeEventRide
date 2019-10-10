using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRHub.Models
{
  public class LoginStatusDTO
  {
    public string Status { get; set; }
    public string Reason { get; set; }
    public string SessionId { get; set; }
    public DateTime SessionTimeout { get; set; }
  }
}
