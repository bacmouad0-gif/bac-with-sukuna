import { useNavigate } from 'react-router-dom';
import TopHeader from '../components/TopHeader';

const SUBJECTS = [
  { icon: 'fa-calculator',     name: 'الرياضيات' },
  { icon: 'fa-atom',           name: 'العلوم الفيزيائية' },
  { icon: 'fa-flask',          name: 'العلوم الطبيعية' },
  { icon: 'fa-brain',          name: 'الفلسفة' },
  { icon: 'fa-earth-americas', name: 'التاريخ والجغرافيا' },
  { icon: 'fa-pen-nib',        name: 'اللغة العربية' },
  { icon: 'fa-language',       name: 'اللغة الفرنسية' },
  { icon: 'fa-globe',          name: 'اللغة الإنجليزية' },
  { icon: 'fa-moon',           name: 'العلوم الإسلامية' },
];

export default function Subjects() {
  const navigate = useNavigate();

  return (
    <main className="main-wrapper">
      <TopHeader />
      <div className="page-wrapper">
        <h1 className="page-title">المواد الدراسية</h1>

        <div className="subjects-grid-full">
          {SUBJECTS.map(s => (
            <div key={s.name} className="subject-card-full">
              <div className="subject-icon-lg"><i className={`fa-solid ${s.icon}`} /></div>
              <div className="subject-name">{s.name}</div>
            </div>
          ))}
        </div>

        <button className="back-btn" onClick={() => navigate('/')}>رجوع</button>
      </div>
    </main>
  );
}
