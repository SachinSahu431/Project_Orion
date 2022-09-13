export default function Profile() {
  return (
    <>
      <div className="d-flex flex-column">
        <h1 className="p-2">Profile</h1>
      </div>
      <div class="container d-flex flex-column">
        <div class="profile-box">
          <div class="profile-picture">
            <img src="https://randomuser.me/api/portraits/men/84.jpg" />
          </div>
          <div class="profile-content">
            <h1>John Doe</h1>
            <p>
              Designer at Doe's Company,
              <br />
              ridiculously skilled.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
