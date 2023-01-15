import dynamic from "next/dynamic";

const GooglePlacesAutocomplete = dynamic(
  () => import("react-google-places-autocomplete"),
  {
    ssr: false,
  }
);

const key = process.env.NEXT_PUBLIC_GOOGLE_API;

export default function PlaceAutocomplete({ city, setCity }) {
  return (
    <GooglePlacesAutocomplete
      apiKey={key}
      minLengthAutocomplete={3}
      autocompletionRequest={{ types: ["locality"] }}
      selectProps={{
        city,
        onChange: setCity,
      }}
    />
  );
}

// add google api key to .env.local

// pass a useState variable and setter (city, setCity)
// below is what is put into the "city" prop as the result of the search

//looks like all we need is city.label to keep track of the cities.

// const results = {
//   label: "Paris, France",
//   value: {
//     description: "Paris, France",
//     matched_substrings: ["{length: 5, offset: 0}", "{length: 6, offset: 7}"],
//     place_id: "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
//     reference: "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
//     structured_formatting: {
//       main_text: "Paris",
//       main_text_matched_substrings: "[{…}]",
//       secondary_text: "France",
//       secondary_text_matched_substrings: "[{…}]",
//     },
//     terms: ['{offset: 0, value: "Paris"}', '{offset: 7, value: "France"}'],
//     types: ["locality", "political", "geocode"],
//   },
// };
