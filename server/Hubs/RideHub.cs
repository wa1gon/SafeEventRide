using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

namespace SignalRHub
{
  public class RideHub : Hub<ITypedHubClient>
  {
    public void UpdateLocation(string locationString)
    {


    }
    public void LoginInRider(string bib)
    {
      Console.WriteLine(bib);
      var id = Context.ConnectionId;
      Console.WriteLine(id);
    }
  }
}

