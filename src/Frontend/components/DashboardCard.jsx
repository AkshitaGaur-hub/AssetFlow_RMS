import "./DashboardCard.css";

const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="dashboard-card">
      <div className="card-icon">{icon}</div>

      <div className="card-info">
        <h2>{value}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default DashboardCard;