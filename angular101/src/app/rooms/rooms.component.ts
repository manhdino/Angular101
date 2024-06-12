import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {

  hotelName:string = 'Dino Hotel';

  imageUrl: string = 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg';
  imageAlt: string = 'Example Image';
  isHidden: boolean = false;
  isDisabled: boolean = false;
  
  rooms: Room = {
    totalRooms:20,
    availableRooms: 10,
    bookedRooms: 5
  };

  roomList: RoomList[]  = [
    {
    type:"Deluxe Room",
    occupancy: 2, 
    amenities:"Air conditioner, Free Wifi , TV, Bathroom, Kitchen", 
    price: 500,
    ratings: 2.4,
    photos:"images rooms 1",
    checkinTime: new Date("11-Nov-2021"),
    checkoutTime:new Date("16-Nov-2021")
  },
   {
    type:"Deluxe Room",
    occupancy: 4, 
    amenities:"Air conditioner, Free Wifi , TV, Bathroom, Kitchen", 
    price: 1000,
    ratings: 4.2,
    photos:"images rooms 1",
    checkinTime: new Date("12-Nov-2021"),
    checkoutTime:new Date("18-Nov-2021")
   },
   {
  type:"Private Suite",
    occupancy: 2, 
    amenities:"Air conditioner, Free Wifi , TV, Bathroom, Kitchen", 
    price: 1000,
    ratings:3.6,
    photos:"images rooms 1",
    checkinTime: new Date("10-Nov-2021"),
    checkoutTime:new Date("12-Nov-2021")
   }  ,
     {
    type:"Deluxe Room",
    occupancy: 2, 
    ratings: 4.5,
    amenities:"Air conditioner, Free Wifi , TV, Bathroom, Kitchen", 
    price: 500,
    photos:"images rooms 1",
    checkinTime: new Date("11-Nov-2021"),
    checkoutTime:new Date("16-Nov-2021")
  },
   {
    type:"Deluxe Room",
    occupancy: 4, 
    ratings: 3.2,
    amenities:"Air conditioner, Free Wifi , TV, Bathroom, Kitchen", 
    price: 1000,
    photos:"images rooms 1",
    checkinTime: new Date("12-Nov-2021"),
    checkoutTime:new Date("18-Nov-2021")
   },
  ];

  onClick(): void {
    this.isHidden = !this.isHidden;
  }
}
