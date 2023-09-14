function Gempa(lokasi, skala) {
    this.lokasi = lokasi;
    this.skala = skala;

    this.dampak = function() {
        var dampak = "";
        if (this.skala >= 0 && this.skala <= 2) {
            dampak = "Tidak terasa";
        } else if (this.skala > 2 && this.skala <= 4) {
            dampak = "Bangunan retak-retak";
        } else if (this.skala > 4 && this.skala <= 6) {
            dampak = "Bangunan roboh";
        } else {
            dampak = "Bangunan roboh dan berpotensi tsunami";
        }

        return dampak;
    };
}

var daftarGempa = [];

function buatGempa() {
    var lokasi = document.getElementById("lokasi").value;
    var skala = parseFloat(document.getElementById("skala").value);

    var gempa = new Gempa(lokasi, skala);
    daftarGempa.push(gempa);

    tambahkanKeDaftar(gempa);
    document.getElementById("lokasi").value = "";
    document.getElementById("skala").value = "";
}

function tambahkanKeDaftar(gempa) {
    var daftar = document.getElementById("daftarGempa");
    var li = document.createElement("li");
    li.innerHTML = "Lokasi Gempa: " + gempa.lokasi + "<br>Skala: " + gempa.skala + "<br>Dampak: " + gempa.dampak();
    daftar.appendChild(li);
}
