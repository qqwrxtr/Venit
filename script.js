const days = ["Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă", "Duminică"];

const dailyRevenue = [];
let totalRevenue = 0;

for (let i = 0; i < 7; i++) {
  dailyRevenue[i] = parseFloat(prompt("Introduceți venitul zilnic pentru " + days[i] + ":"));
  totalRevenue += dailyRevenue[i];
}

const weeklyRevenue = totalRevenue;
const averageRevenue = totalRevenue / 7;

let maxRevenueDay = "";
let maxRevenue = 0;
for (let i = 0; i < 7; i++) {
  if (dailyRevenue[i] > maxRevenue) {
    maxRevenue = dailyRevenue[i];
    maxRevenueDay = days[i];
  }
}

let minRevenueDay = "";
let minRevenue = Number.MAX_VALUE;
for (let i = 0; i < 7; i++) {
  if (dailyRevenue[i] < minRevenue) {
    minRevenue = dailyRevenue[i];
    minRevenueDay = days[i];
  }
}

const monthlyRevenue = weeklyRevenue * 4;



let week = document.getElementById('week');
let week_rsp = document.createTextNode("Venitul săptămânal al magazinului este: " + weeklyRevenue)
week.appendChild(week_rsp);

let avg = document.getElementById('avg');
let avg_rsp = document.createTextNode("Media venitului zilnic este: " + averageRevenue)
avg.appendChild(avg_rsp);

let max1 = document.getElementById('max');
let max1_rsp = document.createTextNode("Ziua cu cel mai mare venit: " + maxRevenueDay)
max1.appendChild(max1_rsp);

let min = document.getElementById('min');
let min_rsp = document.createTextNode("Ziua cu cel mai mic venit: " + minRevenueDay)
min.appendChild(min_rsp);

let lun = document.getElementById('lun');
let lun_rsp = document.createTextNode("Venitul lunar al magazinului este: " + monthlyRevenue)
lun.appendChild(lun_rsp);

