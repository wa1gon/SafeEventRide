using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRHub.DTO
{
  public class Location
  {
    public decimal Lat { get; set; }
    public decimal Long { get; set; }
    public DateTime LocDTG { get; set; }
  }
}
