import React from 'react';
import GoogleMaps from '../googleMaps/google-maps';

const Map = () => {
    return (
        <>
            <GoogleMaps apiKey="AIzaSyAJ6LJp9PejsbqwPmK4kiTCWDKFmMETcaQ" />
            <div className="bg-gray-400 w-5/6 h-full text-white flex flex-col justify-center items-center">
                oi como voce ta ?
            </div>
        </>
    );
};

export default Map;
