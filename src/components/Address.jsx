import React from "react";  
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 13.056194767640042, 
  lng: 80.25555718742694, 
};

const Address = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-20 px-6 bg-white text-black">
      <div className="max-w-4xl text-center mt-2">
        <h4 className="text-xs">COME VISIT US</h4>
      </div>
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold leading-tight mb-6">Store Address</h1>
      </div>

      
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-6 mt-6">
      
        <div className="md:w-1/2 w-full h-80">
          <LoadScript googleMapsApiKey="GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>

        
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <p className="text-lg">
            Sayar Jewellers, 656, Mount Rd, Thousand Lights East, Thousand Lights,<br />
            Chennai, Tamil Nadu, 600006<br />
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Address;