import { useXP } from '../context/XPContext';

export default function TopHeader() {
  const { xp, level } = useXP();

  return (
    <header className="top-header">
      <div className="user-profile">
        <div className="user-avatar">
          <i className="fa-solid fa-user-ninja" />
        </div>
        <div className="user-info">
          <h3>Sorcerer</h3>
          <p>Level {level}</p>
        </div>
      </div>
      <div className="xp-badge">
        <i className="fa-solid fa-star" style={{ color: '#ff0000' }} />
        {xp} XP
      </div>
    </header>
  );
}
