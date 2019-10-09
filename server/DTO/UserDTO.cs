using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRHub.DTO
{
  public class UserDTO
  {
    public string UserId { get; set; }
    public string EventId { get; set; }
    public string Phone { get; set; }
    public string UserType { get; set; }
    public string Password { get; set; }
  }
}
