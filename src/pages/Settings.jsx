import { useNavigate } from 'react-router-dom';
import TopHeader from '../components/TopHeader';
import { useXP } from '../context/XPContext';

export default function Settings() {
  const { resetAll } = useXP();
  const navigate = useNavigate();

  function handleReset() {
    if (confirm('هل أنت متأكد أنك تريد إعادة تعيين كل شيء؟')) {
      resetAll();
    }
  }

  return (
    <main className="main-wrapper">
      <TopHeader />
      <div className="page-wrapper">
        <h1 className="page-title">الإعدادات</h1>

        <div className="settings-section">
          <div className="settings-title">البيانات</div>
          <div className="settings-item">
            <label>إعادة تعيين XP والمهام</label>
            <button className="reset-btn" onClick={handleReset}>إعادة تعيين</button>
          </div>
        </div>

        <div className="settings-section">
          <div className="settings-title">عن التطبيق</div>
          <div className="settings-item" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
            <label style={{ color: '#aaa' }}>BAC WITH SUKUNA</label>
            <span style={{ fontSize: 12, color: '#555' }}>منصة لمتابعة دراستك نحو نجاح الباكالوريا</span>
          </div>
        </div>

        <div className="settings-section">
          <div className="settings-title">قريباً</div>
          <div className="settings-item">
            <label style={{ color: '#555' }}>إشعارات يومية</label>
            <span style={{ fontSize: 12, color: '#333' }}>قريباً...</span>
          </div>
          <div className="settings-item">
            <label style={{ color: '#555' }}>تغيير الثيم</label>
            <span style={{ fontSize: 12, color: '#333' }}>قريباً...</span>
          </div>
        </div>

        <button className="back-btn" onClick={() => navigate('/')}>رجوع</button>
      </div>
    </main>
  );
}
