import { useNavigate } from 'react-router-dom';
import TopHeader from '../components/TopHeader';

export default function Tests() {
  const navigate = useNavigate();

  return (
    <main className="main-wrapper">
      <TopHeader />
      <div className="page-wrapper">
        <h1 className="page-title">الاختبارات</h1>
        <div className="widget" style={{ textAlign: 'center', padding: 40 }}>
          <i className="fa-solid fa-file-pen" style={{ fontSize: 48, color: '#ff0000', marginBottom: 20, display: 'block' }} />
          <p style={{ color: '#aaa', fontSize: 16 }}>قسم الاختبارات قادم قريباً...</p>
          <p style={{ color: '#555', fontSize: 13, marginTop: 10 }}>ستتمكن قريباً من حل اختبارات تجريبية لكل المواد</p>
        </div>
        <button className="back-btn" onClick={() => navigate('/')}>رجوع</button>
      </div>
    </main>
  );
}
