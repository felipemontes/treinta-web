import React from "react";
import "./styles/Admin.css";

const Admin = ({ handleLogout }) => {
  return (
    <div>
      <section className="admin">
        <nav>
          <h2>Treinta</h2>
          <button onClick={handleLogout}>Logout</button>
        </nav>
      </section>
    </div>
  );
};

export default Admin;
