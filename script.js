body {
  margin: 0;
  font-family: sans-serif;
  background: #0f172a;
  color: #fff;
  direction: rtl;
}

#splash {
  height: 100vh;
  background: linear-gradient(135deg, #2563eb, #1e40af);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#splash button {
  padding: 12px 30px;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  cursor: pointer;
}

.hidden { display: none; }

.page {
  display: none;
  padding: 20px;
}

.page.active { display: block; }

input, textarea, select {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  font-size: 15px;
}

textarea { height: 80px; }

button {
  width: 100%;
  padding: 12px;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 16px;
}

.card {
  background: #1e293b;
  padding: 15px;
  border-radius: 12px;
}

.nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  background: #020617;
}

.nav button {
  flex: 1;
  background: none;
}
