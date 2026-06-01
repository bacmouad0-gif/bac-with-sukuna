import { useNavigate } from 'react-router-dom';
import TopHeader from '../components/TopHeader';
import { useXP } from '../context/XPContext';

const ALL_TASKS = [
  { key: 'history', label: 'مراجعة التاريخ' },
  { key: 'geo',     label: 'حل تمرين جغرافيا' },
  { key: 'philo',   label: 'مراجعة الفلسفة' },
  { key: 'math',    label: 'حل تمرين رياضيات' },
  { key: 'english', label: 'مراجعة الإنجليزية' },
  { key: 'arabic',  label: 'مراجعة اللغة العربية' },
  { key: 'french',  label: 'مراجعة اللغة الفرنسية' },
  { key: 'islamic', label: 'مراجعة العلوم الإسلامية' },
];

export default function Tasks() {
  const { xp, tasks, toggleTask } = useXP();
  const navigate = useNavigate();

  const done = ALL_TASKS.filter(t => tasks[t.key]).length;
  const percent = ALL_TASKS.length > 0 ? Math.round((done / ALL_TASKS.length) * 100) : 0;

  return (
    <main className="main-wrapper">
      <TopHeader />
      <div className="page-wrapper">
        <h1 className="page-title">المهام اليومية</h1>

        <div className="xp-box">
          XP : <span style={{ color: '#ff0000' }}>{xp}</span>
        </div>

        <div className="tasks-container">
          {ALL_TASKS.map(t => (
            <div
              key={t.key}
              className={`task-full${tasks[t.key] ? ' done' : ''}`}
              onClick={() => toggleTask(t.key)}
            >
              <span className="task-name">{t.label}</span>
              <span className="task-icon-lg">{tasks[t.key] ? '✅' : '⭕'}</span>
            </div>
          ))}
        </div>

        <div className="progress-box">
          <div className="progress-bar">
            <div className="progress-fill-bar" style={{ width: `${percent}%` }} />
          </div>
          <div className="progress-text-sm">{percent}% مكتمل</div>
        </div>

        <button className="back-btn" onClick={() => navigate('/')}>رجوع</button>
      </div>
    </main>
  );
}
