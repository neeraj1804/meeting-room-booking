const roomList = [{
  roomId: 1,
  name: "Meeting Room 1",
  capacity: 6,
  area: "C Wing",
  bookings: {
    "23-05-2021": {
      data: [{
        bookingId: "bookingId1"
      }, {
        bookingId: "bookingId2"
      }]
    }
  }
},{
  roomId: 2,
  name: "Meeting Room 2",
  capacity: 4,
  area: "B Wing",
  bookings: {
    "23-05-2021": {
      data: [{
        bookingId: "bookingId3"
      }, {
        bookingId: "bookingId4"
      }]
    }
  }
}];
export default roomList;