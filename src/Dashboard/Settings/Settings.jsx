import React, { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [preferences, setPreferences] = useState({
    otpConfirmation: "yes",
    investmentExpiry: "yes",
    profitNotification: "yes",
  });

  const handlePreferenceChange = (name, value) => {
    setPreferences({ ...preferences, [name]: value });
  };

  const renderSettingsForm = () => {
    switch (activeTab) {
      case "personal":
        return (
          <form className="personalForm">
            <section>
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </section>
            <section>
              <label>Email Address</label>
              <input type="text" value="brewercw964@gmail.com" disabled />
            </section>
            <section>
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter your phone number" />
            </section>
            <section>
              <label>Date of Birth</label>
              <input type="date" />
            </section>
            <section>
              <label>Nationality</label>
              <input type="text" placeholder="Enter your nationality" />
            </section>
            <div className="btnHolder">
              <button type="submit">Update Profile</button>
            </div>
          </form>
        );

      case "withdrawal":
        return (
          <div className="settingsForm">
            <label>Bank Name</label>
            <input type="text" placeholder="Enter your bank name" />
            <label>Account Number</label>
            <input type="text" placeholder="Enter your account number" />
            <label>Withdrawal PIN</label>
            <input type="password" placeholder="Set a withdrawal PIN" />
          </div>
        );

      case "password":
        return (
          <form className="passwordForm">
            <section>
              <label>Old Password</label>
              <input type="password" />
            </section>
            <section>
              <label>New Password</label>
              <input type="password" />
            </section>
            <section>
              <label>Confirm New Password</label>
              <input type="password" />
            </section>
            <div className="btnHolder">
              <button type="submit">Update Password</button>
            </div>
            <div className="redirection">
              <span>Advance Account Settings</span>
            </div>
          </form>
        );

      case "others":
        return (
          <div className="settingsForm">
          <div className="optionGroup">
  <label>
    Send confirmation OTP to my email when withdrawing my funds.
  </label>
  <div className="radioGroup">
    <label style={{ borderTopRightRadius: '0px', borderBottomRightRadius: '0px'}} className={preferences.otpConfirmation === "yes" ? "selected" : ""}>
      <input
        type="radio"
        name="otpConfirmation"
        value="yes"
        checked={preferences.otpConfirmation === "yes"}
        onChange={() => handlePreferenceChange("otpConfirmation", "yes")}
      />
      Yes
    </label>
    <label style={{borderLeft: 'none', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px'}}className={preferences.otpConfirmation === "no" ? "selected" : ""}>
      <input
        type="radio"
        name="otpConfirmation"
        value="no"
        checked={preferences.otpConfirmation === "no"}
        onChange={() => handlePreferenceChange("otpConfirmation", "no")}
      />
      No
    </label>
  </div>
</div>
            <div className="optionGroup">
              <label>Send me an email when my investment plan expires.</label>
              <div className="radioGroup">
    <label style={{ borderTopRightRadius: '0px', borderBottomRightRadius: '0px'}} className={preferences.investmentExpiry === "yes" ? "selected" : ""}>
      <input
        type="radio"
        name="investmentExpiry"
        value="yes"
        checked={preferences.investmentExpiry === "yes"}
        onChange={() => handlePreferenceChange("investmentExpiry", "yes")}
      />
      Yes
    </label>
    <label style={{borderLeft: 'none', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px'}}className={preferences.investmentExpiry === "no" ? "selected" : ""}>
      <input
        type="radio"
        name="investmentExpiry"
        value="no"
        checked={preferences.investmentExpiry === "no"}
        onChange={() => handlePreferenceChange("investmentExpiry", "no")}
      />
      No
    </label>
  </div>
            </div>

            <div className="optionGroup">
              <label>Send me an email when I get profit.</label>
              <div className="radioGroup">
    <label style={{ borderTopRightRadius: '0px', borderBottomRightRadius: '0px'}} className={preferences.profitNotification === "yes" ? "selected" : ""}>
      <input
        type="radio"
        name="profitNotification"
        value="yes"
        checked={preferences.profitNotification === "yes"}
        onChange={() => handlePreferenceChange("profitNotification", "yes")}
      />
      Yes
    </label>
    <label style={{borderLeft: 'none', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px'}}className={preferences.profitNotification === "no" ? "selected" : ""}>
      <input
        type="radio"
        name="profitNotification"
        value="no"
        checked={preferences.profitNotification === "no"}
        onChange={() => handlePreferenceChange("profitNotification", "no")}
      />
      No
    </label>
  </div>
            </div>

            <div className="btnHolder">
              <button type="button">Save Preferences</button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="Settings">
      <div className="settingsWrap">
        <div className="settingsHead">
          <button className={activeTab === "personal" ? "active" : ""} onClick={() => setActiveTab("personal")}>
            Personal
          </button>
          <button className={activeTab === "withdrawal" ? "active" : ""} onClick={() => setActiveTab("withdrawal")}>
            Withdrawal
          </button>
          <button className={activeTab === "password" ? "active" : ""} onClick={() => setActiveTab("password")}>
            Password/Security
          </button>
          <button className={activeTab === "others" ? "active" : ""} onClick={() => setActiveTab("others")}>
            Other Settings
          </button>
        </div>

        <div className="settingsContent">{renderSettingsForm()}</div>
      </div>
    </div>
  );
};

export default Settings;
