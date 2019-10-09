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

    }
  }
}

