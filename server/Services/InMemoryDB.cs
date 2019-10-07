using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SignalRHub.Models;

namespace SignalRHub.Services
{
  public class InMemoryDB : IDatabase
  {
    public void AddUser(User user)
    {
      throw new NotImplementedException();
    }

    public void DeleteUserByBib(int bib)
    {
      throw new NotImplementedException();
    }

    public void DeleteUserById(string id)
    {
      throw new NotImplementedException();
    }

    public User GetUserByBib(int bibNum)
    {
      throw new NotImplementedException();
    }

    public User GetUserById(string id)
    {
      throw new NotImplementedException();
    }

    public void UpdateUser(User user)
    {
      throw new NotImplementedException();
    }
  }
}
