import { utils, writeFile } from "xlsx";

function ExportCSV({ stations }) {

  const exportData = () => {

    const data = stations.map((station) => ({
      Name: station.name,
      Address: station.address,
      Contact: station.contact,
      OpeningHours: station.open,
      Petrol: station.petrol ? "Yes" : "No",
      Diesel: station.diesel ? "Yes" : "No",
      CNG: station.cng ? "Yes" : "No",
      Latitude: station.lat,
      Longitude: station.lng,
      GoogleMap: station.mapLink,
    }));

    const worksheet = utils.json_to_sheet(data);

    const workbook = utils.book_new();

    utils.book_append_sheet(
      workbook,
      worksheet,
      "Stations"
    );

    writeFile(workbook, "PumpTrack_Stations.xlsx");
  };

  return (
    <button
      className="details-btn"
      style={{ marginBottom: "20px" }}
      onClick={exportData}
    >
      📄 Export Stations
    </button>
  );
}

export default ExportCSV;
