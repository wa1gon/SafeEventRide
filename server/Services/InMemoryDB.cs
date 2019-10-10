using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using SignalRHub.DTO;
using SignalRHub.Models;

namespace SignalRHub.Services
{
  public class InMemoryDB : IDatabase
  {
    private List<User> Users = new List<User>();
    public InMemoryDB()
    {
      seedDb();
    }

    public void AddUser(User user)
    {
      Users.Add(user);
    }

    public void DeleteUserByUserId(string bib)
    {
      Users.RemoveAll(item => item.UserId == bib);
    }

    public void DeleteUserById(string id)
    {
      Users.RemoveAll(item => item.Id == id);
    }

    public User GetUserByUserId(string userId)
    {
      var rc = Users.Find(item => item.UserId == userId);
      return rc;
    }

    public User GetUserById(string id)
    {
      var rc = Users.Find(item => item.Id == id);
      return rc;
    }
    public User GetUserBySessionId(string id)
    {
      var rc = Users.Find(item => item.SessionId == id);
      return rc;
    }

    public void UpdateUser(User user)
    {
      var updatedUser = GetUserByUserId(user.UserId);
      var config = new MapperConfiguration(cfg => cfg.CreateMap<User, UserDTO>());
      var mapper = new Mapper(config);

    }
    public void UpdateSignalRId(string userId, string id)
    {
      var updatedUser = GetUserByUserId(userId);
      updatedUser.Id = id;
    }
    private void seedDb()
    {
      Users.Add(new User { UserId = "101", EventId= "EventBV2012", Phone = "603-555-5555", Password = "1111", UserType = "rider"});
      Users.Add(new User { UserId = "102", EventId = "EventBV2012", Phone = "603-555-5555", Password = "1111", UserType = "rider" });
      Users.Add(new User { UserId = "sag2", EventId = "EventBV2012", Phone = "603-555-5555", Password = "1111", UserType = "sag" });
      Users.Add(new User { UserId = "sag1", EventId = "EventBV2012", Phone = "603-555-5555", Password = "1111", UserType = "sag" });
      Users.Add(new User { UserId = "Net", EventId = "EventBV2012", Phone = "603-555-5555", Password = "1111", UserType = "net" });
    }
  }

}
