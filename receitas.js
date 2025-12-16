const receitas = [
  {
    titulo: "Smoothie Verde Energizante",
    categoria: "Bebida",
    dificuldade: "facil",
    tempo: "5 min",
    calorias: "220 kcal",
    desc: "Bebida nutritiva e refrescante para começar o dia!",
    img: "img/bebida_verde.jpeg",
    ingredientes: ["1 xícara de espinafre", "1 banana", "1/2 maçã", "200ml de leite de amêndoas", "1 colher de chia"],
    preparo: ["Coloque todos os ingredientes no liquidificador.", "Bata até ficar cremoso.", "Sirva gelado."],
    dica: "Adicione gelo para uma versão mais refrescante!"
  },
  {
    titulo: "Cookies de Banana e Aveia",
    categoria: "Sobremesa",
    dificuldade: "facil",
    tempo: "20 min",
    calorias: "75 kcal",
    desc: "Biscoitos saudáveis com apenas 3 ingredientes!",
    img: "img/cookies_banana.jpeg",
    ingredientes: ["2 bananas maduras", "1 xícara de aveia em flocos", "1/4 xícara de gotas de chocolate 70%"],
    preparo: ["Amasse as bananas.", "Misture com a aveia e as gotas.", "Faça bolinhas e asse por 15 min a 180°C."],
    dica: "Sem açúcar adicionado!"
  },
  {
    titulo: "Hambúrguer de Grão de Bico",
    categoria: "Almoço",
    dificuldade: "media",
    tempo: "35 min",
    calorias: "160 kcal",
    desc: "Opção vegetariana rica em proteínas e fibras!",
    img: "img/hamburguer_grao_bico.jpeg",
    ingredientes: ["1 lata de grão de bico", "1/2 xícara de aveia", "1 dente de alho", "Cebola picada", "Temperos a gosto"],
    preparo: ["Amasse o grão de bico.", "Misture com os outros ingredientes.", "Modele hambúrgueres e grelhe 5 min de cada lado."],
    dica: "Sirva com pão integral e salada."
  },
  {
    titulo: "Omelete de Espinafre",
    categoria: "Café da Manhã",
    dificuldade: "facil",
    tempo: "10 min",
    calorias: "180 kcal",
    desc: "Rico em ferro e proteínas!",
    img: "img/omelete_espinafre.jpg",
    ingredientes: ["2 ovos", "1 xícara de espinafre", "1/2 tomate", "Sal e pimenta"],
    preparo: ["Bata os ovos.", "Refogue o espinafre e tomate.", "Despeje os ovos e cozinhe até firmar."],
    dica: "Adicione queijo branco light!"
  },
  {
    titulo: "Salada de Quinoa com Frango",
    categoria: "Almoço",
    dificuldade: "media",
    tempo: "25 min",
    calorias: "320 kcal",
    desc: "Prato completo e balanceado!",
    img: "img/salada_quinoa.jpeg",
    ingredientes: ["1/2 xícara de quinoa", "100g de frango grelhado", "1/2 pepino", "Tomate cereja", "Azeite e limão"],
    preparo: ["Cozinhe a quinoa.", "Grelhe o frango.", "Misture tudo com o tempero."],
    dica: "Ótima para marmita!"
  },
  {
    titulo: "Panqueca de Aveia Fit",
    categoria: "Café da Manhã",
    dificuldade: "facil",
    tempo: "15 min",
    calorias: "210 kcal",
    desc: "Sem farinha, com banana e aveia!",
    img: "img/panqueca_aveia.jpg",
    ingredientes: ["1 banana", "1/2 xícara de aveia", "1 ovo", "Canela a gosto"],
    preparo: ["Amasse a banana.", "Misture com aveia, ovo e canela.", "Frite em frigideira antiaderente."],
    dica: "Sirva com melado ou frutas."
  },
  {
    titulo: "Sopa de Abóbora Cremosa",
    categoria: "Almoço",
    dificuldade: "facil",
    tempo: "30 min",
    calorias: "150 kcal",
    desc: "Sopa cremosa e reconfortante perfeita para dias frios!",
    img: "img/sopa_abobora.jpg",
    ingredientes: ["500g de abóbora picada", "1 cebola média", "2 dentes de alho", "500ml de caldo de legumes", "Sal e pimenta a gosto", "1 colher de sopa de azeite"],
    preparo: ["Refogue a cebola e alho no azeite.", "Adicione a abóbora e refogue por 5 minutos.", "Acrescente o caldo de legumes e cozinhe até a abóbora ficar macia.", "Bata no liquidificador até obter um creme.", "Tempere com sal e pimenta."],
    dica: "Adicione um fio de azeite e salsinha fresca na hora de servir!"
  },
  {
    titulo: "Bolo de Caneca de Chocolate Fit",
    categoria: "Sobremesa",
    dificuldade: "facil",
    tempo: "3 min",
    calorias: "180 kcal",
    desc: "Bolo individual de chocolate pronto em minutos!",
    img: "img/bolo_caneca.jpg",
    ingredientes: ["2 colheres de sopa de farinha de aveia", "1 colher de sopa de cacau em pó 100%", "1 colher de sopa de mel", "1 ovo", "1/2 colher de chá de fermento em pó"],
    preparo: ["Misture todos os ingredientes em uma caneca.", "Leve ao micro-ondas por 1 minuto e 30 segundos.", "Deixe esfriar por 1 minuto antes de servir."],
    dica: "Adicione algumas frutas vermelhas por cima para mais sabor!"
  },
  {
    titulo: "Creme de Abacate com Mel",
    categoria: "Sobremesa",
    dificuldade: "facil",
    tempo: "5 min",
    calorias: "200 kcal",
    desc: "Sobremesa cremosa e saudável em poucos minutos!",
    img: "img/creme_abacate.jpg",
    ingredientes: ["1 abacate maduro", "1 colher de sopa de mel", "Suco de 1/2 limão", "1 pitada de canela"],
    preparo: ["Retire a polpa do abacate e amasse com um garfo.", "Adicione o mel e suco de limão.", "Misture até obter um creme homogêneo.", "Polvilhe canela por cima."],
    dica: "Sirva imediatamente para não escurecer!"
  },
  {
    titulo: "Frango Grelhado com Legumes",
    categoria: "Almoço",
    dificuldade: "facil",
    tempo: "25 min",
    calorias: "280 kcal",
    desc: "Refeição completa com proteína e legumes assados!",
    img: "img/frango_legumes.jpg",
    ingredientes: ["1 peito de frango", "1/2 abobrinha", "1/2 berinjela", "1 pimentão vermelho", "1 colher de sopa de azeite", "Sal e ervas a gosto"],
    preparo: ["Tempere o frango com sal e ervas.", "Corte os legumes em cubos.", "Grelhe o frango por 6-7 minutos de cada lado.", "Asse os legumes com azeite por 15 minutos.", "Sirva o frango fatiado com os legumes."],
    dica: "Use um mix de ervas como alecrim e tomilho para mais sabor!"
  },
  {
    titulo: "Vitamina de Morango e Iogurte",
    categoria: "Bebida",
    dificuldade: "facil",
    tempo: "3 min",
    calorias: "160 kcal",
    desc: "Bebida proteica e refrescante para o café da manhã!",
    img: "img/vitamina_morango.jpg",
    ingredientes: ["1 xícara de morangos frescos", "1 pote de iogurte natural", "1/2 xícara de leite desnatado", "1 colher de sopa de mel"],
    preparo: ["Lave os morangos e retire os cabinhos.", "Coloque todos os ingredientes no liquidificador.", "Bata até ficar homogêneo.", "Sirva imediatamente."],
    dica: "Adicione uma colher de whey protein para aumentar o teor proteico!"
  },
  {
    titulo: "Tapioca de Frango Desfiado",
    categoria: "Café da Manhã",
    dificuldade: "facil",
    tempo: "10 min",
    calorias: "220 kcal",
    desc: "Opção prática e saborosa para começar o dia!",
    img: "img/tapioca_frango.jpg",
    ingredientes: ["2 colheres de sopa de goma de tapioca", "50g de frango desfiado", "1 fatia de queijo branco", "1 colher de sopa de cebolinha picada"],
    preparo: ["Espalhe a goma de tapioca em uma frigideira antiaderente.", "Aqueça até formar uma massa uniforme.", "Adicione o frango e o queijo.", "Dobre ao meio e sirva quente."],
    dica: "Adicione tomate picado para um sabor extra!"
  },
  {
    titulo: "Salada de Grão de Bico",
    categoria: "Almoço",
    dificuldade: "facil",
    tempo: "15 min",
    calorias: "190 kcal",
    desc: "Salada proteica e refrescante para o almoço!",
    img: "img/salada_grao_bico.jpg",
    ingredientes: ["1 lata de grão de bico escorrido", "1 tomate picado", "1/2 cebola roxa", "Suco de 1 limão", "Azeite e sal a gosto", "Salsinha picada"],
    preparo: ["Misture todos os ingredientes em uma tigela.", "Tempere com limão, azeite e sal.", "Deixe na geladeira por 10 minutos antes de servir."],
    dica: "Adicione cubos de abacate para uma versão mais cremosa!"
  },
  {
    titulo: "Picolé de Coco e Morango",
    categoria: "Sobremesa",
    dificuldade: "facil",
    tempo: "240 min",
    calorias: "90 kcal",
    desc: "Sobremesa gelada e natural sem açúcar refinado!",
    img: "img/picole_coco.jpg",
    ingredientes: ["1 xícara de leite de coco", "1 xícara de morangos picados", "1 colher de sopa de mel", "Forminhas para picolé"],
    preparo: ["Bata os morangos com o mel no liquidificador.", "Misture com o leite de coco.", "Coloque nas forminhas e leve ao freezer por 4 horas."],
    dica: "Para desenformar facilmente, mergulhe as forminhas em água quente por alguns segundos!"
  },
  {
    titulo: "Chá de Gengibre e Limão",
    categoria: "Bebida",
    dificuldade: "facil",
    tempo: "10 min",
    calorias: "15 kcal",
    desc: "Bebida quente e termogênica para acelerar o metabolismo!",
    img: "img/cha_gengibre.jpg",
    ingredientes: ["2 fatias de gengibre fresco", "1 limão", "1 xícara de água quente", "1 colher de chá de mel (opcional)"],
    preparo: ["Ferva a água com as fatias de gengibre por 5 minutos.", "Coe para uma xícara.", "Adicione o suco de limão e mel a gosto."],
    dica: "Tome pela manhã em jejum para potencializar os efeitos termogênicos!"
  },
  {
    titulo: "Cuscuz Marroquino com Legumes",
    categoria: "Almoço",
    dificuldade: "media",
    tempo: "20 min",
    calorias: "210 kcal",
    desc: "Prato tradicional marroquino leve e nutritivo!",
    img: "img/cuscuz_legumes.jpg",
    ingredientes: ["1 xícara de cuscuz marroquino", "1 cenoura ralada", "1/2 pimentão amarelo picado", "1/2 xícara de grão de bico cozido", "Salsinha e hortelã picadas", "Azeite e limão"],
    preparo: ["Hidrate o cuscuz conforme instruções da embalagem.", "Misture com os legumes picados.", "Tempere com azeite, limão e ervas frescas.", "Deixe descansar por 5 minutos antes de servir."],
    dica: "Adicione passas para um toque adocicado!"
  }
];

// FUNÇÕES PARA EXIBIR AS RECEITAS
function renderizarReceitas(lista) {
  const grid = document.getElementById("receitasGrid");
  if (!grid) {
    console.error("Elemento 'receitasGrid' não encontrado!");
    return;
  }
  
  grid.innerHTML = lista.map((r, i) => {
    // Formatar texto da dificuldade para exibição
    let dificuldadeTexto;
    switch(r.dificuldade) {
      case 'facil': dificuldadeTexto = 'Fácil'; break;
      case 'media': dificuldadeTexto = 'Média'; break;
      case 'dificil': dificuldadeTexto = 'Difícil'; break;
      default: dificuldadeTexto = r.dificuldade;
    }
    
    return `
    <div class="receita-card" data-categoria="${r.categoria}">
      <img src="${r.img}" alt="${r.titulo}" class="receita-img" onerror="this.src='img/placeholder.jpg'">
      <div class="receita-content">
        <h3 class="receita-titulo">${r.titulo}</h3>
        <p class="receita-desc">${r.desc}</p>
        <div class="receita-info">
          <span><i class="far fa-clock"></i> ${r.tempo}</span>
          <span><i class="fas fa-fire"></i> ${r.calorias}</span>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
          <span class="dificuldade ${r.dificuldade}">${dificuldadeTexto}</span>
          <span style="color: #23786f; font-weight: 500;">${r.categoria}</span>
        </div>
        <button class="btn-receita" onclick="abrirReceita(${i})">Ver receita completa</button>
      </div>
    </div>
  `}).join("");
}

function abrirReceita(index) {
  const r = receitas[index];
  document.getElementById("modalTitulo").textContent = r.titulo;
  document.getElementById("modalImg").src = r.img;
  document.getElementById("modalTempo").textContent = r.tempo;
  document.getElementById("modalCalorias").textContent = r.calorias;

  const ingList = document.getElementById("modalIngredientes");
  ingList.innerHTML = r.ingredientes.map(i => `<li>${i}</li>`).join("");

  const prepList = document.getElementById("modalPreparo");
  prepList.innerHTML = r.preparo.map((p, idx) => `<li>${idx+1}. ${p}</li>`).join("");

  document.getElementById("modalDica").textContent = r.dica;

  document.getElementById("modal").style.display = "block";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

function filtrarReceitas() {
  const termo = document.getElementById("busca").value.toLowerCase();
  const categoriaAtiva = document.querySelector(".filter-btn.active").textContent;
  
  let filtradas = receitas;
  
  // Filtrar por categoria
  if (categoriaAtiva !== "Todas") {
    filtradas = filtradas.filter(r => r.categoria === categoriaAtiva);
  }
  
  // Filtrar por busca
  if (termo) {
    filtradas = filtradas.filter(r => 
      r.titulo.toLowerCase().includes(termo) || 
      r.desc.toLowerCase().includes(termo) ||
      r.ingredientes.some(i => i.toLowerCase().includes(termo))
    );
  }
  
  renderizarReceitas(filtradas);
}

// Newsletter no footer
document.getElementById('newsletterForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  const userEmail = document.getElementById('userEmail').value.trim();
  const messageEl = document.getElementById('newsletterMessage');

  if (!userEmail) {
    messageEl.textContent = 'Por favor, digite um e-mail válido.';
    messageEl.style.color = '#ff6b6b';
    return;
  }

  messageEl.textContent = 'Enviando...';
  messageEl.style.color = '#a8e6cf';

  const templateParams = {
    email: userEmail,
    date: new Date().toLocaleString('pt-BR'),
  };

  emailjs.send('service_i8u2sh8', 'template_0nj6n03', templateParams)
    .then(function() {
      messageEl.textContent = 'Obrigado! Você foi inscrito com sucesso 🎉';
      messageEl.style.color = '#a8e6cf';
      document.getElementById('userEmail').value = '';
    }, function(error) {
      messageEl.textContent = 'Erro ao inscrever. Tente novamente mais tarde.';
      messageEl.style.color = '#ff6b6b';
      console.error('EmailJS error:', error);
    });
});

function filtrarCategoria(cat) {
  // Atualizar botões ativos
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  event.target.classList.add("active");
  
  const filtradas = cat === "Todas" ? receitas : receitas.filter(r => r.categoria === cat);
  renderizarReceitas(filtradas);
}

// Fechar modal ao clicar fora
window.onclick = function(e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) fecharModal();
}

// Garantir que o código rode quando a página carregar
document.addEventListener("DOMContentLoaded", function() {
  // Inicializar mostrando todas as receitas
  renderizarReceitas(receitas);
});

// Tornar funções disponíveis globalmente
window.abrirReceita = abrirReceita;
window.fecharModal = fecharModal;
window.filtrarReceitas = filtrarReceitas;
window.filtrarCategoria = filtrarCategoria;