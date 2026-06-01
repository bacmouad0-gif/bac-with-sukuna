import { useNavigate } from 'react-router-dom';
import TopHeader from '../components/TopHeader';
import { useXP } from '../context/XPContext';

const ALL_TASKS_COUNT = 8;

export default function Progress() {
  const { xp, tasks, level } = useXP();
  const navigate = useNavigate();

  const completedCount = Object.values(tasks).filter(Boolean).length;
  const percent = ALL_TASKS_COUNT > 0 ? Math.round((completedCount / ALL_TASKS_COUNT) * 100) : 0;
  const circumference = 339.12;
  const offset = circumference - (percent / 100) * circumference;
  const xpToNextLevel = 100 - (xp % 100);

  return (
    <main className="main-wrapper">
      <TopHeader />
      <div className="page-wrapper">
        <h1 className="page-title">التقدم</h1>

        <div className="widget progress-widget" style={{ marginBottom: 20 }}>
          <div className="widget-title" style={{ alignSelf: 'flex-start' }}>
            <i className="fa-solid fa-circle-notch" /> التقدم اليومي
          </div>
          <div className="circle-progress">
            <svg width="120" height="120">
              <circle className="circle-bg" cx="60" cy="60" r="54" />
              <circle
                className="circle-bar"
                cx="60" cy="60" r="54"
                style={{ strokeDashoffset: offset }}
              />
            </svg>
            <div className="circle-percentage">{percent}%</div>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">{xp}</div>
            <div className="stat-label">إجمالي XP</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{level}</div>
            <div className="stat-label">المستوى الحالي</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{completedCount}</div>
            <div className="stat-label">مهام مكتملة</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{xpToNextLevel}</div>
            <div className="stat-label">XP للمستوى القادم</div>
          </div>
        </div>

        <div className="progress-box" style={{ marginTop: 20 }}>
          <div style={{ fontSize: 13, color: '#aaa', marginBottom: 8 }}>تقدم XP نحو المستوى {level + 1}</div>
          <div className="progress-bar">
            <div className="progress-fill-bar" style={{ width: `${xp % 100}%` }} />
          </div>
          <div className="progress-text-sm">{xp % 100} / 100 XP</div>
        </div>

        <button className="back-btn" onClick={() => navigate('/')}>رجوع</button>
      </div>
    </main>
  );
}
