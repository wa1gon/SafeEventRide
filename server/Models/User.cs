using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRHub.Models
{
  public class User
  {
    public string Id { get; set; }
    public string UserId { get; set; }
    public string EventId { get; set; }
    public string Phone { get; set; }
    public string UserType { get; set; }
    public string Password { get; set; }
    public string LoginStatus { get; set; }
    

    public User()
    {
      LoginStatus = "none";
    }
  }
}
