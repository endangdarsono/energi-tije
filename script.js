const questions = [
  { q: "Energi cahaya matahari berubah menjadi energi apa saat menghangatkan air?", o: ["Gerak", "Panas", "Listrik"], a: "Panas" },
  { q: "Energi listrik pada kipas berubah menjadi energi apa?", o: ["Cahaya", "Gerak", "Suara"], a: "Gerak" },
  { q: "Energi listrik pada lampu berubah menjadi energi apa?", o: ["Panas", "Cahaya", "Bunyi"], a: "Cahaya" },
  { q: "Energi makanan yang kita makan berubah menjadi energi apa?", o: ["Listrik", "Gerak", "Cahaya"], a: "Gerak" },
  { q: "Televisi menggunakan energi listrik menjadi?", o: ["Cahaya & Suara", "Gerak", "Panas"], a: "Cahaya & Suara" },
  { q: "Setrika mengubah energi listrik menjadi?", o: ["Gerak", "Cahaya", "Panas"], a: "Panas" },
  { q: "Kompor gas mengubah energi kimia menjadi?", o: ["Gerak", "Panas", "Cahaya"], a: "Panas" },
  { q: "Kembang api mengubah energi kimia menjadi?", o: ["Panas, Cahaya, Bunyi", "Gerak", "Listrik"], a: "Panas, Cahaya, Bunyi" },
  { q: "Baling-baling mainan ditiup berubah menjadi energi?", o: ["Gerak", "Panas", "Cahaya"], a: "Gerak" },
  { q: "Handphone menggunakan energi listrik berubah menjadi?", o: ["Cahaya & Suara", "Gerak", "Kimia"], a: "Cahaya & Suara" },
  { q: "Energi listrik pada kipas angin berubah menjadi?", o: ["Gerak", "Cahaya", "Bunyi"], a: "Gerak" },
  { q: "Energi listrik pada kulkas berubah menjadi?", o: ["Dingin & Cahaya", "Gerak", "Panas"], a: "Dingin & Cahaya" },
  { q: "Energi listrik pada speaker berubah menjadi?", o: ["Bunyi", "Cahaya", "Gerak"], a: "Bunyi" },
  { q: "Energi cahaya matahari diserap tanaman menjadi?", o: ["Energi Kimia", "Gerak", "Listrik"], a: "Energi Kimia" },
  { q: "Energi panas matahari bisa diubah menjadi energi?", o: ["Listrik (panel surya)", "Gerak", "Bunyi"], a: "Listrik (panel surya)" },
  { q: "Energi kimia dalam baterai berubah menjadi?", o: ["Listrik", "Gerak", "Cahaya"], a: "Listrik" },
  { q: "Energi bensin dalam kendaraan berubah menjadi?", o: ["Gerak & Panas", "Cahaya", "Bunyi"], a: "Gerak & Panas" },
  { q: "Energi listrik pada blender berubah menjadi?", o: ["Gerak", "Panas", "Cahaya"], a: "Gerak" },
  { q: "Energi listrik pada rice cooker berubah menjadi?", o: ["Panas", "Gerak", "Bunyi"], a: "Panas" },
  { q: "Energi makanan yang dimakan Tije membuat tubuh?", o: ["Bisa bergerak & berpikir", "Bersinar", "Menyala"], a: "Bisa bergerak & berpikir" }
];

let current = 0, score = 0;

function showQuestion() {
  if (current >= questions.length) {
    document.getElementById("quiz").innerHTML = "";
    document.getElementById("result").innerText = `Selesai! Skor kamu: ${score}/${questions.length}`;
    return;
  }
  const q = questions[current];
  let html = `<h3>${q.q}</h3>`;
  q.o.forEach(opt => {
    html += `<button onclick="answer('${opt}')">${opt}</button>`;
  });
  document.getElementById("quiz").innerHTML = html;
}

function answer(opt) {
  if (opt === questions[current].a) score++;
  current++;
  showQuestion();
}

window.onload = showQuestion;