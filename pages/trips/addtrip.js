import { useState } from "react";
import PlaceAutocomplete from "../../components/trips/PlaceAutocomplete";

export default function Addtrip() {
  const [value, setValue] = useState(null);
  return (
    <div>
      <div>
        <PlaceAutocomplete value={value} setValue={setValue} />
      </div>
    </div>
  );
}

// const values = {
//   description: "Santa Fe, NM, USA",
//   matched_substrings: "[{…}]",
//   place_id: "ChIJqVKY50NQGIcRQN-I_XMjkIw",
//   reference: "ChIJqVKY50NQGIcRQN-I_XMjkIw",
//   structured_formatting:
//     '{main_text: "Santa Fe", main_text_matched_substring…}',
//   terms: "[{…}, {…}, {…}]",
//   types: '["locality", "political", "geocode"]',
// };
