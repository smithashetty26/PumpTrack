function AdminForm({
  station,
  setStation,
  editingId,
  handleSubmit,
  setEditingId,
  emptyStation,
}) {
  return (
    <>
      <h2 style={{ marginTop: "20px" }}>
        {editingId ? "✏️ Edit Station" : "➕ Add New Station"}
      </h2>

      <input
        className="search-input"
        type="text"
        placeholder="Station Name"
        value={station.name}
        onChange={(e) =>
          setStation({
            ...station,
            name: e.target.value,
          })
        }
      />

      <input
        className="search-input"
        type="text"
        placeholder="Address"
        value={station.address}
        onChange={(e) =>
          setStation({
            ...station,
            address: e.target.value,
          })
        }
      />

      <input
        className="search-input"
        type="tel"
        maxLength={10}
        placeholder="Contact Number"
        value={station.contact}
        onChange={(e) =>
          setStation({
            ...station,
            contact: e.target.value.replace(/\D/g, ""),
          })
        }
      />

      <input
        className="search-input"
        type="text"
        placeholder="Opening Hours"
        value={station.open}
        onChange={(e) =>
          setStation({
            ...station,
            open: e.target.value,
          })
        }
      />

      <input
        className="search-input"
        type="number"
        step="any"
        placeholder="Latitude"
        value={station.lat}
        onChange={(e) =>
          setStation({
            ...station,
            lat: e.target.value,
          })
        }
      />

      <input
        className="search-input"
        type="number"
        step="any"
        placeholder="Longitude"
        value={station.lng}
        onChange={(e) =>
          setStation({
            ...station,
            lng: e.target.value,
          })
        }
      />

      <div style={{ marginTop: "15px" }}>
  <label>Status</label>

  <select
    className="search-input"
    value={station.status}
    onChange={(e) =>
      setStation({
        ...station,
        status: e.target.value,
      })
    }
  >
    <option>Open</option>
    <option>Closed</option>
  </select>
</div>

<div style={{ marginTop: "15px" }}>
  <label>Queue Status</label>

  <select
    className="search-input"
    value={station.queue}
    onChange={(e) =>
      setStation({
        ...station,
        queue: e.target.value,
      })
    }
  >
    <option>Low</option>
    <option>Medium</option>
    <option>High</option>
  </select>
</div>

      <br />

      <label>
        <input
          type="checkbox"
          checked={station.petrol}
          onChange={(e) =>
            setStation({
              ...station,
              petrol: e.target.checked,
            })
          }
        />
        Petrol
      </label>

      <label style={{ marginLeft: "20px" }}>
        <input
          type="checkbox"
          checked={station.diesel}
          onChange={(e) =>
            setStation({
              ...station,
              diesel: e.target.checked,
            })
          }
        />
        Diesel
      </label>

      <label style={{ marginLeft: "20px" }}>
        <input
          type="checkbox"
          checked={station.cng}
          onChange={(e) =>
            setStation({
              ...station,
              cng: e.target.checked,
            })
          }
        />
        CNG
      </label>

      <br />
      <br />

      <button
        className="details-btn"
        onClick={handleSubmit}
      >
        {editingId ? "Update Station" : "Add Station"}
      </button>

      {editingId && (
        <button
          className="delete-btn"
          style={{ marginLeft: "10px" }}
          onClick={() => {
            setEditingId(null);
            setStation(emptyStation);
          }}
        >
          Cancel
        </button>
      )}

      <hr />
    </>
  );
}

export default AdminForm;