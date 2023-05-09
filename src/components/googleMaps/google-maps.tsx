import { useEffect, useState } from "react";

type Props = {
    apiKey: string;
    libraries?: string[];
};

const GoogleMaps: React.FC<Props> = ({ apiKey, libraries = [] }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?libraries=places&language=en&key=${apiKey}`;
        script.defer = true;
        script.async = true;
        script.addEventListener("load", () => setIsLoaded(true));
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <>{isLoaded && <></>}</>;
};

export default GoogleMaps;