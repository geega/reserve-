// Мінімальна поведінка для демо (без бекенду)
const $ = (s) => document.querySelector(s);

function pad2(n){ return String(n).padStart(2, "0"); }
function formatDateUA(d){
  return `${pad2(d.getDate())}.${pad2(d.getMonth()+1)}.${d.getFullYear()}`;
}
function formatTime(d){
  return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
}

// Зафіксована "поточна дата" з вашого повідомлення
const fixedNow = new Date("2026-01-25T17:56:00");

$("#updatedDate").textContent = formatDateUA(fixedNow);
$("#updatedTime").textContent = formatTime(fixedNow);
$("#docUpdatedTime").textContent = formatTime(fixedNow);

$("#btnNotifications").addEventListener("click", () => {
  alert("Сповіщення (демо)");
});

$("#btnAdd").addEventListener("click", () => {
  alert("Додати (демо)");
});

document.querySelectorAll(".navitem").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".navitem").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    const tab = btn.dataset.tab;
    // Тут потім можна перемикати сторінки/екрани
    console.log("tab:", tab);
  });
});