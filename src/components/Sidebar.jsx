import { NavLink } from 'react-router-dom';
import { useXP } from '../context/XPContext';

const navItems = [
  { to: '/',          icon: 'fa-house',        label: 'الرئيسية' },
  { to: '/subjects',  icon: 'fa-book-open',    label: 'المواد' },
  { to: '/tasks',     icon: 'fa-list-check',   label: 'المهام' },
  { to: '/tests',     icon: 'fa-file-pen',     label: 'الاختبارات' },
  { to: '/progress',  icon: 'fa-chart-simple', label: 'التقدم' },
  { to: '/settings',  icon: 'fa-gear',         label: 'الإعدادات' },
];

export default function Sidebar() {
  const { xp, level } = useXP();

  return (
    <aside className="sidebar">
      <div className="brand">
        <h2>BAC WITH</h2>
        <h1>SUKUNA</h1>
      </div>
      <ul className="nav-menu">
        {navItems.map(item => (
          <li key={item.to} className="nav-item">
            <NavLink
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => isActive ? 'active-link' : ''}
              style={({ isActive }) => isActive
                ? { color: '#ff0000', background: 'linear-gradient(90deg, transparent, rgba(255,0,0,0.05))', borderRight: '3px solid #ff0000', display: 'flex', alignItems: 'center', gap: 15, padding: '12px 20px', textDecoration: 'none', fontSize: 14, transition: '0.3s' }
                : { display: 'flex', alignItems: 'center', gap: 15, padding: '12px 20px', color: '#888', textDecoration: 'none', fontSize: 14, transition: '0.3s' }
              }
            >
              <i className={`fa-solid ${item.icon}`} />
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
