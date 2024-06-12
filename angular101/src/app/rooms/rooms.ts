export interface Room{
    totalRooms: number;
    availableRooms?:number;
    bookedRooms:number;
}

export interface RoomList{
    type: string;
    occupancy: number;
    amenities: string;
    price: number;
    photos: string;
    ratings: number;
    checkinTime:Date;
    checkoutTime: Date;
}