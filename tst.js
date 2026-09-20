/* إعدادات المتغيرات والألوان الأساسية */
:root {
  --purple: #7c3aed;
  --text-primary: #111827;
  --text-secondary: #6b7280;
  --border: #e5e7eb;
  --white: #ffffff;
}

/* تصفير الهوامش وضبط الصندوق */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background-color: var(--white);
  color: var(--text-primary);
}

/* شريط التنقل (Navigation Bar) */
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 80px;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  background: var(--white);
  z-index: 100;
}

/* الشعار */
.nav-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 18px;
  color: var(--text-primary);
  text-decoration: none;
}

/* روابط القائمة لشاشات الكمبيوتر */
.nav-links {
  display: flex;
  gap: 36px;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 15px;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--purple);
}

/* زر القائمة للشاشات الصغيرة */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
}

.menu-toggle .bar {
  display: block;
  width: 24px;
  height: 2.5px;
  background-color: var(--text-primary);
  border-radius: 2px;
}

/* التجاوب مع الموبايل والشاشات الصغيرة */
@media (max-width: 768px) {
  nav {
    padding: 18px 24px;
  }

  .menu-toggle {
    display: flex;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--white);
    flex-direction: column;
    gap: 0;
    border-bottom: 1px solid var(--border);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links a {
    display: block;
    padding: 15px 24px;
    border-top: 1px solid #f3f4f6;
  }
}