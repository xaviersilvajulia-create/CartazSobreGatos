:root {
    --bg-base: #0a0612;
    --bg-surface: #130c21;
    --bg-hover: rgba(192, 132, 252, 0.08);
    --border-subtle: rgba(216, 180, 254, 0.14);
    --purple-accent: #9333ea;
    --lilac-primary: #c084fc;
    --lilac-light: #f3e8ff;
    --text-secondary: #a195b8;
    --text-muted: #6e6285;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--bg-base);
    background-image: radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.18), transparent 65%);
    color: #ffffff;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    -webkit-font-smoothing: antialiased;
}

.app-wrapper {
    width: 100%;
    max-width: 980px;
    background: rgba(19, 12, 33, 0.65);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--border-subtle);
    border-radius: 24px;
    padding: 36px 44px;
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.65);
    display: flex;
    flex-direction: column;
}

/* Cabeçalho Centralizado */
.top-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--border-subtle);
    gap: 18px;
}

.brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.brand .dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--lilac-primary);
    box-shadow: 0 0 12px var(--lilac-primary);
}

.brand h1 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.65rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--lilac-light);
}

/* Navegação em Abas Centralizadas */
.album-tabs {
    display: flex;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
}

.tab-btn {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid transparent;
    color: var(--text-secondary);
    padding: 8px 18px;
    border-radius: 999px;
    font-family: inherit;
    font-size: 0.86rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
}

.tab-btn:hover {
    color: #ffffff;
    background: var(--bg-hover);
}

.tab-btn.active {
    background: rgba(192, 132, 252, 0.16);
    border-color: rgba(192, 132, 252, 0.35);
    color: var(--lilac-light);
    font-weight: 600;
}

/* Conteúdo Principal */
.main-content {
    padding: 36px 0 28px;
    display: grid;
    grid-template-columns: 270px 1fr;
    gap: 44px;
    align-items: center;
    animation: fadeIn 0.35s ease;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Coluna Esquerda: Capa e Ficha Técnica */
.cover-frame {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid var(--border-subtle);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.55);
    margin-bottom: 18px;
}

.cover-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
}

.cover-frame:hover img {
    transform: scale(1.03);
}

.album-meta-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 0.82rem;
    color: var(--text-secondary);
}

.meta-row {
    display: flex;
    justify-content: space-between;
    padding-bottom: 6px;
    border-bottom: 1px solid var(--border-subtle);
}

.meta-row span:last-child {
    color: var(--lilac-light);
    font-weight: 500;
}

/* Coluna Direita: Título e Tracklist */
.album-header {
    margin-bottom: 24px;
}

.album-tag {
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--lilac-primary);
    display: block;
    margin-bottom: 6px;
}

.album-header h2 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(1.8rem, 3.5vw, 2.4rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.1;
    margin-bottom: 10px;
}

.album-header p {
    color: var(--text-secondary);
    font-size: 0.92rem;
    line-height: 1.55;
}

/* Lista de Faixas */
.tracklist-header {
    display: grid;
    grid-template-columns: 34px 1fr 65px 36px;
    padding: 0 10px 8px;
    border-bottom: 1px solid var(--border-subtle);
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text-muted);
}

.tracklist {
    list-style: none;
    margin-top: 6px;
    max-height: 310px;
    overflow-y: auto;
    padding-right: 4px;
}

.tracklist::-webkit-scrollbar {
    width: 4px;
}

.tracklist::-webkit-scrollbar-thumb {
    background: rgba(192, 132, 252, 0.25);
    border-radius: 10px;
}

.track-row {
    display: grid;
    grid-template-columns: 34px 1fr 65px 36px;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.15s ease;
}

.track-row:hover {
    background: var(--bg-hover);
}

.track-index {
    font-size: 0.82rem;
    color: var(--text-muted);
    font-variant-numeric: tabular-nums;
}

.track-row:hover .track-index {
    color: var(--lilac-primary);
}

.track-title {
    font-size: 0.92rem;
    font-weight: 500;
    color: #ffffff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 10px;
}

.track-row:hover .track-title {
    color: var(--lilac-light);
}

.track-duration {
    font-size: 0.82rem;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
    text-align: right;
    padding-right: 10px;
}

.fav-toggle {
    background: none;
    border: none;
    color: var(--text-muted);
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s, transform 0.2s;
}

.fav-toggle:hover,
.fav-toggle.active {
    color: var(--lilac-primary);
}

.fav-toggle:hover {
    transform: scale(1.15);
}

/* Modal de Vídeo */
.modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(6, 3, 12, 0.85);
    backdrop-filter: blur(12px);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 100;
    padding: 20px;
}

.modal-backdrop.open {
    display: flex;
}

.modal-card {
    background: var(--bg-surface);
    border: 1px solid var(--border-subtle);
    border-radius: 18px;
    width: 100%;
    max-width: 720px;
    overflow: hidden;
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.8);
}

.modal-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    border-bottom: 1px solid var(--border-subtle);
}

.modal-label {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--lilac-primary);
    display: block;
    margin-bottom: 2px;
}

.modal-info h3 {
    font-size: 1.05rem;
    font-weight: 600;
    color: #ffffff;
}

.icon-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-subtle);
    color: var(--text-secondary);
    width: 32px;
    height: 32px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
}

.icon-btn:hover {
    background: var(--purple-accent);
    color: #ffffff;
}

.video-container {
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #000000;
}

.video-container iframe {
    width: 100%;
    height: 100%;
    border: none;
}

.modal-bottom {
    padding: 14px 24px;
    display: flex;
    justify-content: flex-end;
    background: rgba(0, 0, 0, 0.2);
}

.external-link {
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--lilac-primary);
    text-decoration: none;
    transition: color 0.2s;
}

.external-link:hover {
    color: #ffffff;
}

/* Rodapé */
.footer {
    padding-top: 20px;
    border-top: 1px solid var(--border-subtle);
    text-align: center;
    font-size: 0.78rem;
    color: var(--text-muted);
}

/* Responsividade */
@media (max-width: 820px) {
    .app-wrapper {
        padding: 28px 22px;
    }

    .main-content {
        grid-template-columns: 1fr;
        gap: 28px;
        padding: 28px 0;
    }

    .album-sidebar {
        max-width: 260px;
        margin: 0 auto;
        text-align: center;
    }

    .album-header {
        text-align: center;
    }
}