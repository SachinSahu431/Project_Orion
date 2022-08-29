export default function Home() {
  return (
    <div className="d-flex flex-row row gx-1">
      <div className="col-lg-8 col-md-6 col-12">
        <div className="card border-1 rounded-1">
          <div className="card-body">
            <h3 className="card-title">Hi👋, Team Orion</h3>
            <p className="fw-bold text-muted">[ Demonstration Content ]</p>
            <p className="card-text">The Project Orion's Team project website for ERP created as part of a Software Engineering Course.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-1 rounded-1">
          <div className="card-body">
            <h5 className="card-title">🔔Notifications</h5>
            <p className="card-text">Get News here! <span className="fw-bold text-muted">[ Demonstration Content ]</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
