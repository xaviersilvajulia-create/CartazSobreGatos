// Banco inicial de cartas com fotos reais de gatos
const gatosIniciais = [
  {
    id: 1,
    nome: "Mochi",
    titulo: "O Amassador de Pãozinho",
    categoria: "carinhoso",
    raridade: "Raro",
    foto: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80",
    curiosidade: "Gatos amassam superfícies macias porque isso lembra o movimento que faziam quando filhotes para estimular o leite da mãe.",
    dica: "Deixe uma mantinha de microfibra no sofá — ele vai adotar na hora!",
    fome: 75,
    preguica: 85,
    caos: 25,
    carinhos: 14
  },
  {
    id: 2,
    nome: "Pipoca",
    titulo: "O Corredor das 3h da Manhã",
    categoria: "bagunceiro",
    raridade: "Comum",
    foto: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80",
    curiosidade: "Os famosos 'zoomies' noturnos acontecem porque gatos são crepusculares e acumulam energia se dormirem o dia todo.",
    dica: "Brinque com varinhas por 15 minutos antes de dormir para gastar a bateria dele.",
    fome: 90,
    preguica: 30,
    caos: 98,
    carinhos: 9
  },
  {
    id: 3,
    nome: "Nuvem",
    titulo: "Mestre da Soneca Solar",
    categoria: "dorminhoco",
    raridade: "Lendário",
    foto: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=600&q=80",
    curiosidade: "Gatos dormem entre 12 e 16 horas por dia e seguem os raios de sol pela casa para manter o corpo quentinho sem gastar energia.",
    dica: "Uma rede de janela com ventosas é o presente definitivo para esse perfil.",
    fome: 60,
    preguica: 100,
    caos: 15,
    carinhos: 27
  },
  {
    id: 4,
    nome: "Oliver",
    titulo: "O Inspetor de Caixas",
    categoria: "bagunceiro",
    raridade: "Raro",
    foto: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=600&q=80",
    curiosidade: "Espaços apertados reduzem o estresse felino e dão sensação de segurança e esconderijo perfeito para emboscadas.",
    dica: "Nunca jogue fora uma caixa de papelão antes de deixar ele testar por pelo menos 3 dias.",
    fome: 80,
    preguica: 65,
    caos: 82,
    carinhos: 19
  },
  {
    id: 5,
    nome: "Amora",
    titulo: "A Ronronadora Profissional",
    categoria: "carinhoso",
    raridade: "Lendário",
    foto: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=600&q=80",
    curiosidade: "A frequência do ronronar (entre 25 e 150 Hz) ajuda a acalmar tanto o gato quanto os humanos por perto!",
    dica: "Carinho suave atrás das orelhas e no queixo ativa o modo motorzinho instantaneamente.",
    fome: 70,
    preguica: 80,
    caos: 20,
    carinhos: 35
  },
  {
    id: 6,
    nome: "Biscoito",
    titulo: "O Pãozinho Dorminhoco",
    categoria: "dorminhoco",
    raridade: "Comum",
    foto: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=600&q=80",
    curiosidade: "Quando o gato esconde as patinhas debaixo do corpo (posição 'pão de forma'), significa que ele está super relaxado e confortável.",
    dica: "Não tente puxar as patinhas — aproveite apenas para admirar a simetria!",
    fome: 85,
    preguica: 95,
    caos: 18,
    carinhos: 22
  }
];

let baralho = [...gatosIniciais];
let filtroAtual = "todos";

const grid = document.getElementById("cards-grid");

// Função que monta o HTML de uma carta
function criarElementoCarta(gato) {
  const wrapper = document.createElement("div");
  wrapper.className = "card-wrapper";
  wrapper.dataset.id = gato.id;

  wrapper.innerHTML = `
    <div class="card-inner">
      <!-- FRENTE -->
      <div class="card-face card-front theme-${gato.categoria}">
        <div class="card-header">
          <span class="card-name">${gato.nome}</span>
          <span class="rarity-badge rarity-${gato.raridade}">${gato.raridade}</span>
        </div>

        <div class="photo-frame">
          <img src="${gato.foto}" alt="Foto de ${gato.nome}" loading="lazy" />
        </div>

        <div class="card-class">🐾 ${gato.titulo}</div>

        <div class="stats-box">
          <div class="stat-row">
            <span class="stat-label">🍖 Fome</span>
            <div class="stat-bar-bg">
              <div class="stat-bar-fill" style="width: ${gato.fome}%; background: #ff8fab;"></div>
            </div>
          </div>
          <div class="stat-row">
            <span class="stat-label">💤 Preguiça</span>
            <div class="stat-bar-bg">
              <div class="stat-bar-fill" style="width: ${gato.preguica}%; background: #9d8df1;"></div>
            </div>
          </div>
          <div class="stat-row">
            <span class="stat-label">⚡ Caos</span>
            <div class="stat-bar-bg">
              <div class="stat-bar-fill" style="width: ${gato.caos}%; background: #f4a261;"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- VERSO -->
      <div class="card-face card-back theme-${gato.categoria}">
        <div class="back-title">📖 Sobre ${gato.nome}</div>

        <div class="back-section">
          <strong>Você sabia?</strong>
          <p>${gato.curiosidade}</p>
        </div>

        <div class="back-section">
          <strong>💡 Dica Felina</strong>
          <p>${gato.dica}</p>
        </div>

        <button class="btn-pet" type="button">
          💖 Fazer Carinho (<span class="pet-count">${gato.carinhos}</span>)
        </button>

        <span class="flip-hint">Clique na carta para voltar ↻</span>
      </div>
    </div>
  `;

  // Evento de virar a carta ao clicar
  wrapper.addEventListener("click", (e) => {
    if (e.target.closest(".btn-pet")) return;
    wrapper.classList.toggle("flipped");
  });

  // Evento do botão de carinho
  const btnPet = wrapper.querySelector(".btn-pet");
  const countSpan = wrapper.querySelector(".pet-count");

  btnPet.addEventListener("click", (e) => {
    e.stopPropagation();
    gato.carinhos++;
    countSpan.textContent = gato.carinhos;
    soltarCoracoes(e.clientX, e.clientY);
  });

  return wrapper;
}

// Renderiza as cartas na tela conforme o filtro
function renderizarCartas() {
  grid.innerHTML = "";
  const filtrados =
    filtroAtual === "todos"
      ? baralho
      : baralho.filter((g) => g.categoria === filtroAtual);

  filtrados.forEach((gato) => {
    grid.appendChild(criarElementoCarta(gato));
  });
}

// Animação de corações flutuantes
function soltarCoracoes(x, y) {
  const emojis = ["💖", "🐾", "💕", "✨"];
  for (let i = 0; i < 4; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = `${x + (Math.random() * 40 - 20)}px`;
    heart.style.top = `${y - 10}px`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  }
}

// Filtros no topo
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    filtroAtual = btn.dataset.filter;
    renderizarCartas();
  });
});

// Botão "Carta do Dia" (Sorteio)
const modalSorteio = document.getElementById("modal-sorteio");
const luckyContainer = document.getElementById("lucky-card-container");
const luckyMessage = document.getElementById("lucky-message");

const mensagensSorte = {
  dorminhoco: "Hoje o universo pede descanso, cobertor quentinho e zero pressa!",
  bagunceiro: "Dia perfeito para explorar coisas novas, ter ideias malucas e correr atrás dos seus objetivos!",
  carinhoso: "Sua vibe hoje está pura doçura — ótimo momento para ficar perto de quem você gosta."
};

document.getElementById("btn-sorteio").addEventListener("click", () => {
  const sorteado = baralho[Math.floor(Math.random() * baralho.length)];
  luckyContainer.innerHTML = "";
  luckyContainer.appendChild(criarElementoCarta(sorteado));
  luckyMessage.textContent = mensagensSorte[sorteado.categoria];
  modalSorteio.classList.remove("hidden");
});

// Modal Criador de Carta
const modalCriador = document.getElementById("modal-criador");
document.getElementById("btn-abrir-criador").addEventListener("click", () => {
  modalCriador.classList.remove("hidden");
});

// Fechar modais
document.querySelectorAll(".close-modal").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById(btn.dataset.close).classList.add("hidden");
  });
});

// Atualizar valores dos sliders no formulário
["fome", "preguica", "caos"].forEach((stat) => {
  const input = document.getElementById(`input-${stat}`);
  const label = document.getElementById(`val-${stat}`);
  input.addEventListener("input", () => {
    label.textContent = input.value;
  });
});

// Criar nova carta pelo formulário
document.getElementById("form-criar-carta").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("input-nome").value.trim();
  const titulo = document.getElementById("input-titulo").value.trim();
  const categoria = document.getElementById("input-categoria").value;
  const raridade = document.getElementById("input-raridade").value;
  const curiosidade = document.getElementById("input-curiosidade").value.trim();
  const fome = Number(document.getElementById("input-fome").value);
  const preguica = Number(document.getElementById("input-preguica").value);
  const caos = Number(document.getElementById("input-caos").value);
  const fileInput = document.getElementById("input-foto");

  let fotoUrl = `https://cataas.com/cat?${Date.now()}`; // Foto real aleatória caso não envie arquivo

  if (fileInput.files && fileInput.files[0]) {
    fotoUrl = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(fileInput.files[0]);
    });
  }

  const novaCarta = {
    id: Date.now(),
    nome,
    titulo,
    categoria,
    raridade,
    foto: fotoUrl,
    curiosidade,
    dica: "Carta personalizada criada especialmente para este baralho!",
    fome,
    preguica,
    caos,
    carinhos: 1
  };

  baralho.unshift(novaCarta);
  renderizarCartas();
  e.target.reset();
  modalCriador.classList.add("hidden");
});

// Inicializa o site
renderizarCartas();
