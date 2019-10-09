using SignalRHub.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRHub.Services
{
  public interface IDatabase
  {

    User GetUserByUserId(string bibNum);
    User GetUserById(string id);
    void AddUser(User user);
    void DeleteUserById(string id);
    void DeleteUserByUserId(string bib);
    void UpdateUser(User user);
    void UpdateSignalRId(string userId, string id);
  }
}
