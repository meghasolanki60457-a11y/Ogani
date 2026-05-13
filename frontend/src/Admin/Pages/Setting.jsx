import { useState } from "react";

const Settings = () => {

  const [message, setMessage] = useState("");

  const handleSave = () => {
    setMessage("Settings saved successfully ✅");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="settings-page">

      {/* HEADER */}
      <div className="settings-header">
        <div>
          <h2>Settings</h2>
          <p>Manage your application settings</p>

          {/* SUCCESS MESSAGE */}
          {message && (
            <div className="success-message">
              {message}
            </div>
          )}

        </div>

        <button className="save-btn" onClick={handleSave}>
          Save Changes
        </button>
      </div>

      {/* SETTINGS GRID */}
      <div className="settings-grid">

        {/* PROFILE SETTINGS */}
        <div className="settings-card">
          <h3>Profile Settings</h3>

          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Admin Name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="admin@example.com" />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="text" placeholder="+91 00000 00000" />
          </div>
        </div>

        {/* PASSWORD */}
        <div className="settings-card">
          <h3>Change Password</h3>

          <div className="form-group">
            <label>Current Password</label>
            <input type="password" />
          </div>

          <div className="form-group">
            <label>New Password</label>
            <input type="password" />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" />
          </div>
        </div>

        {/* WEBSITE SETTINGS */}
        <div className="settings-card">
          <h3>Website Settings</h3>

          <div className="form-group">
            <label>Website Name</label>
            <input type="text" placeholder="My Store" />
          </div>

          <div className="form-group">
            <label>Support Email</label>
            <input type="email" />
          </div>

          <div className="form-group">
            <label>Currency</label>
            <select>
              <option>INR (₹)</option>
              <option>USD ($)</option>
              <option>EUR (€)</option>
            </select>
          </div>
        </div>

        {/* NOTIFICATIONS */}
        <div className="settings-card">
          <h3>Notifications</h3>

          <div className="toggle-item">
            <span>Email Notifications</span>
            <input type="checkbox" />
          </div>

          <div className="toggle-item">
            <span>SMS Notifications</span>
            <input type="checkbox" />
          </div>

          <div className="toggle-item">
            <span>Order Alerts</span>
            <input type="checkbox" defaultChecked />
          </div>
        </div>

      </div>

    </div>
  );
};

export default Settings;