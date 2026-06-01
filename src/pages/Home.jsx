import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopHeader from '../components/TopHeader';
import { useXP } from '../context/XPContext';

const BAC_DATE = new Date('2026-06-07T08:00:00').getTime();

const DAILY_TASKS = [
  { key: 'history', label: 'مراجعة التاريخ' },
  { key: 'geo',     label: 'الجغرافيا' },
  { key: 'philo',   label: 'الفلسفة' },
  { key: 'math',    label: 'الرياضيات' },
];

const SUBJECTS = [
  { icon: 'fa-flask',                label: 'العلوم' },
  { icon: 'fa-language',             label: 'اللغات' },
  { icon: 'fa-calculator',           label: 'الرياضيات' },
  { icon: 'fa-brain',                label: 'الفلسفة' },
  { icon: 'fa-earth-americas',       label: 'التاريخ والجغرافيا' },
];

function pad(n) { return n < 10 ? '0' + n : '' + n; }

function useCountdown() {
  const [time, setTime] = useState({ d: '00', h: '00', m: '00', s: '00' });

  useEffect(() => {
    function tick() {
      const diff = BAC_DATE - Date.now();
      if (diff <= 0) { setTime({ d: '00', h: '00', m: '00', s: '00' }); return; }
      setTime({
        d: pad(Math.floor(diff / 86400000)),
        h: pad(Math.floor((diff % 86400000) / 3600000)),
        m: pad(Math.floor((diff % 3600000) / 60000)),
        s: pad(Math.floor((diff % 60000) / 1000)),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export default function Home() {
  const { xp, tasks, toggleTask } = useXP();
  const navigate = useNavigate();
  const time = useCountdown();

  const total = DAILY_TASKS.length;
  const done = DAILY_TASKS.filter(t => tasks[t.key]).length;
  const percent = total > 0 ? Math.round((done / total) * 100) : 0;
  const circumference = 339.12;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <main className="main-wrapper">
      <TopHeader />
      <div className="dashboard-grid">

        {/* Countdown */}
        <div className="widget">
          <div className="widget-title"><i className="fa-solid fa-hourglass-half" /> الوقت المتبقي للباك</div>
          <div className="countdown-container">
            <div className="time-box"><span className="time-num">{time.d}</span><span className="time-lbl">يوم</span></div>
            <div className="time-box"><span className="time-num">{time.h}</span><span className="time-lbl">ساعة</span></div>
            <div className="time-box"><span className="time-num">{time.m}</span><span className="time-lbl">دقيقة</span></div>
            <div className="time-box"><span className="time-num">{time.s}</span><span className="time-lbl">ثانية</span></div>
          </div>
        </div>

        {/* Circle Progress */}
        <div className="widget progress-widget">
          <div className="widget-title" style={{ alignSelf: 'flex-start' }}>
            <i className="fa-solid fa-circle-notch" /> التقدم العام
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
          <p className="quote-text">"القوة الحقيقية تأتي من الانضباط." - سوكونا</p>
        </div>

        {/* Daily Tasks */}
        <div className="widget">
          <div className="widget-title"><i className="fa-solid fa-check-to-slot" /> المهام اليومية</div>
          <div className="tasks-list">
            {DAILY_TASKS.map(t => (
              <div
                key={t.key}
                className={`task-item${tasks[t.key] ? ' done' : ''}`}
                onClick={() => toggleTask(t.key)}
              >
                <span>{t.label}</span>
                <i className={`fa-regular ${tasks[t.key] ? 'fa-circle-check' : 'fa-circle'} task-checkbox`} />
              </div>
            ))}
          </div>
          <button className="task-btn" onClick={() => navigate('/tasks')}>
            عرض كل المهام
          </button>
        </div>

        {/* Subjects */}
        <div className="widget subjects-section">
          <div className="widget-title"><i className="fa-solid fa-graduation-cap" /> المواد الدراسية</div>
          <div className="subjects-grid">
            {SUBJECTS.map(s => (
              <div key={s.label} className="subject-card" onClick={() => navigate('/subjects')}>
                <div className="subject-icon"><i className={`fa-solid ${s.icon}`} /></div>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="banner-quote">
          " إما أن تنتصر اليوم... أو تندم غداً "
        </div>

      </div>
    </main>
  );
}
