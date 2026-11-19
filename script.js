const albuns = [
    {
        id: "sour",
        btn: "💜 SOUR (2021)",
        titulo: "SOUR",
        sub: "1º Álbum de Estúdio • Geffen Records",
        capa: "https://upload.wikimedia.org/wikipedia/en/b/b2/Olivia_Rodrigo_-_SOUR.png",
        stats: [
            ["Lançamento", "21 Mai 2021"],
            ["Faixas", "11 músicas"],
            ["Gênero", "Pop / Pop-Punk"],
            ["Grammys", "3 Prêmios"]
        ],
        desc: "O fenômeno mundial de estreia de Olivia Rodrigo, misturando baladas confessionais ao piano com explosões de pop-punk anos 90.",
        ytGeral: "https://www.youtube.com/results?search_query=Olivia+Rodrigo+SOUR+full+album",
        faixas: [
            { nome: "brutal", dur: "2:23", tag: "Single", vid: "OGUy2UmRx3I" },
            { nome: "traitor", dur: "3:49", tag: "Single", vid: "CRrf3h9S4Qw" },
            { nome: "drivers license", dur: "4:02", tag: "Hit #1", vid: "ZmDBbnmKpqQ" },
            { nome: "1 step forward, 3 steps back", dur: "2:43", tag: "", vid: "p06D7579a_4" },
            { nome: "deja vu", dur: "3:35", tag: "Single", vid: "cii6ruuycQA" },
            { nome: "good 4 u", dur: "2:58", tag: "Hit #1", vid: "gNi_6U5Pm_o" },
            { nome: "enough for you", dur: "3:22", tag: "", vid: "983bBbJx0Mk" },
            { nome: "happier", dur: "2:55", tag: "", vid: "ZQFmRXgeR-s" },
            { nome: "jealousy, jealousy", dur: "2:53", tag: "", vid: "Z-9gQjUZMm0" },
            { nome: "favorite crime", dur: "2:32", tag: "", vid: "AyX_LL9nWSE" },
            { nome: "hope ur ok", dur: "3:29", tag: "", vid: "ZLl9WK3372s" }
        ]
    },
    {
        id: "guts",
        btn: "🖤 GUTS (spilled)",
        titulo: "GUTS (spilled)",
        sub: "2º Álbum de Estúdio + Edição Deluxe",
        capa: "https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png",
        stats: [
            ["Lançamento", "08 Set 2023"],
            ["Deluxe", "22 Mar 2024"],
            ["Faixas", "17 músicas"],
            ["Gênero", "Pop-Rock"]
        ],
        desc: "Mais barulhento e visceral. Inclui as 12 faixas originais mais as 5 faixas bônus da versão spilled.",
        ytGeral: "https://www.youtube.com/results?search_query=Olivia+Rodrigo+GUTS+spilled+full+album",
        faixas: [
            { nome: "all-american bitch", dur: "2:45", tag: "", vid: "k6M_R0t7E8o" },
            { nome: "bad idea right?", dur: "3:04", tag: "Single", vid: "Dj9qJsJfvjQ" },
            { nome: "vampire", dur: "3:39", tag: "Hit #1", vid: "RlPNh_PBZb4" },
            { nome: "lacy", dur: "2:57", tag: "", vid: "33sM8eE8xI0" },
            { nome: "ballad of a homeschooled girl", dur: "3:23", tag: "", vid: "obsp6J_a5gE" },
            { nome: "making the bed", dur: "3:18", tag: "", vid: "a6q_rQ5k00Y" },
            { nome: "logical", dur: "3:51", tag: "", vid: "0C6a6hJ0g_w" },
            { nome: "get him back!", dur: "3:31", tag: "Single", vid: "ZsJ-BHohXRI" },
            { nome: "love is embarrassing", dur: "2:34", tag: "", vid: "7c85q_C86E4" },
            { nome: "the grudge", dur: "3:09", tag: "", vid: "9k7aB04t0kE" },
            { nome: "pretty isn't pretty", dur: "3:19", tag: "", vid: "51a_x_C5c2w" },
            { nome: "teenage dream", dur: "3:42", tag: "", vid: "W4r3u_C_E2w" },
            { nome: "obsessed", dur: "2:50", tag: "Deluxe", vid: "QXcjPySjdJU" },
            { nome: "girl i've always been", dur: "2:01", tag: "Deluxe", vid: "C4b211M4oY8" },
            { nome: "scared of my guitar", dur: "4:23", tag: "Deluxe", vid: "V3O921O4f3g" },
            { nome: "stranger", dur: "3:12", tag: "Deluxe", vid: "E4f212O4g4h" },
            { nome: "so american", dur: "2:49", tag: "Deluxe", vid: "R5h323P5h5i" }
        ]
    },
    {
        id: "hsmtmts",
        btn: "🎭 HSMTMTS",
        titulo: "HSMTMTS: As Músicas",
        sub: "Trilhas Sonoras • Walt Disney Records",
        capa: "https://upload.wikimedia.org/wikipedia/en/6/63/High_School_Musical_The_Musical_The_Series_Soundtrack.jpg",
        stats: [
            ["Período", "2020 – 2022"],
            ["Personagem", "Nini"],
            ["Temporadas", "1, 2 e 3"],
            ["Gravadora", "Walt Disney"]
        ],
        desc: "Músicas gravadas e compostas por Olivia para a série High School Musical: The Musical: The Series.",
        ytGeral: "https://www.youtube.com/results?search_query=Olivia+Rodrigo+High+School+Musical+songs",
        faixas: [
            { nome: "All I Want", dur: "2:57", tag: "Single", vid: "u8tdT5bqWSs" },
            { nome: "Just for a Moment", dur: "3:17", tag: "", vid: "2n8vE0o3_H8" },
            { nome: "Wondering", dur: "3:44", tag: "", vid: "B82q5E3h6xI" },
            { nome: "Out of the Old", dur: "2:48", tag: "", vid: "G7l5oW0e_B8" },
            { nome: "The Rose Song", dur: "2:54", tag: "Single", vid: "n1_R9hL3t3o" },
            { nome: "Granted", dur: "2:34", tag: "", vid: "H8m2pW0f_C9" },
            { nome: "You Never Know", dur: "3:16", tag: "", vid: "J9n3qX1g_D0" }
        ]
    },
    {
        id: "singles",
        btn: "🎬 Singles & Trilhas",
        titulo: "Singles & Especiais",
        sub: "Lançamentos fora dos álbuns principais",
        capa: "https://upload.wikimedia.org/wikipedia/en/4/45/Olivia_Rodrigo_-_Can%27t_Catch_Me_Now.png",
        stats: [
            ["Destaque", "Jogos Vorazes"],
            ["Formato", "Singles & Live"],
            ["Shows", "Tiny Desk / Prom"],
            ["Status", "Completos"]
        ],
        desc: "Trilhas de filmes, covers virais e apresentações acústicas ao vivo.",
        ytGeral: "https://www.youtube.com/@OliviaRodrigo/releases",
        faixas: [
            { nome: "Can't Catch Me Now", dur: "3:25", tag: "Single", vid: "ecJ3k625y6M" },
            { nome: "Stick Season (BBC Live Cover)", dur: "3:02", tag: "", vid: "184C6P8_G0Y" },
            { nome: "NPR Tiny Desk Concert", dur: "18:15", tag: "", vid: "14x5P22k_K8" },
            { nome: "SOUR Prom (Concert Film)", dur: "26:40", tag: "", vid: "9438f9191_Q" },
            { nome: "River (Joni Mitchell Cover)", dur: "3:34", tag: "", vid: "476g2740_A8" }
        ]
    }
];

let currentAlbumIdx = 0;
let currentFilter = "todas";
let searchQuery = "";
let favorites = JSON.parse(localStorage.getItem("olivia_favs") || "[]");

// Renderiza as abas superiores
function renderTabs() {
    document.getElementById("tabs").innerHTML = albuns.map((a, i) => `
        <button class="tab-btn ${i === currentAlbumIdx ? "active" : ""}" onclick="selectAlbum(${i})">
            ${a.btn}
        </button>
    `).join("");
}

// Seleciona um álbum e muda o tema de cores
function selectAlbum(idx) {
    currentAlbumIdx = idx;
    currentFilter = "todas";
    searchQuery = "";
    document.body.setAttribute("data-theme", albuns[idx].id);
    renderTabs();
    renderShowcase();
}

// Renderiza a vitrine completa do álbum
function renderShowcase() {
    const a = albuns[currentAlbumIdx];
    document.getElementById("showcase").innerHTML = `
        <div class="album-left">
            <div class="cover-vinyl-wrap" title="Passe o mouse para girar o vinil">
                <img class="album-cover" src="${a.capa}" alt="Capa ${a.titulo}">
                <div class="vinyl-disc"></div>
            </div>
            <div class="album-stats">
                ${a.stats.map(s => `<div>${s[0]}<span>${s[1]}</span></div>`).join("")}
            </div>
            <a class="btn-yt" href="${a.ytGeral}" target="_blank" rel="noopener">
                ▶ Ouvir Álbum no YouTube
            </a>
        </div>

        <div class="album-right">
            <h2>${a.titulo}</h2>
            <span class="subtitle">${a.sub}</span>
            <p class="desc">${a.desc}</p>

            <div class="controls-bar">
                <input type="text" class="search-input" placeholder="🔍 Buscar música..." value="${searchQuery}" oninput="updateSearch(this.value)">
                <div class="filter-pills">
                    <button class="filter-btn ${currentFilter === "todas" ? "active" : ""}" onclick="setFilter('todas')">Todas</button>
                    <button class="filter-btn ${currentFilter === "hit" ? "active" : ""}" onclick="setFilter('hit')">Hits #1</button>
                    <button class="filter-btn ${currentFilter === "special" ? "active" : ""}" onclick="setFilter('special')">Singles/Deluxe</button>
                    <button class="filter-btn ${currentFilter === "favs" ? "active" : ""}" onclick="setFilter('favs')">❤️ Favoritas</button>
                </div>
            </div>

            <ul class="tracklist" id="tracklistContainer"></ul>
        </div>
    `;
    renderTracklist();
}

// Filtra e renderiza apenas a lista de músicas
function renderTracklist() {
    const a = albuns[currentAlbumIdx];
    const container = document.getElementById("tracklistContainer");

    const filtradas = a.faixas.filter(f => {
        const matchTexto = f.nome.toLowerCase().includes(searchQuery.toLowerCase());
        const isFav = favorites.includes(f.nome);
        
        if (!matchTexto) return false;
        if (currentFilter === "hit") return f.tag === "Hit #1";
        if (currentFilter === "special") return f.tag === "Single" || f.tag === "Deluxe";
        if (currentFilter === "favs") return isFav;
        return true;
    });

    if (filtradas.length === 0) {
        container.innerHTML = `<li class="empty-msg">Nenhuma música encontrada com esse filtro.</li>`;
        return;
    }

    container.innerHTML = filtradas.map((f, i) => {
        const isFav = favorites.includes(f.nome);
        const safeName = f.nome.replace(/'/g, "\\'");
        return `
            <li class="track">
                <div class="track-main">
                    <span class="track-num">${String(i + 1).padStart(2, "0")}</span>
                    <span>${f.nome}</span>
                    ${f.tag ? `<span class="badge">${f.tag}</span>` : ""}
                </div>
                <div class="track-actions">
                    <span style="color:#94a3b8;font-size:.85rem">${f.dur}</span>
                    <button class="fav-btn ${isFav ? "liked" : ""}" onclick="toggleFav('${safeName}')" title="Favoritar">
                        ${isFav ? "♥" : "♡"}
                    </button>
                    <button class="yt-btn" onclick="openVideoModal('${safeName}', '${f.vid}')">
                        ▶ YouTube
                    </button>
                </div>
            </li>
        `;
    }).join("");
}

function updateSearch(val) {
    searchQuery = val;
    renderTracklist();
}

function setFilter(filter) {
    currentFilter = filter;
    renderShowcase();
}

// Salva ou remove dos favoritos no localStorage
function toggleFav(songName) {
    if (favorites.includes(songName)) {
        favorites = favorites.filter(item => item !== songName);
    } else {
        favorites.push(songName);
    }
    localStorage.setItem("olivia_favs", JSON.stringify(favorites));
    renderTracklist();
}

// Controle do Modal de Vídeo
const modal = document.getElementById("videoModal");
const videoWrapper = document.getElementById("videoWrapper");

function openVideoModal(songName, videoId) {
    const queryUrl = `https://www.youtube.com/results?search_query=Olivia+Rodrigo+${encodeURIComponent(songName)}`;
    document.getElementById("modalTitle").textContent = `Olivia Rodrigo — ${songName}`;
    document.getElementById("modalExternalLink").href = queryUrl;

    videoWrapper.innerHTML = `
        <iframe 
            src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
            title="${songName}" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;
    modal.classList.add("open");
}

function closeVideoModal() {
    modal.classList.remove("open");
    videoWrapper.innerHTML = "";
}

document.getElementById("closeModal").addEventListener("click", closeVideoModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeVideoModal();
});

// Inicialização
renderTabs();
renderShowcase();