using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SignalRHub.DTO;

namespace SignalRHub.Services
{
  public class DatabaseAuth : IAuth
  {
    private IDatabase myDb;
    public DatabaseAuth(IDatabase db)
    {
      myDb = db;
    }
    public bool CheckCred(UserDTO user)
    {

      var storedUser = myDb.GetUserByUserId(user.UserId);
      if (storedUser.Password == user.Password)
      {
        storedUser.SessionId = Guid.NewGuid().ToString();
        user.SessionId = storedUser.SessionId;

        user.SessionTimeout = DateTime.Now.AddDays(1.0);
        storedUser.SessionTimeout = user.SessionTimeout;
        return true;
      }
      return false;
    }
  }
}
