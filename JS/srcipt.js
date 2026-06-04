// M12 - JS Dasar
// Variabel, Fungsi, Validasi Sederhana

// Variabel const untuk Layanan (array menyimpan daftar kode layanan)

const LAYANAN = ['SKA', 'CAK', 'PDA', 'TNM']

// Fungsi Format Tanggal
// dd-mm-yyyy (04-06-2026) --> 04 Juni 2026
// Kita gunakan objek bawaan dari JS

function formatTanggal (dateStr) {
    // Formatting
    const bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']
    
    const d = new dateStr(dateStr); // deklarasi new date obj

    // Format (Tanggal - Bulan - Tahun )
    return d.getDate() + ' ' + bulan[d.getMonth()] + ' ' + d.getFullYear()
}

// Fungsi Validasi Form
function validasiForm() {
    // 1. Get Value Setiap Inputan (inputan yang wajib diisi)
    const namaLengkap = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;
    const prodi = document.getElementById('prodi').value;
    const layanan = document.getElementById('layanan').value;
    const tanggal = document.getElementById('tanggal').value

    // alert(namaLengkap) // Pesan
    // console.log(namaLengkap) // Console

    // 2. Validasi --> Cek field yang kosong
    // Jika nama lengkap
    if(namaLengkap === '' || nim === '' || prodi === '' || layanan === '' || tanggal === '') {
        // berikan pesan error
        alert('❌ Semua field (data) harus diisi!')

        // Mencegah submit halaman
        return false;
    }

    // Batasi jumlah karakter NIM (Harus 8 karakter)
    // Jika nim tidak 8 karakter atau kosong (tidak diisi)
    if (nim.length !== 8 || isNaN(nim)) {
        alert('❌ NIM harus terdiri dari 8 digit angka murni!')
        return false;
    }

    // 4. Tampilkan hasil jika berhasil validasi

    // a. Di console
    console.log("Data Pengajuan berhasil: ", {
        namaLengkap: namaLengkap,
        nim: nim,
        prodi: prodi,
        layanan: layanan,
        tanggal: formatTanggal(tanggal)
    });

    // b. Di alert
    alert('✅ Data Pengajuan berhasil: \n' + 
        'Nama Lengkap: ' + namaLengkap + '\n' + 
        'NIM: ' + nim + '\n' + 
        'Prodi: ' + prodi + '\n' + 
        'Layanan: ' + layanan + '\n' + 
        'Tanggal: ' + formatTanggal(tanggal)
    ); 
 
    return false; // Yes, form sah dikirim 
}