// شروع برنامه از صفحه خوش آمدگویی
function startApp() {
  document.getElementById("splash").style.display = "none";
  document.getElementById("app").classList.remove("hidden");
  show('formPage');
}

// نمایش صفحات مختلف
function show(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

// نمایش رزومه ساخته شده
function showResume() {
  const name = document.getElementById("name").value;
  const education = document.getElementById("education").value;
  const skills = document.getElementById("skills").value;
  const experience = document.getElementById("experience").value;
  const contact = document.getElementById("contact").value;
  const languages = document.getElementById("languages").value;
  const objective = document.getElementById("objective").value;

  const output = `
    <div class="card">
      <h3>${name}</h3>
      <p><strong>تحصیلات:</strong> ${education}</p>
      <p><strong>مهارت‌ها:</strong> ${skills}</p>
      <p><strong>سابقه کاری:</strong> ${experience}</p>
      <p><strong>اطلاعات تماس:</strong> ${contact}</p>
      <p><strong>زبان‌ها:</strong> ${languages}</p>
      <p><strong>هدف شغلی:</strong> ${objective}</p>
    </div>
  `;

  document.getElementById("resumeOutput").innerHTML = output;
  show('resumePage');
}

// بازگشت به فرم برای ویرایش
function backToForm() {
  show('formPage');
}
