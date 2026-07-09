document.getElementById('sendBtn').addEventListener('click', function() {
    const isiCurhat = document.getElementById('textInput').value;
    const chatBox = document.getElementById('chatBox');

    if (isiCurhat.trim() === "") {
        alert("Kotaknya masih kosong, tulis dulu sesuatu ya...");
        return;
    }

    // 1. Munculkan teks curhat di layar aplikasi secara real-time (Sisi Kanan)
    const userMsg = document.createElement('div');
    userMsg.style.textAlign = 'right';
    userMsg.style.margin = '12px 0';
    userMsg.innerHTML = `<span style="background: rgba(52, 211, 153, 0.08); color: #a7f3d0; padding: 12px 16px; border-radius: 14px; border-bottom-right-radius: 4px; display: inline-block; max-width: 85%; border: 1px solid rgba(52, 211, 153, 0.2); text-align: left; font-size: 0.95rem;">${isiCurhat}</span>`;

    // 2. Efek teks penenang otomatis dari aplikasi (Sisi Kiri)
    setTimeout(() => {
        const systemMsg = document.createElement('p');
        systemMsg.className = 'bot-msg';
        systemMsg.style.marginTop = '12px';
        systemMsg.innerHTML = `<em>"Terima kasih sudah mau berbagi cerita beratmu hari ini. Curhatanmu sudah terkirim dan disimpan dengan aman di Safe Space. Tarik napas dalam-dalam, kamu sudah melakukan yang terbaik... This is your safe space 🩵"</em>`;
        chatBox.appendChild(systemMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);

    // 3. JALUR PENGIRIMAN DATA KE EMAIL KAMU (Menggunakan Formspree)
    // GANTI TULISAN "DI_SINI" DENGAN ID FORMSPREE KAMU NANTI
    fetch("https://formspree.io/f/xwvddaao", {
        method: "POST",
        body: JSON.stringify({ curhatan: isiCurhat }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).catch(err => console.log("Gagal mengirim data penampung: ", err));

    // Kosongkan form input kembali
    document.getElementById('textInput').value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
});
