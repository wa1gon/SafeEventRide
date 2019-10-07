using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SignalRHub.Models;

namespace SignalRHub.Services
{
  public class InMemoryDB : IDatabase
  {
    private List<User> Users = new List<User>();
    public InMemoryDB()
    {



    }

    public void AddUser(User user)
    {
      Users.Add(user);
    }

    public void DeleteUserByBib(string bib)
    {
      Users.RemoveAll(item => item.UserId == bib);
    }

    public void DeleteUserById(string id)
    {
      Users.RemoveAll(item => item.Id == id);
    }

    public User GetUserByBib(string bibNum)
    {
      var rc = Users.Find(item => item.Id == bibNum);
      return rc;
    }

    public User GetUserById(string id)
    {
      var rc = Users.Find(item => item.UserId == id);
      return rc;
    }

    public void UpdateUser(User user)
    {
      throw new NotImplementedException();
    }
  }
}
