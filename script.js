 الضغط على زر "تصفح التطبيقات"
function scrollToApps() {
    // البحث عن العنصر الذي يحتوي على ID "apps"
    const appsSection = document.getElementById("apps");
    
    // التمرير بسلاسة إلى هذا القسم
    appsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// دالة لإظهار نافذة رسالة عند الضغط على زر "تحميل" في التطبيقات
function showDownloadAlert(appName) {
    alert(`تم الضغط على تحميل ${appName}`);
}

// إضافة مستمعين للأحداث لأزرار تحميل التطبيقات
document.querySelectorAll('.app-item button').forEach(button => {
    button.addEventListener('click', (event) => {
        // تحديد اسم التطبيق عند الضغط
        const appName = event.target.closest('.app-item').querySelector('h3').textContent;
        showDownloadAlert(appName);
    });
});
script src="script.js"></script>
// وظيفة التمرير إلى قسم التطبيقات
function scrollToApps() {
    document.getElementById("apps").scrollIntoView({ behavior: "smooth" });
}
// التبديل بين وضع النهار والليل
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    this.classList.toggle('dark-mode');
    
    // تغيير نص الزر بناءً على الوضع
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = "وضع النهار";
    } else {
        this.textContent = "وضع الليل";
    }
});

// إضافة العد التنازلي
let countdownTime = 20;
const countdownElement = document.createElement('div');
countdownElement.id = 'countdown';
countdownElement.textContent = countdownTime;

document.body.appendChild(countdownElement);

let countdownInterval = setInterval(function() {
    countdownTime--;
    countdownElement.textContent = countdownTime;
    
    if (countdownTime <= 0) {
        clearInterval(countdownInterval);
    }
}, 1000);
<select id="language-select" onchange="changeLanguage()">
  <option value="en">English</option>
  <option value="ar">العربية</option>
</select>

<div id="app-title">Yassine TV</div>
<div id="app-description">Watch your favorite channels live on Yassine TV app.</div>

<script>
  function changeLanguage() {
    var lang = document.getElementById('language-select').value;
    if (lang === 'ar') {
      document.getElementById('app-title').innerText = 'تطبيق ياسين تي في';
      document.getElementById('app-description').innerText = 'شاهد قنواتك المفضلة على تطبيق ياسين تي في.';
    } else {
      document.getElementById('app-title').innerText = 'Yassine TV';
      document.getElementById('app-description').innerText = 'Watch your favorite channels live on Yassine TV app.';
    }
  }
</script>
 <button onclick="addToFavorites('Yassine TV')">Add to Favorites</button>

<script>
  function addToFavorites(appName) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(appName);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
</script>
// يمكنك إضافة وظائف لجعل الأزرار تعمل مع Firebase أو باقي الخدمات.
document.querySelector('.google').addEventListener('click', function () {
    alert('تم تسجيل الدخول باستخدام جوجل');
});
document.querySelector('.twitter').addEventListener('click', function () {
    alert('تم تسجيل الدخول باستخدام تويتر');
});
document.querySelector('.whatsapp').addEventListener('click', function () {
    alert('تم تسجيل الدخول باستخدام واتساب');
});

