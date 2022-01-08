import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Heading2 } from "./ui/typography/Heading2";

const containerStyle = {
  width: "100%",
  height: "400px",
  margin: "24px 0",
};

type LocationMapProps = {
  isMarkerShown?: boolean;
};

export const LocationMap = ({ isMarkerShown }: LocationMapProps) => {
  return (
    <section>
      <Heading2>KDE NÁS NAJDETE</Heading2>
      <LoadScript googleMapsApiKey={process.env.googleMapsApi || ""}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat: 50.09275, lng: 14.446 }}
          zoom={15}
        >
          {/* Child components, such as markers, info windows, etc. */}
          {isMarkerShown && (
            <Marker position={{ lat: 50.09275, lng: 14.446 }} />
          )}
        </GoogleMap>
      </LoadScript>
    </section>
  );
};
