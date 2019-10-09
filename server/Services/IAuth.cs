using SignalRHub.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRHub.Services
{
  public interface IAuth
  {
    bool CheckCred(UserDTO user);
  }
}
