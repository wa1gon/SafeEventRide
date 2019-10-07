﻿using Microsoft.AspNetCore.SignalR;
using SignalRHub.DTO;
using SignalRHub.Services;
using System;
using System.Threading.Tasks;

namespace SignalRHub
{
  public class RideHub : Hub<ITypedHubClient>
  {
    public DateTime dtg = DateTime.Now;
    public RideHub(IDatabase db)
    {
      Console.WriteLine(dtg);

    }
    public void UpdateLocation(string locationString)
    {


    }
    public void LoginInRider(UserDTO bib)
    {
      Console.WriteLine($"{bib.ToString()}");
      var id = Context.ConnectionId;
      switch(bib.UserType.ToLower())
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

