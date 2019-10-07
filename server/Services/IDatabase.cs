using SignalRHub.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRHub.Services
{
  public interface IDatabase
  {
    User GetUserByBib(int bibNum);
    User GetUserById(string id);
    void AddUser(User user);
    void DeleteUserById(string id);
    void DeleteUserByBib(int bib);
    void UpdateUser(User user);
  }
}
