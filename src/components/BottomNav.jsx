import { NavLink } from 'react-router-dom';

const items = [
  { to: '/',         icon: 'fa-house',        label: 'الرئيسية' },
  { to: '/subjects', icon: 'fa-book-open',    label: 'المواد' },
  { to: '/tasks',    icon: 'fa-list-check',   label: 'المهام' },
  { to: '/progress', icon: 'fa-chart-simple', label: 'التقدم' },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {items.map(item => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) => `bottom-nav-item${isActive ? ' active' : ''}`}
        >
          <i className={`fa-solid ${item.icon}`} />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
