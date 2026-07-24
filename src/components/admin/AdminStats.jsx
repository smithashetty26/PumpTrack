function AdminStats({ stations }) {
  const total = stations.length;

  const petrol = stations.filter((s) => s.petrol).length;

  const diesel = stations.filter((s) => s.diesel).length;

  const cng = stations.filter((s) => s.cng).length;

  return (
    <div className="cards">

      <div className="card total-card">
        <div className="card-icon">🏢</div>

        <div>
          <h4>Total Stations</h4>
          <h1>{total}</h1>
        </div>
      </div>

      <div className="card petrol-card">
        <div className="card-icon">⛽</div>

        <div>
          <h4>Petrol</h4>
          <h1>{petrol}</h1>
        </div>
      </div>

      <div className="card diesel-card">
        <div className="card-icon">🚛</div>

        <div>
          <h4>Diesel</h4>
          <h1>{diesel}</h1>
        </div>
      </div>

      <div className="card cng-card">
        <div className="card-icon">🔥</div>

        <div>
          <h4>CNG</h4>
          <h1>{cng}</h1>
        </div>
      </div>

    </div>
  );
}

export default AdminStats;