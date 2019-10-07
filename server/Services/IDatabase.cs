using SignalRHub.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRHub.Services
{
  public interface IDatabase
  {

    User GetUserByBib(string bibNum);
    User GetUserById(string id);
    void AddUser(User user);
    void DeleteUserById(string id);
    void DeleteUserByBib(string bib);
    void UpdateUser(User user);
  }
}
