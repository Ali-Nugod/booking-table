document.getElementById("verifyForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let code = document.getElementById("code").value;
  
    if (code.trim().length < 6) {
      alert("الكود يجب أن يتكون من 6 أرقام");
    } else {
      // بعد التحقق من الكود يتم الدخول للمنصة
      window.location.href = "employees.html";
    }
  });
  