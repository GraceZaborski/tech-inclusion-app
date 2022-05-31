import React from "react";
import ArrowBack from "@mui/icons-material/ArrowBack";

function SearchResults({ title, onLinkPressed }) {
  const searchResultData = {
    "Find out more about Vanuatu":
      "Vanuatu (English: /ˌvɑːnuˈɑːtuː/ (listen) VAH-noo-AH-too or /vænˈwɑːtuː/ van-WAH-too; Bislama and French pronunciation [vanuatu]), officially the Republic of Vanuatu (French: République de Vanuatu; Bislama: Ripablik blong Vanuatu), is an island country located in the South Pacific Ocean. The archipelago, which is of volcanic origin, is 1,750 km (1,090 mi) east of northern Australia, 540 km (340 mi) northeast of New Caledonia, east of New Guinea, southeast of the Solomon Islands, and west of Fiji.",
    "Vanuatu- facts and figures":
      "1. Vanuatu is located in the South Pacific Ocean in Oceania. Vanuatu is an archipelago of about 80 smaller islands, 65 of these are inhabited. 2. The Republic of Vanuatu belongs to Melanesia, which is is a region in Oceania. Vanuatu is the smallest country of the five independent countries in Melanesia. - The other four countries are Fiji, East Timor, Papua New Guinea and the Solomon Islands - parts of Indonesia and French New Caledonia also belong to Melanesia.",
    "Vanuatu- major cities":
      "Vanuatu, country in the southwestern Pacific Ocean, consisting of a chain of 13 principal and many smaller islands located about 500 miles (800 km) west of Fiji and 1,100 miles (1,770 km) east of Australia. The nation's largest towns are the capital Port Vila, which is situated on Efate, and Luganville, on Espiritu Santo. The highest point in Vanuatu is Mount Tabwemasana, at 1879 m (6158 ft), on the island of Espiritu Santo. ",
  };

  const description = searchResultData[title];

  return (
    <div style={{ padding: "10px", "max-width": "100%" }}>
      <ArrowBack
        sx={{ fontSize: 60 }}
        onClick={() => onLinkPressed(false, "")}
      />
      <div style={{ padding: "50px", fontSize: "25px", lineHeight: "2em" }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SearchResults;
