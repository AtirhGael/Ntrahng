declare interface Driver {
    id: number;
    first_name: string;
    last_name: string;
    profile_image_url: string;
    car_image_url: string;
    car_seats: number;
    rating: number;
  }
  declare interface MarkerData {
    latitude: number;
    longitude: number;
    id: number;
    title: string;
    profile_image_url: string;
    car_image_url: string;
    car_seats: number;
    rating: number;
    first_name: string;
    last_name: string;
    time?: number;
    price?: string;
  }
  declare interface MapProps {
    destinationLatitude?: number;
    destinationLongitude?: number;
    onDriverTimesCalculated?: (driversWithTimes: MarkerData[]) => void;
    selectedDriver?: number | null;
    onMapReady?: () => void;
  }
  
  export declare interface Ride {
    origin_address: string;
    destination_address: string;
    origin_latitude: number;
    origin_longitude: number;
    destination_latitude: number;
    destination_longitude: number;
    ride_time: number;
    fare_price: number;
    payment_status: string;
    driver_id: number;
    user_id: string;
    created_at: string;
    driver: {
      first_name: string;
      last_name: string;
      car_seats: number;
    };
  }
  
  export interface GoogleInputProps {
    icon?: string;
    initialLocation?: string;
    containerStyle?: string;
    textInputBackgroundColor?: string;
    handlePress: ({
      latitude,
      longitude,
      address,
    }: {
      latitude: number;
      longitude: number;
      address: string;
    }) => void;
  }
  