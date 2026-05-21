// ── DATA ──────────────────────────────────────────────────────────────────────

const lessons = {
  home: {
    title: "Beranda & Fakta Unik",
    icon: "🏠",
    content: `
      <p style="margin-bottom:1rem;color:#475569;line-height:1.75;">
        Selamat datang di <strong>Nihongo Wiki</strong>! Di sini kamu bisa belajar bahasa Jepang dengan cara yang menyenangkan layaknya membaca Wiki Fandom.
      </p>
      <div class="fact-box">
        <h4>💡 Tahukah Kamu?</h4>
        <p>Bahasa Jepang menggunakan 3 jenis huruf sekaligus. Mengapa? Karena tanpa Kanji, kalimat Jepang akan sangat sulit dibedakan artinya karena banyaknya kata yang bunyinya sama (Homofon).</p>
      </div>
      <section class="route-section">
        <div class="route-header">
          <h2>Rute Pembelajaran</h2>
          <p>Mulai dari dasar dan ikuti alur belajar yang disusun khusus untuk pemula. Klik setiap langkah untuk langsung membuka materi.</p>
        </div>
        <div class="route-grid">
          <button class="route-card" onclick="navigate('hiragana')">
            <span class="step">1</span>
            <h3>Mulai dengan Hiragana</h3>
            <p>Pahami dasar bunyi dan bentuk huruf Jepang pertama.</p>
          </button>
          <button class="route-card" onclick="navigate('katakana')">
            <span class="step">2</span>
            <h3>Lanjut ke Katakana</h3>
            <p>Pelajari huruf serapan yang sering muncul pada kata asing.</p>
          </button>
          <button class="route-card" onclick="navigate('kanji')">
            <span class="step">3</span>
            <h3>Kuasai Kanji Dasar</h3>
            <p>Masuk ke simbol piktograf dan arti pentingnya.</p>
          </button>
          <button class="route-card" onclick="navigate('angka')">
            <span class="step">4</span>
            <h3>Belajar Angka</h3>
            <p>Kenali angka dasar dan cara membaca bilangan Jepang.</p>
          </button>
          <button class="route-card" onclick="navigate('salam')">
            <span class="step">5</span>
            <h3>Pelajari Salam</h3>
            <p>Kuasi ungkapan sehari-hari untuk berkomunikasi sopan.</p>
          </button>
          <button class="route-card" onclick="navigate('perkenalan')">
            <span class="step">6</span>
            <h3>Latihan Perkenalan</h3>
            <p>Gunakan bahasa Jepang untuk memperkenalkan diri sendiri.</p>
          </button>
        </div>
      </section>
      <h2>Kebenaran di Balik Salah Paham Umum</h2>
      <div class="method-card">
        <h4>❌ Mitos: "Cukup belajar Romaji saja"</h4>
        <p><strong>Fakta:</strong> Belajar hanya dengan tulisan Latin (Romaji) justru akan memperlambat progresmu. Orang Jepang asli tidak menggunakan Romaji dalam kehidupan sehari-hari. Mulailah dengan Hiragana!</p>
      </div>
      <div class="method-card">
        <h4>❌ Mitos: "Arigatou berasal dari bahasa Portugis"</h4>
        <p><strong>Fakta:</strong> Banyak yang mengira Arigatou berasal dari "Obrigado". Padahal, kata ini murni dari bahasa Jepang kuno <em>"Arigatashi"</em> yang berarti "Sulit untuk ada/terjadi" (menunjukkan rasa syukur atas keajaiban kebaikan seseorang).</p>
      </div>
    `
  },
  hiragana: {
    title: "Huruf 1: Hiragana (ひらがな)",
    icon: "✏️",
    content: `
      <p style="margin-bottom:1rem;color:#475569;line-height:1.75;">Hiragana adalah huruf pertama yang harus dipelajari. Digunakan untuk menulis kata asli Jepang dan partikel tata bahasa.</p>
      <h2>Tabel Hiragana Dasar</h2>
      <div style="overflow-x:auto;margin-bottom:1.5rem;">
        <table class="kana-table">
          <tbody>
            <tr><td>あ<span>a</span></td><td>い<span>i</span></td><td>う<span>u</span></td><td>え<span>e</span></td><td>お<span>o</span></td></tr>
            <tr><td>か<span>ka</span></td><td>き<span>ki</span></td><td>く<span>ku</span></td><td>け<span>ke</span></td><td>こ<span>ko</span></td></tr>
            <tr><td>さ<span>sa</span></td><td>し<span>shi</span></td><td>す<span>su</span></td><td>せ<span>se</span></td><td>そ<span>so</span></td></tr>
            <tr><td>た<span>ta</span></td><td>ち<span>chi</span></td><td>つ<span>tsu</span></td><td>て<span>te</span></td><td>と<span>to</span></td></tr>
            <tr><td>な<span>na</span></td><td>に<span>ni</span></td><td>ぬ<span>nu</span></td><td>ね<span>ne</span></td><td>の<span>no</span></td></tr>
            <tr><td>は<span>ha</span></td><td>ひ<span>hi</span></td><td>ふ<span>fu</span></td><td>へ<span>he</span></td><td>ほ<span>ho</span></td></tr>
            <tr><td>ま<span>ma</span></td><td>み<span>mi</span></td><td>む<span>mu</span></td><td>め<span>me</span></td><td>も<span>mo</span></td></tr>
            <tr><td>や<span>ya</span></td><td colspan="2">ゆ<span>yu</span></td><td colspan="2">よ<span>yo</span></td></tr>
            <tr><td>ら<span>ra</span></td><td>り<span>ri</span></td><td>る<span>ru</span></td><td>れ<span>re</span></td><td>ろ<span>ro</span></td></tr>
            <tr><td colspan="2">わ<span>wa</span></td><td></td><td></td><td>を<span>wo</span></td></tr>
            <tr><td colspan="5">ん<span>n</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="pronunciation-box">
        <h4>🔊 Cara Membaca Hiragana</h4>
        <p style="color:#6d28d9;font-size:0.875rem;margin-bottom:0.75rem;">Hiragana dibaca persis seperti ejaannya — tidak ada pengecualian bunyi yang tersembunyi.</p>
        <table><tbody>
          <tr><td>5 Vokal Dasar</td><td><span class="sound-pill">a</span><span class="sound-pill">i</span><span class="sound-pill">u</span><span class="sound-pill">e</span><span class="sound-pill">o</span> — dibaca pendek &amp; jelas</td></tr>
          <tr><td>し (shi)</td><td>Dibaca <strong>"shi"</strong>, BUKAN "si". Contoh: した (shita) = bawah</td></tr>
          <tr><td>ち (chi)</td><td>Dibaca <strong>"chi"</strong>, BUKAN "ti". Contoh: ちいさい (chiisai) = kecil</td></tr>
          <tr><td>つ (tsu)</td><td>Dibaca <strong>"tsu"</strong>, BUKAN "tu". Contoh: つき (tsuki) = bulan</td></tr>
          <tr><td>ふ (fu)</td><td>Dibaca <strong>"fu"</strong> (antara "hu" dan "fu"). Contoh: ふじ (Fuji) = Gunung Fuji</td></tr>
          <tr><td>ん (n)</td><td>Bunyi nasal, seperti "ng" di akhir kata. Contoh: にほん (Nihon) = Jepang</td></tr>
          <tr><td>っ (tsu kecil)</td><td>Jeda sejenak — konsonan berikutnya diucapkan ganda. Contoh: きって (kitte) = perangko</td></tr>
        </tbody></table>
      </div>
      <div class="fact-box">
        <h4>✏️ Tips Mengingat</h4>
        <p>Cobalah metode <strong>Mnemonik</strong>. Contoh: Huruf <strong>あ (a)</strong> mirip seperti orang yang sedang berteriak "Aaa!" karena kaget.</p>
      </div>
    `
  },
  katakana: {
    title: "Huruf 2: Katakana (カタカナ)",
    icon: "🔤",
    content: `
      <p style="margin-bottom:1rem;color:#475569;line-height:1.75;">Katakana memiliki bunyi yang sama dengan Hiragana, tapi bentuknya lebih kaku. Digunakan untuk kata serapan asing (Loanwords).</p>
      <div style="overflow-x:auto;margin-bottom:1.5rem;">
        <table class="kana-table">
          <tbody>
            <tr><td>ア<span>a</span></td><td>イ<span>i</span></td><td>ウ<span>u</span></td><td>エ<span>e</span></td><td>オ<span>o</span></td></tr>
            <tr><td>カ<span>ka</span></td><td>キ<span>ki</span></td><td>ク<span>ku</span></td><td>ケ<span>ke</span></td><td>コ<span>ko</span></td></tr>
            <tr><td>サ<span>sa</span></td><td>シ<span>shi</span></td><td>ス<span>su</span></td><td>セ<span>se</span></td><td>ソ<span>so</span></td></tr>
            <tr><td>タ<span>ta</span></td><td>チ<span>chi</span></td><td>ツ<span>tsu</span></td><td>テ<span>te</span></td><td>ト<span>to</span></td></tr>
            <tr><td>ナ<span>na</span></td><td>ニ<span>ni</span></td><td>ヌ<span>nu</span></td><td>ネ<span>ne</span></td><td>ノ<span>no</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="pronunciation-box">
        <h4>🔊 Cara Membaca Katakana</h4>
        <p style="font-size:0.875rem;margin-bottom:0.75rem;">Bunyi Katakana <strong>identik</strong> dengan Hiragana. Yang berbeda hanya penulisannya dan penggunaannya.</p>
        <table><tbody>
          <tr><td>ー (garis panjang)</td><td>Perpanjang vokal sebelumnya. Contoh: コーヒー (kōhī) = "koohii" dibaca panjang</td></tr>
          <tr><td>ッ (tsu kecil)</td><td>Konsonan ganda / jeda. Contoh: ベッド (beddo) = tempat tidur</td></tr>
          <tr><td>ウィ / ウェ</td><td>Bunyi "wi" / "we" untuk kata serapan asing</td></tr>
          <tr><td>シ vs ツ</td><td><strong>シ (shi)</strong>: garis mendatar. <strong>ツ (tsu)</strong>: garis tegak. Bedakan dengan teliti!</td></tr>
        </tbody></table>
      </div>
      <div class="method-card">
        <h4>⚠️ Perhatian!</h4>
        <p>Hati-hati dengan <strong>シ (shi)</strong> dan <strong>ツ (tsu)</strong>. Mereka sangat mirip. Tipsnya: Lihat arah coretannya! Shi ditarik dari bawah, Tsu ditarik dari atas.</p>
      </div>
      <div class="fact-box">
        <h4>💡 Contoh Kata Serapan</h4>
        <ul style="list-style:disc;padding-left:1.5rem;">
          <li><strong>テレビ</strong> (Terebi) → Television</li>
          <li><strong>コーヒー</strong> (Kōhī) → Coffee</li>
          <li><strong>アイスクリーム</strong> (Aisu Kurīmu) → Ice Cream</li>
        </ul>
      </div>
    `
  },
  kanji: {
    title: "Huruf 3: Dasar Kanji (漢字)",
    icon: "🈳",
    content: `
      <p style="margin-bottom:1rem;color:#475569;line-height:1.75;">Kanji adalah karakter piktograf (gambar). Satu huruf mewakili satu arti utuh. Ada lebih dari 2.000 Kanji yang digunakan sehari-hari di Jepang.</p>
      <h2>Kanji Paling Dasar</h2>
      <div class="kanji-grid">
        <div class="kanji-card"><span class="kanji-char">木</span><strong class="kanji-romaji">Ki</strong><span class="kanji-arti">(Pohon)</span><p class="kanji-desc">Mirip pohon dengan dahan</p></div>
        <div class="kanji-card"><span class="kanji-char">火</span><strong class="kanji-romaji">Hi</strong><span class="kanji-arti">(Api)</span><p class="kanji-desc">Seperti api unggun</p></div>
        <div class="kanji-card"><span class="kanji-char">水</span><strong class="kanji-romaji">Mizu</strong><span class="kanji-arti">(Air)</span><p class="kanji-desc">Seperti aliran air</p></div>
        <div class="kanji-card"><span class="kanji-char">山</span><strong class="kanji-romaji">Yama</strong><span class="kanji-arti">(Gunung)</span><p class="kanji-desc">Tiga puncak gunung</p></div>
        <div class="kanji-card"><span class="kanji-char">日</span><strong class="kanji-romaji">Nichi/Hi</strong><span class="kanji-arti">(Matahari/Hari)</span><p class="kanji-desc">Lingkaran matahari</p></div>
        <div class="kanji-card"><span class="kanji-char">月</span><strong class="kanji-romaji">Tsuki</strong><span class="kanji-arti">(Bulan)</span><p class="kanji-desc">Bentuk bulan sabit</p></div>
        <div class="kanji-card"><span class="kanji-char">人</span><strong class="kanji-romaji">Hito</strong><span class="kanji-arti">(Orang)</span><p class="kanji-desc">Dua kaki berjalan</p></div>
        <div class="kanji-card"><span class="kanji-char">口</span><strong class="kanji-romaji">Kuchi</strong><span class="kanji-arti">(Mulut)</span><p class="kanji-desc">Kotak mulut terbuka</p></div>
      </div>
      <div class="pronunciation-box">
        <h4>🔊 Cara Membaca Kanji: On'yomi vs Kun'yomi</h4>
        <p style="color:#6d28d9;font-size:0.875rem;margin-bottom:0.75rem;">Kanji memiliki dua cara baca. Ini adalah salah satu hal paling penting dalam belajar bahasa Jepang!</p>
        <table><tbody>
          <tr><td>On'yomi (音読み)</td><td>Cara baca dari bahasa Cina. Biasanya dipakai saat kanji digabung dengan kanji lain. Contoh: 山 → <strong>SAN</strong> (富士山 = Fu-ji-<strong>san</strong>)</td></tr>
          <tr><td>Kun'yomi (訓読み)</td><td>Cara baca asli Jepang. Biasanya dipakai saat kanji berdiri sendiri. Contoh: 山 → <strong>yama</strong> (山が高い = <strong>yama</strong> ga takai)</td></tr>
          <tr><td>日 (matahari/hari)</td><td>On'yomi: <strong>nichi / jitsu</strong> (日本 = Ni<strong>chi</strong>hon). Kun'yomi: <strong>hi</strong> (今日 = kyō)</td></tr>
          <tr><td>水 (air)</td><td>On'yomi: <strong>sui</strong> (水曜日 = <strong>sui</strong>youbi). Kun'yomi: <strong>mizu</strong> (水 = <strong>mizu</strong>)</td></tr>
          <tr><td>人 (orang)</td><td>On'yomi: <strong>jin / nin</strong> (日本人 = Nihon<strong>jin</strong>). Kun'yomi: <strong>hito</strong> (この人 = kono <strong>hito</strong>)</td></tr>
        </tbody></table>
      </div>
      <div class="fact-box">
        <h4>🎯 Cara Menguasai Kanji</h4>
        <p>Jangan hafalkan coretan satu per satu secara acak. Pelajarilah <strong>Radikal</strong> (bagian kecil pembentuk Kanji) agar kamu bisa menebak arti kanji baru dengan mudah!</p>
      </div>
      <h2>📚 Referensi Kanji Lengkap</h2>
      <p style="color:#475569;margin-bottom:1rem;line-height:1.75;">Karena halaman ini hanya memuat kanji dasar, gunakan sumber-sumber berikut untuk menjelajahi seluruh daftar kanji secara lengkap:</p>
      <div class="kanji-links">
        <a href="https://jisho.org/search/%23kanji" target="_blank" class="kanji-link-card">
          <span class="kanji-link-badge">Jisho.org</span>
          <p class="kanji-link-desc">Kamus Jepang-Inggris terlengkap. Bisa cari kanji berdasarkan radikal, coretan, atau bunyi.</p>
          <span class="kanji-link-cta">Buka Jisho →</span>
        </a>
        <a href="https://www.wanikani.com" target="_blank" class="kanji-link-card">
          <span class="kanji-link-badge">WaniKani</span>
          <p class="kanji-link-desc">Platform belajar kanji dengan metode SRS (spaced repetition). Cocok untuk pemula hingga menengah.</p>
          <span class="kanji-link-cta">Buka WaniKani →</span>
        </a>
        <a href="https://kanjialive.com" target="_blank" class="kanji-link-card">
          <span class="kanji-link-badge">Kanji Alive</span>
          <p class="kanji-link-desc">Referensi kanji gratis dengan panduan coretan animasi dan contoh penggunaan nyata.</p>
          <span class="kanji-link-cta">Buka Kanji Alive →</span>
        </a>
      </div>
    `
  },
  salam: {
    title: "Salam (Aisatsu - 挨拶)",
    icon: "🙏",
    content: `
      <p style="margin-bottom:1rem;color:#475569;line-height:1.75;">Orang Jepang sangat menghargai kesopanan. Salam adalah bagian terpenting dari komunikasi sehari-hari.</p>
      <h2>Salam Sehari-Hari</h2>
      <div style="overflow-x:auto;margin-bottom:1.5rem;">
        <table class="wiki-table">
          <thead><tr><th>Kana</th><th>Romaji</th><th>Arti</th><th>Situasi</th></tr></thead>
          <tbody>
            <tr><td style="font-size:1.25rem;">おはようございます</td><td style="font-family:monospace;color:#0369a1;">Ohayou Gozaimasu</td><td>Selamat Pagi</td><td style="font-size:0.8rem;color:#64748b;">Formal, sebelum siang</td></tr>
            <tr><td style="font-size:1.25rem;">こんにちは</td><td style="font-family:monospace;color:#0369a1;">Konnichiwa</td><td>Halo / Selamat Siang</td><td style="font-size:0.8rem;color:#64748b;">Siang hari</td></tr>
            <tr><td style="font-size:1.25rem;">こんばんは</td><td style="font-family:monospace;color:#0369a1;">Konbanwa</td><td>Selamat Malam</td><td style="font-size:0.8rem;color:#64748b;">Malam hari</td></tr>
            <tr><td style="font-size:1.25rem;">ありがとうございます</td><td style="font-family:monospace;color:#0369a1;">Arigatou Gozaimasu</td><td>Terima Kasih</td><td style="font-size:0.8rem;color:#64748b;">Formal</td></tr>
            <tr><td style="font-size:1.25rem;">すみません</td><td style="font-family:monospace;color:#0369a1;">Sumimasen</td><td>Permisi / Maaf</td><td style="font-size:0.8rem;color:#64748b;">Minta perhatian</td></tr>
            <tr><td style="font-size:1.25rem;">さようなら</td><td style="font-family:monospace;color:#0369a1;">Sayounara</td><td>Selamat Tinggal</td><td style="font-size:0.8rem;color:#64748b;">Perpisahan lama</td></tr>
          </tbody>
        </table>
      </div>
      <div class="pronunciation-box">
        <h4>🔊 Cara Membaca Salam dengan Benar</h4>
        <p style="color:#6d28d9;font-size:0.875rem;margin-bottom:0.75rem;">Tanda <strong>(·)</strong> = pemisah suku kata. Huruf kapital = suku kata yang sedikit lebih ditekan.</p>
        <table><tbody>
          <tr><td>おはようございます</td><td>o·ha·<strong>YO</strong>·u go·za·i·<strong>MA</strong>·su — "u" di akhir hampir tidak terdengar</td></tr>
          <tr><td>こんにちは</td><td>kon·ni·<strong>CHI</strong>·wa — は di sini dibaca "wa", bukan "ha"</td></tr>
          <tr><td>こんばんは</td><td>kom·<strong>BAN</strong>·wa — "n" sebelum "b" berubah menjadi "m"</td></tr>
          <tr><td>ありがとうございます</td><td>a·ri·ga·<strong>TO</strong>·u go·za·i·<strong>MA</strong>·su — ucapkan dengan tulus &amp; pelan</td></tr>
          <tr><td>すみません</td><td>su·mi·<strong>MA</strong>·sen — "su" di awal hampir tidak terdengar</td></tr>
          <tr><td>さようなら</td><td>sa·<strong>YO</strong>·u·na·ra — ucapkan dengan nada sedih karena artinya perpisahan lama</td></tr>
        </tbody></table>
      </div>
      <div class="fact-box">
        <h4>🙇 Budaya Membungkuk</h4>
        <p>Di Jepang, salam biasanya disertai dengan membungkuk (Ojigi). Semakin dalam kamu membungkuk, semakin besar rasa hormatmu. Membungkuk 15° untuk salam biasa, 30° untuk rasa hormat, dan 45° untuk permohonan maaf yang serius.</p>
      </div>
    `
  },
  angka: {
    title: "Angka Dasar 1-10 (Suuji - 数字)",
    icon: "🔢",
    content: `
      <p style="margin-bottom:1rem;color:#475569;line-height:1.75;">Belajar menghitung dalam bahasa Jepang sangat penting! Ada dua sistem bilangan: sistem asli Jepang dan sistem dari Cina.</p>
      <h2>Angka 1-10</h2>
      <div class="angka-grid">
        <div class="angka-card"><span class="angka-kanji">一</span><span class="angka-num">1</span><strong class="angka-romaji">Ichi</strong></div>
        <div class="angka-card"><span class="angka-kanji">二</span><span class="angka-num">2</span><strong class="angka-romaji">Ni</strong></div>
        <div class="angka-card"><span class="angka-kanji">三</span><span class="angka-num">3</span><strong class="angka-romaji">San</strong></div>
        <div class="angka-card"><span class="angka-kanji">四</span><span class="angka-num">4</span><strong class="angka-romaji">Yon/Shi</strong></div>
        <div class="angka-card"><span class="angka-kanji">五</span><span class="angka-num">5</span><strong class="angka-romaji">Go</strong></div>
        <div class="angka-card"><span class="angka-kanji">六</span><span class="angka-num">6</span><strong class="angka-romaji">Roku</strong></div>
        <div class="angka-card"><span class="angka-kanji">七</span><span class="angka-num">7</span><strong class="angka-romaji">Nana/Shichi</strong></div>
        <div class="angka-card"><span class="angka-kanji">八</span><span class="angka-num">8</span><strong class="angka-romaji">Hachi</strong></div>
        <div class="angka-card"><span class="angka-kanji">九</span><span class="angka-num">9</span><strong class="angka-romaji">Kyuu/Ku</strong></div>
        <div class="angka-card"><span class="angka-kanji">十</span><span class="angka-num">10</span><strong class="angka-romaji">Juu</strong></div>
      </div>
      <div class="pronunciation-box">
        <h4>🔊 Cara Membaca Angka</h4>
        <p style="color:#6d28d9;font-size:0.875rem;margin-bottom:0.75rem;">Beberapa angka memiliki dua cara baca karena alasan budaya dan konteks penggunaan.</p>
        <table><tbody>
          <tr><td>1–3, 5, 6, 8, 10</td><td>Hanya satu cara baca: <span class="sound-pill">ichi</span><span class="sound-pill">ni</span><span class="sound-pill">san</span><span class="sound-pill">go</span><span class="sound-pill">roku</span><span class="sound-pill">hachi</span><span class="sound-pill">juu</span></td></tr>
          <tr><td>4 = し/よん</td><td><strong>Shi</strong> terdengar seperti 死 (kematian) → pakai <strong>Yon</strong> untuk menghindari kesialan</td></tr>
          <tr><td>7 = しち/なな</td><td><strong>Shichi</strong> untuk waktu &amp; urutan, <strong>Nana</strong> untuk konteks umum &amp; menghitung benda</td></tr>
          <tr><td>9 = く/きゅう</td><td><strong>Ku</strong> terdengar seperti 苦 (penderitaan) → pakai <strong>Kyuu</strong> agar lebih aman</td></tr>
          <tr><td>Angka besar</td><td>11 = <strong>juu-ichi</strong> | 20 = <strong>ni-juu</strong> | 100 = <strong>hyaku</strong> | 1000 = <strong>sen</strong> | 10.000 = <strong>man</strong></td></tr>
        </tbody></table>
      </div>
      <div class="method-card">
        <h4>📊 Pola Angka Lebih Besar</h4>
        <p>Setelah 10, pola menjadi sangat mudah! <strong>11 = Juu-ichi</strong>, <strong>20 = Ni-juu</strong>, <strong>100 = Hyaku</strong>, <strong>1000 = Sen</strong>. Cukup gabungkan saja!</p>
      </div>
    `
  },
  perkenalan: {
    title: "Perkenalan Diri (Jikoshoukai - 自己紹介)",
    icon: "👤",
    content: `
      <p style="margin-bottom:1rem;color:#475569;line-height:1.75;">Ingin memperkenalkan diri dalam bahasa Jepang? Ikuti pola sederhana berikut ini.</p>
      <h2>Pola Dasar Perkenalan</h2>
      <div class="method-card" style="text-align:center;margin-bottom:1.5rem;">
        <p style="font-size:1.1rem;font-style:italic;color:#0369a1;font-weight:500;">
          "Hajimemashite. Watashi wa [Nama] desu. Yoroshiku onegaishimasu!"
        </p>
        <p style="color:#64748b;margin-top:0.5rem;font-size:0.875rem;">
          "Senang bertemu denganmu. Saya adalah [Nama]. Mohon bantuannya!"
        </p>
      </div>
      <h2>Kosakata Perkenalan</h2>
      <div style="overflow-x:auto;margin-bottom:1.5rem;">
        <table class="wiki-table">
          <thead><tr><th>Jepang</th><th>Romaji</th><th>Arti</th></tr></thead>
          <tbody>
            <tr><td style="font-size:1.25rem;">はじめまして</td><td style="font-family:monospace;color:#0369a1;">Hajimemashite</td><td>Senang berkenalan</td></tr>
            <tr><td style="font-size:1.25rem;">わたしは</td><td style="font-family:monospace;color:#0369a1;">Watashi wa</td><td>Saya adalah...</td></tr>
            <tr><td style="font-size:1.25rem;">〜です</td><td style="font-family:monospace;color:#0369a1;">...desu</td><td>Adalah / Saya...</td></tr>
            <tr><td style="font-size:1.25rem;">よろしく</td><td style="font-family:monospace;color:#0369a1;">Yoroshiku</td><td>Mohon bantuannya</td></tr>
            <tr><td style="font-size:1.25rem;">おなまえは？</td><td style="font-family:monospace;color:#0369a1;">Onamae wa?</td><td>Siapa namamu?</td></tr>
            <tr><td style="font-size:1.25rem;">〜からきました</td><td style="font-family:monospace;color:#0369a1;">...kara kimashita</td><td>Saya berasal dari...</td></tr>
          </tbody>
        </table>
      </div>
      <div class="pronunciation-box">
        <h4>🔊 Cara Membaca Frasa Perkenalan</h4>
        <p style="color:#6d28d9;font-size:0.875rem;margin-bottom:0.75rem;">Ucapkan dengan jelas, pelan, dan sertai senyuman. Tanda (') = bunyi "u" atau "i" yang hampir hilang.</p>
        <table><tbody>
          <tr><td>はじめまして</td><td>ha·ji·me·<strong>MA</strong>·shi·te — ucapkan sambil membungkuk sedikit</td></tr>
          <tr><td>わたしは</td><td>wa·ta·shi·<strong>WA</strong> — は di sini dibaca "wa"</td></tr>
          <tr><td>〜です</td><td>de·<strong>S'</strong> — bunyi "u" di akhir hampir tidak terdengar (bukan "desu" penuh)</td></tr>
          <tr><td>よろしくお願いします</td><td>yo·ro·shi·ku o·ne·<strong>GAI</strong>·shi·<strong>MAS'</strong> — "u" di "masu" menghilang</td></tr>
          <tr><td>〜からきました</td><td>...ka·ra ki·ma·shi·<strong>TA</strong> — tekan di suku kata terakhir</td></tr>
        </tbody></table>
      </div>
      <div class="fact-box">
        <h4>💬 Contoh Dialog</h4>
        <div style="color:#78350f;">
          <p style="margin-bottom:6px;line-height:1.7;"><strong>A:</strong> Hajimemashite. Watashi wa Budi desu. Indonesia kara kimashita.</p>
          <p style="line-height:1.7;"><strong>B:</strong> Hajimemashite, Budi-san. Watashi wa Yuki desu. Yoroshiku!</p>
        </div>
      </div>
    `
  },
  tata_bahasa: {
    title: "Tata Bahasa Dasar (Bunpou - 文法)",
    icon: "📖",
    content: `
      <p style="margin-bottom:1rem;color:#475569;line-height:1.75;">Struktur kalimat bahasa Jepang berbeda dengan Indonesia. Memahami polanya adalah kunci!</p>
      <h2>Pola Kalimat S-O-P</h2>
      <div class="fact-box" style="margin-bottom:1.5rem;">
        <p>Bahasa Jepang menggunakan pola <strong>S - O - P</strong> (Subjek - Objek - Predikat), berbeda dengan bahasa Indonesia yang S - P - O.</p>
        <div class="mono-box">Watashi wa (S) + Gohan o (O) + Tabemasu (P).</div>
        <p style="color:#92400e;font-size:0.875rem;margin-top:6px;">= Saya makan nasi.</p>
      </div>
      <h2>Partikel Penting</h2>
      <div class="partikel-grid">
        <div class="method-card"><h4 style="font-size:1.125rem;">は (wa)</h4><p style="font-size:0.7rem;color:#64748b;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">Penanda Subjek</p><p style="font-family:monospace;font-size:0.875rem;">Watashi wa = Saya (subjek)</p></div>
        <div class="method-card"><h4 style="font-size:1.125rem;">を (wo/o)</h4><p style="font-size:0.7rem;color:#64748b;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">Penanda Objek</p><p style="font-family:monospace;font-size:0.875rem;">Gohan o = Nasi (objek)</p></div>
        <div class="method-card"><h4 style="font-size:1.125rem;">に (ni)</h4><p style="font-size:0.7rem;color:#64748b;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">Penanda Lokasi/Waktu</p><p style="font-family:monospace;font-size:0.875rem;">Gakkou ni = Di sekolah</p></div>
        <div class="method-card"><h4 style="font-size:1.125rem;">の (no)</h4><p style="font-size:0.7rem;color:#64748b;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">Kepemilikan</p><p style="font-family:monospace;font-size:0.875rem;">Watashi no = Milik saya</p></div>
        <div class="method-card"><h4 style="font-size:1.125rem;">と (to)</h4><p style="font-size:0.7rem;color:#64748b;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">Dan / Bersama</p><p style="font-family:monospace;font-size:0.875rem;">Yuki to = Bersama Yuki</p></div>
        <div class="method-card"><h4 style="font-size:1.125rem;">か (ka)</h4><p style="font-size:0.7rem;color:#64748b;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">Kalimat Tanya</p><p style="font-family:monospace;font-size:0.875rem;">Nihon-jin desu ka? = Apakah orang Jepang?</p></div>
      </div>
      <div class="pronunciation-box">
        <h4>🔊 Cara Membaca Partikel &amp; Akhiran Penting</h4>
        <p style="color:#6d28d9;font-size:0.875rem;margin-bottom:0.75rem;">Beberapa huruf memiliki bunyi berbeda saat menjadi partikel. Ini wajib diketahui agar tidak salah ucap!</p>
        <table><tbody>
          <tr><td>は sebagai partikel</td><td>Dibaca <strong>"wa"</strong>, BUKAN "ha". Contoh: 私<strong>は</strong> → watashi <strong>wa</strong> (Saya...)</td></tr>
          <tr><td>へ sebagai partikel</td><td>Dibaca <strong>"e"</strong>, BUKAN "he". Contoh: 学校<strong>へ</strong> → gakkou <strong>e</strong> (ke sekolah)</td></tr>
          <tr><td>を sebagai partikel</td><td>Dibaca <strong>"o"</strong>, BUKAN "wo". Contoh: ご飯<strong>を</strong> → gohan <strong>o</strong> (nasi [objek])</td></tr>
          <tr><td>〜です (desu)</td><td>Bunyi "u" hilang → diucapkan <strong>"des'"</strong>. Contoh: 学生です → gakusei <strong>des'</strong></td></tr>
          <tr><td>〜ます (masu)</td><td>Bunyi "u" hilang → diucapkan <strong>"mas'"</strong>. Contoh: 食べます → tabema<strong>s'</strong></td></tr>
          <tr><td>〜ません (masen)</td><td>Diucapkan <strong>"ma·sen"</strong> — ini bentuk negatif, "u" tidak hilang</td></tr>
        </tbody></table>
      </div>
      <div class="method-card">
        <h4>✅ Tips Belajar Tata Bahasa</h4>
        <p>Jangan coba untuk langsung menerjemahkan dari Bahasa Indonesia. Biasakan berpikir dalam pola Jepang: tempatkan kata kerja selalu di akhir kalimat!</p>
      </div>
    `
  },
  tentang: {
    title: "Tentang Saya",
    icon: "ℹ️",
    content: `
      <p style="margin-bottom:1rem;color:#475569;line-height:1.75;">Halo! Saya Johanes Andrew Wijaya, pembuat Nihongo Wiki. Saya membuat website ini karena ingin membantu pelajar Indonesia memahami bahasa Jepang dengan cara yang lebih menarik dan mudah dicerna.</p>
      <div class="fact-box">
        <h4>🎯 Tujuan Pembuatan</h4>
        <p>Website ini dibuat untuk memberikan dasar yang kuat bagi pemula yang ingin belajar Hiragana, Katakana, Kanji, salam, angka, perkenalan, dan tata bahasa Jepang.</p>
      </div>
      <div class="fact-box">
        <h4>💡 Motivasi Saya</h4>
        <p>Saya percaya bahwa belajar bahasa Jepang tidak harus membosankan. Motivasi saya adalah membuat materi yang dirancang seperti wiki, jadi kamu bisa belajar dengan cepat dan kembali lagi tanpa ragu.</p>
      </div>
      <div class="method-card">
        <h4>✨ Harapan Website</h4>
        <p>Saya berharap Nihongo Wiki menjadi tempat pertama yang dicari oleh pemula sebelum memutuskan belajar lebih jauh. Tujuannya adalah agar kamu dapat memulai dengan percaya diri dan merasa seru saat mempelajari bahasa Jepang.</p>
      </div>
      <div class="contact-card" style="margin-top:1rem;">
        <h2>Ingin Terhubung?</h2>
        <p>Kalau kamu punya saran materi atau ingin bertanya langsung, kunjungi halaman Kontak saya di sebelah.</p>
      </div>
    `
  },
  kontak: {
    title: "Kontak Saya",
    icon: "📞",
    content: `
      <div class="contact-card">
        <h2>Johanes Andrew Wijaya</h2>
        <p>Silakan hubungi saya melalui telepon atau WhatsApp untuk informasi belajar bahasa Jepang, materi, dan dukungan.</p>
        <div class="contact-detail">
          <span>📱 Nomor Telepon</span>
          <strong><a href="tel:081457676755">081457676755</a></strong>
        </div>
      </div>
      <div class="fact-box">
        <h4>🗂️ Keterangan</h4>
        <p>Kontak ini akan membantu kamu menjangkau pembuat aplikasi jika kamu butuh saran atau ingin berdiskusi lebih lanjut tentang materi bahasa Jepang.</p>
      </div>
    `
  }
};

const navItems = [
  { id: "home",        label: "Beranda & Fakta Unik",  icon: "🏠" },
  { id: "hiragana",    label: "Huruf 1: Hiragana",      icon: "✏️" },
  { id: "katakana",    label: "Huruf 2: Katakana",      icon: "🔤" },
  { id: "kanji",       label: "Huruf 3: Dasar Kanji",   icon: "🈳" },
  { id: "salam",       label: "Salam (Aisatsu)",         icon: "🙏" },
  { id: "angka",       label: "Angka Dasar 1-10",       icon: "🔢" },
  { id: "perkenalan",  label: "Perkenalan Diri",         icon: "👤" },
  { id: "tata_bahasa", label: "Tata Bahasa Dasar",      icon: "📖" },
  { id: "tentang",     label: "Tentang Saya",           icon: "ℹ️" },
  { id: "kontak",      label: "Kontak Saya",            icon: "📞" },
];

// ── STATE ─────────────────────────────────────────────────────────────────────
let currentLesson = "home";
let searchQuery   = "";

// ── HERO / MAIN TRANSITIONS ───────────────────────────────────────────────────
function goToMain() {
  const hero = document.getElementById("hero-screen");
  const app  = document.getElementById("app-shell");
  hero.style.opacity = "0";
  hero.style.pointerEvents = "none";
  setTimeout(() => {
    hero.style.display = "none";
    app.style.opacity  = "1";
    app.style.pointerEvents = "auto";
  }, 600);
}

function goToHero() {
  const hero = document.getElementById("hero-screen");
  const app  = document.getElementById("app-shell");
  hero.style.display = "flex";
  app.style.opacity  = "0";
  app.style.pointerEvents = "none";
  setTimeout(() => {
    hero.style.opacity = "1";
    hero.style.pointerEvents = "auto";
  }, 10);
}

// ── NAVIGATION ────────────────────────────────────────────────────────────────
function navigate(id) {
  currentLesson = id;
  renderNav();
  renderContent();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderNav() {
  const nav       = document.getElementById("main-nav");
  const noResults = document.getElementById("no-results");
  const q         = searchQuery.toLowerCase();
  const filtered  = navItems.filter(item => item.label.toLowerCase().includes(q));

  nav.innerHTML = filtered.map(item => `
    <button
      class="sidebar-nav-btn${item.id === currentLesson ? " sidebar-nav-active" : ""}"
      onclick="navigate('${item.id}')"
    >${item.icon} ${item.label}</button>
  `).join("");

  noResults.style.display = filtered.length === 0 ? "block" : "none";
}

function renderContent() {
  const lesson = lessons[currentLesson];
  if (!lesson) return;
  document.getElementById("breadcrumb-current").textContent = lesson.title;
  document.getElementById("article-icon").textContent       = lesson.icon;
  document.getElementById("article-title").textContent      = lesson.title;
  document.getElementById("current-label").textContent      = lesson.title;

  const content = document.getElementById("main-content");
  content.classList.remove("fade-in");
  content.classList.add("fade-out");

  setTimeout(() => {
    content.innerHTML = lesson.content;
    content.classList.remove("fade-out");
    void content.offsetWidth;
    content.classList.add("fade-in");
  }, 180);
}

// ── SEARCH ────────────────────────────────────────────────────────────────────
function onSearch(val) {
  searchQuery = val;
  const clearBtn = document.getElementById("header-clear-btn");
  clearBtn.classList.toggle("visible", val.length > 0);
  renderNav();
}

function clearSearch() {
  searchQuery = "";
  document.getElementById("header-search").value = "";
  document.getElementById("header-clear-btn").classList.remove("visible");
  renderNav();
}

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderContent();
});
