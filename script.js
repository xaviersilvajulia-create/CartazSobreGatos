const albuns = [
    {
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
        desc: "O fenômeno mundial de estreia de Olivia Rodrigo, misturando baladas ao piano com explosões de pop-punk anos 90.",
        ytGeral: "https://www.youtube.com/results?search_query=Olivia+Rodrigo+SOUR+full+album",
        faixas: [
            ["brutal", "2:23", "Single"],
            ["traitor", "3:49", "Single"],
            ["drivers license", "4:02", "Hit #1"],
            ["1 step forward, 3 steps back", "2:43"],
            ["deja vu", "3:35", "Single"],
            ["good 4 u", "2:58", "Hit #1"],
            ["enough for you", "3:22"],
            ["happier", "2:55"],
            ["jealousy, jealousy", "2:53"],
            ["favorite crime", "2:32"],
            ["hope ur ok", "3:29"]
        ]
    },
    {
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
            ["all-american bitch", "2:45"],
            ["bad idea right?", "3:04", "Single"],
            ["vampire", "3:39", "Hit #1"],
            ["lacy", "2:57"],
            ["ballad of a homeschooled girl", "3:23"],
            ["making the bed", "3:18"],
            ["logical", "3:51"],
            ["get him back!", "3:31", "Single"],
            ["love is embarrassing", "2:34"],
            ["the grudge", "3:09"],
            ["pretty isn't pretty", "3:19"],
            ["teenage dream", "3:42"],
            ["obsessed", "2:50", "Deluxe"],
            ["girl i've always been", "2:01", "Deluxe"],
            ["scared of my guitar", "4:23", "Deluxe"],
            ["stranger", "3:12", "Deluxe"],
            ["so american", "2:49", "Deluxe"]
        ]
    },
    {
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
            ["All I Want", "2:57", "Solo"],
            ["Just for a Moment", "3:17"],
            ["Wondering", "3:44"],
            ["Out of the Old", "2:48"],
            ["The Rose Song", "2:54", "Solo"],
            ["Granted", "2:34"],
            ["You Never Know", "3:16"]
        ]
    },
    {
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
            ["Can't Catch Me Now", "3:25", "Jogos Vorazes"],
            ["Stick Season (Cover)", "3:02", "BBC Live"],
            ["NPR Tiny Desk Concert", "18:15", "Ao Vivo"],
            ["SOUR Prom", "26:40", "Show"],
            ["River (Joni Mitchell Cover)", "3:34"]
        ]
    }
];

function render(idx) {
    const a = albuns[idx];
    document.querySelectorAll('.tab-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
    document.getElementById('showcase').innerHTML = `
        <div class="album-left">
            <img class="album-cover" src="${a.capa}" alt="${a.titulo}">
            <div class="album-stats">${a.stats.map(s => `<div>${s[0]}<span>${s[1]}</span></div>`).join('')}</div>
            <a class="btn-yt" href="${a.ytGeral}" target="_blank">▶ Ouvir no YouTube</a>
        </div>
        <div class="album-right">
            <h2>${a.titulo}</h2>
            <span class="subtitle">${a.sub}</span>
            <p class="desc">${a.desc}</p>
            <ul class="tracklist">
                ${a.faixas.map((f, i) => `
                    <li class="track">
                        <div><span class="track-num">${String(i + 1).padStart(2, '0')}</span>${f[0]}${f[2] ? `<span class="badge">${f[2]}</span>` : ''}</div>
                        <div><span style="color:#94a3b8;font-size:.85rem">${f[1]}</span>
                        <a class="yt-link" href="https://www.youtube.com/results?search_query=Olivia+Rodrigo+${encodeURIComponent(f[0])}" target="_blank">▶ YouTube</a></div>
                    </li>`).join('')}
            </ul>
        </div>`;
}

document.getElementById('tabs').innerHTML = albuns.map((a, i) => `<button class="tab-btn" onclick="render(${i})">${a.btn}</button>`).join('');
render(0);