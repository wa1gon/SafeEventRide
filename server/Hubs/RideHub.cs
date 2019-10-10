using Microsoft.AspNetCore.SignalR;
using SignalRHub.DTO;
using SignalRHub.Models;
using SignalRHub.Services;
using System;
using System.Threading.Tasks;

namespace SignalRHub
{
  public class RideHub : Hub
  {
    private IDatabase myDb;
    private IAuth myAuth;
    private static int counter = 0;
    public RideHub(IDatabase db, IAuth auth)
    {
      myDb = db;
      myAuth = auth;
    }
    public void UpdateLocation(string locationString)
    {


    }
    public void LoginInRider(UserDTO user)
    {
      Console.WriteLine($"{user.ToString()}");
      var id = Context.ConnectionId;

      var isAuth = myAuth.CheckCred(user);
      Console.WriteLine($"auth is: {isAuth}");
      if (!isAuth)
      {
        return;
      }
      myDb.UpdateSignalRId(user.UserId, id);
      var status = new LoginStatusDTO();
      status.Status = "OK";
      status.Reason = "Success";
      status.SessionId = user.SessionId;
      status.SessionTimeout = user.SessionTimeout;

      Clients.Client(id).SendAsync("LoginResponse", status);
      switch(user.UserType.ToLower())
      {
        case "r":
          Groups.AddToGroupAsync(id, "rider");
          break;
        case "s":
          Groups.AddToGroupAsync(id, "sag");
          break;
        case "n":
          Groups.AddToGroupAsync(id, "net");
          break;
      }
    }
    public void Location(Location loc)
    {
      var user = myDb.GetUserBySessionId(loc.SessionId);
      if (user == null) return;
      counter++;
      Console.WriteLine($"loc: {loc.Lat} {loc.Long} {counter} {user.SessionId}");

    }
  }
}

