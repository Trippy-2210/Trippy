import { useState } from "react";
import PlaceAutocomplete from "../../components/trips/PlaceAutocomplete";
import styles from "../../styles/addtrip.module.css";

export default function Addtrip() {
  const [city, setCity] = useState(null);
  return (
    <div className={styles.searchbar}>
      <PlaceAutocomplete city={city} setCity={setCity} />
    </div>
  );
}
