// Portfólio de Matheus Almeida — interações e traduções (JavaScript puro + i18next)

const movimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const ponteiroFino = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// ==========================================================================
// 1. TRADUÇÕES (português é o idioma padrão; inglês e espanhol são opcionais)
// ==========================================================================
const IDIOMAS = { pt: "pt-BR", en: "en", es: "es" };

const traducoes = {
  pt: {
    translation: {
      "pagina.titulo": "Matheus Almeida | Desenvolvedor de software",
      "pular.conteudo": "Ir para o conteúdo",
      "nav.aria": "Navegação principal",
      "nav.inicio": "Início",
      "nav.sobre": "Sobre mim",
      "nav.habilidades": "Habilidades",
      "nav.projetos": "Projetos",
      "nav.contato": "Contato",
      "idioma.aria": "Idioma",
      "hero.status": "Aberto a novas oportunidades",
      "hero.ola": "Olá, eu sou",
      "hero.cargo": "Estudante de T.I",
      "hero.frase": "Transformo curiosidade em código e ideias em experiências digitais.",
      "hero.btn1": "Ver projetos",
      "hero.btn2": "Falar comigo",
      "hero.cartao.formacao": "Técnico em Informática",
      "hero.cartao.local": "COTEMIG · Em formação",
      "marquee.1": "Aprendendo",
      "marquee.2": "Criando",
      "marquee.3": "Evoluindo",
      "sobre.rotulo": "Sobre mim",
      "sobre.titulo": "Curiosidade que se <em>transforma</em> em código.",
      "sobre.p1": "Sou estudante do ensino médio técnico em informática no <strong>Colégio COTEMIG</strong> e encontrei no desenvolvimento de software uma forma de unir criatividade, lógica e vontade de aprender.",
      "sobre.p2": "Minha jornada começou com curiosidade sobre como os sites funcionam. Desde então, exploro o desenvolvimento web, crio projetos pessoais e aprimoro minhas habilidades na prática.",
      "sobre.p3": "Estou em busca da minha primeira oportunidade profissional para contribuir, aprender com outras pessoas e transformar boas ideias em soluções reais.",
      "sobre.stat1": "Projetos práticos",
      "sobre.stat2": "Certificados Cisco",
      "sobre.stat3": "Tecnologias estudadas",
      "terminal.formacao": "> Técnico em Informática · COTEMIG",
      "terminal.status": "> Em busca da primeira oportunidade",
      "terminal.objetivo": "> Aprender, contribuir e criar soluções reais",
      "habilidades.rotulo": "Habilidades",
      "habilidades.titulo": "Minha <em>caixa de</em> ferramentas.",
      "habilidades.sub": "Tecnologias que fazem parte dos meus projetos e do meu aprendizado.",
      "skill.html.desc": "Estrutura semântica e organização de páginas web.",
      "skill.css.desc": "Layouts, estilos e interfaces para diferentes telas.",
      "skill.js.desc": "Lógica e interações para a web (em aprendizado).",
      "skill.csharp.nome": "Lógica em C#",
      "skill.csharp.desc": "Fundamentos de lógica de programação com C#.",
      "skill.mysql.desc": "Conhecimentos iniciais em banco de dados MySQL.",
      "skill.so.desc": "Conhecimentos básicos em sistemas operacionais.",
      "nivel.intermediario": "Intermediário",
      "nivel.iniciante": "Iniciante",
      "nivel.basicoIntermediario": "Básico / Intermediário",
      "nivel.basico": "Básico",
      "outros.titulo": "Outros conhecimentos",
      "chip.google": "Ferramentas do Google",
      "chip.ingles": "Inglês · Básico/Intermediário",
      "chip.montagem": "Montagem de computadores",
      "chip.robotica": "Robótica",
      "cursos.titulo": "Cursos e certificados",
      "cert.hardware": "Fundamentos do Hardware do Computador",
      "cert.ciber": "Introdução à Cibersegurança",
      "cert.ia": "Introdução à IA moderna",
      "cert.label": "Certificado",
      "projetos.rotulo": "Projetos",
      "projetos.titulo": "Do aprendizado à <em>prática.</em>",
      "projetos.sub": "Uma seleção do que venho construindo.",
      "projetos.github": "Mais no GitHub",
      "filtro.todos": "Todos",
      "filtro.sites": "Sites",
      "filtro.estudos": "Estudos",
      "tag.site": "Site",
      "tag.interface": "Estudo de interface",
      "tag.educacional": "Projeto educacional",
      "projeto.rooftop": "Uma experiência visual para um restaurante, com apresentação, cardápio e galeria de imagens.",
      "projeto.louie": "Reprodução de um portfólio de fotografia, explorando composição, tipografia e organização visual.",
      "projeto.tabela": "Uma tabela periódica construída para praticar a estruturação de dados e a estilização com CSS.",
      "projeto.codigo": "Ver código",
      "contato.rotulo": "Contato",
      "contato.titulo": "Vamos criar algo <em>juntos?</em>",
      "contato.convite": "Tem um projeto, uma oportunidade ou quer trocar uma ideia sobre tecnologia? Me chame.",
      "contato.github": "Veja meu GitHub",
      "contato.disponivel": "Aberto a aprender, colaborar e criar.",
      "form.nome": "Seu nome",
      "form.nomePh": "Como você se chama?",
      "form.email": "Seu e-mail",
      "form.mensagem": "Sua mensagem",
      "form.mensagemPh": "Conte sobre sua ideia ou oportunidade...",
      "form.enviar": "Enviar mensagem",
      "form.nota": "O envio por e-mail ainda não está configurado.",
      "form.erro.nome": "Informe seu nome.",
      "form.erro.emailVazio": "Informe seu e-mail.",
      "form.erro.emailInvalido": "Informe um e-mail válido.",
      "form.erro.mensagem": "Escreva sua mensagem.",
      "form.aviso": "Sua mensagem está pronta, mas ainda não foi enviada: falta configurar o e-mail de destino.",
      "footer.texto": "© 2026 Matheus Almeida. Feito com curiosidade e café.",
      "footer.voltar": "Voltar ao topo",
    },
  },
  en: {
    translation: {
      "pagina.titulo": "Matheus Almeida | Software developer",
      "pular.conteudo": "Skip to content",
      "nav.aria": "Main navigation",
      "nav.inicio": "Home",
      "nav.sobre": "About me",
      "nav.habilidades": "Skills",
      "nav.projetos": "Projects",
      "nav.contato": "Contact",
      "idioma.aria": "Language",
      "hero.status": "Open to new opportunities",
      "hero.ola": "Hi, I'm",
      "hero.cargo": "I.T student",
      "hero.frase": "I turn curiosity into code and ideas into digital experiences.",
      "hero.btn1": "See projects",
      "hero.btn2": "Get in touch",
      "hero.cartao.formacao": "IT Technician",
      "hero.cartao.local": "COTEMIG · In training",
      "marquee.1": "Learning",
      "marquee.2": "Building",
      "marquee.3": "Evolving",
      "sobre.rotulo": "About me",
      "sobre.titulo": "Curiosity that turns into <em>code.</em>",
      "sobre.p1": "I'm a high school student in the IT technical program at <strong>COTEMIG</strong>, and I found in software development a way to combine creativity, logic and a drive to keep learning.",
      "sobre.p2": "My journey started out of curiosity about how websites work. Since then I've been exploring web development, building personal projects and sharpening my skills by doing.",
      "sobre.p3": "I'm looking for my first professional opportunity to contribute, learn from others and turn good ideas into real solutions.",
      "sobre.stat1": "Hands-on projects",
      "sobre.stat2": "Cisco certificates",
      "sobre.stat3": "Technologies studied",
      "terminal.formacao": "> IT Technician · COTEMIG",
      "terminal.status": "> Looking for my first opportunity",
      "terminal.objetivo": "> Learn, contribute and build real solutions",
      "habilidades.rotulo": "Skills",
      "habilidades.titulo": "My <em>toolbox.</em>",
      "habilidades.sub": "Technologies that are part of my projects and my learning.",
      "skill.html.desc": "Semantic structure and web page organization.",
      "skill.css.desc": "Layouts, styling and interfaces for different screens.",
      "skill.js.desc": "Logic and interactions for the web (still learning).",
      "skill.csharp.nome": "C# Logic",
      "skill.csharp.desc": "Programming logic fundamentals with C#.",
      "skill.mysql.desc": "Early knowledge of MySQL databases.",
      "skill.so.desc": "Basic knowledge of operating systems.",
      "nivel.intermediario": "Intermediate",
      "nivel.iniciante": "Beginner",
      "nivel.basicoIntermediario": "Basic / Intermediate",
      "nivel.basico": "Basic",
      "outros.titulo": "Other skills",
      "chip.google": "Google Tools",
      "chip.ingles": "English · Basic/Intermediate",
      "chip.montagem": "PC assembly",
      "chip.robotica": "Robotics",
      "cursos.titulo": "Courses & certificates",
      "cert.hardware": "Computer Hardware Fundamentals",
      "cert.ciber": "Introduction to Cybersecurity",
      "cert.ia": "Introduction to Modern AI",
      "cert.label": "Certificate",
      "projetos.rotulo": "Projects",
      "projetos.titulo": "From learning to <em>practice.</em>",
      "projetos.sub": "A selection of what I've been building.",
      "projetos.github": "More on GitHub",
      "filtro.todos": "All",
      "filtro.sites": "Sites",
      "filtro.estudos": "Studies",
      "tag.site": "Website",
      "tag.interface": "Interface study",
      "tag.educacional": "Educational project",
      "projeto.rooftop": "A visual experience for a restaurant, with presentation, menu and image gallery.",
      "projeto.louie": "A photography portfolio recreation, exploring composition, typography and visual organization.",
      "projeto.tabela": "A periodic table built to practice data structuring and CSS styling.",
      "projeto.codigo": "View code",
      "contato.rotulo": "Contact",
      "contato.titulo": "Shall we build something <em>together?</em>",
      "contato.convite": "Have a project, an opportunity, or want to talk tech? Reach out.",
      "contato.github": "Check out my GitHub",
      "contato.disponivel": "Open to learning, collaborating and creating.",
      "form.nome": "Your name",
      "form.nomePh": "What's your name?",
      "form.email": "Your email",
      "form.mensagem": "Your message",
      "form.mensagemPh": "Tell me about your idea or opportunity...",
      "form.enviar": "Send message",
      "form.nota": "Email sending isn't set up yet.",
      "form.erro.nome": "Please enter your name.",
      "form.erro.emailVazio": "Please enter your email.",
      "form.erro.emailInvalido": "Please enter a valid email.",
      "form.erro.mensagem": "Please write your message.",
      "form.aviso": "Your message is ready but hasn't been sent yet: the destination email still needs to be set up.",
      "footer.texto": "© 2026 Matheus Almeida. Made with curiosity and coffee.",
      "footer.voltar": "Back to top",
    },
  },
  es: {
    translation: {
      "pagina.titulo": "Matheus Almeida | Desarrollador de software",
      "pular.conteudo": "Ir al contenido",
      "nav.aria": "Navegación principal",
      "nav.inicio": "Inicio",
      "nav.sobre": "Sobre mí",
      "nav.habilidades": "Habilidades",
      "nav.projetos": "Proyectos",
      "nav.contato": "Contacto",
      "idioma.aria": "Idioma",
      "hero.status": "Abierto a nuevas oportunidades",
      "hero.ola": "Hola, soy",
      "hero.cargo": "estudiante de T.I",
      "hero.frase": "Transformo la curiosidad en código y las ideas en experiencias digitales.",
      "hero.btn1": "Ver proyectos",
      "hero.btn2": "Hablemos",
      "hero.cartao.formacao": "Técnico en Informática",
      "hero.cartao.local": "COTEMIG · En formación",
      "marquee.1": "Aprendiendo",
      "marquee.2": "Creando",
      "marquee.3": "Evolucionando",
      "sobre.rotulo": "Sobre mí",
      "sobre.titulo": "Curiosidad que se <em>transforma</em> en código.",
      "sobre.p1": "Soy estudiante de bachillerato técnico en informática en el <strong>Colegio COTEMIG</strong> y encontré en el desarrollo de software una forma de unir creatividad, lógica y ganas de aprender.",
      "sobre.p2": "Mi camino empezó con la curiosidad por cómo funcionan los sitios web. Desde entonces exploro el desarrollo web, creo proyectos personales y mejoro mis habilidades en la práctica.",
      "sobre.p3": "Busco mi primera oportunidad profesional para aportar, aprender de otras personas y convertir buenas ideas en soluciones reales.",
      "sobre.stat1": "Proyectos prácticos",
      "sobre.stat2": "Certificados Cisco",
      "sobre.stat3": "Tecnologías estudiadas",
      "terminal.formacao": "> Técnico en Informática · COTEMIG",
      "terminal.status": "> Buscando mi primera oportunidad",
      "terminal.objetivo": "> Aprender, aportar y crear soluciones reales",
      "habilidades.rotulo": "Habilidades",
      "habilidades.titulo": "Mi <em>caja de</em> herramientas.",
      "habilidades.sub": "Tecnologías que forman parte de mis proyectos y de mi aprendizaje.",
      "skill.html.desc": "Estructura semántica y organización de páginas web.",
      "skill.css.desc": "Layouts, estilos e interfaces para distintas pantallas.",
      "skill.js.desc": "Lógica e interacciones para la web (en aprendizaje).",
      "skill.csharp.nome": "Lógica en C#",
      "skill.csharp.desc": "Fundamentos de lógica de programación con C#.",
      "skill.mysql.desc": "Conocimientos iniciales de bases de datos MySQL.",
      "skill.so.desc": "Conocimientos básicos de sistemas operativos.",
      "nivel.intermediario": "Intermedio",
      "nivel.iniciante": "Principiante",
      "nivel.basicoIntermediario": "Básico / Intermedio",
      "nivel.basico": "Básico",
      "outros.titulo": "Otros conocimientos",
      "chip.google": "Herramientas de Google",
      "chip.ingles": "Inglés · Básico/Intermedio",
      "chip.montagem": "Armado de computadoras",
      "chip.robotica": "Robótica",
      "cursos.titulo": "Cursos y certificados",
      "cert.hardware": "Fundamentos del Hardware de la Computadora",
      "cert.ciber": "Introducción a la Ciberseguridad",
      "cert.ia": "Introducción a la IA moderna",
      "cert.label": "Certificado",
      "projetos.rotulo": "Proyectos",
      "projetos.titulo": "Del aprendizaje a la <em>práctica.</em>",
      "projetos.sub": "Una selección de lo que vengo construyendo.",
      "projetos.github": "Más en GitHub",
      "filtro.todos": "Todos",
      "filtro.sites": "Sitios",
      "filtro.estudos": "Estudios",
      "tag.site": "Sitio",
      "tag.interface": "Estudio de interfaz",
      "tag.educacional": "Proyecto educativo",
      "projeto.rooftop": "Una experiencia visual para un restaurante, con presentación, carta y galería de imágenes.",
      "projeto.louie": "Reproducción de un portafolio de fotografía, explorando composición, tipografía y organización visual.",
      "projeto.tabela": "Una tabla periódica construida para practicar la estructuración de datos y el estilo con CSS.",
      "projeto.codigo": "Ver código",
      "contato.rotulo": "Contacto",
      "contato.titulo": "¿Creamos algo <em>juntos?</em>",
      "contato.convite": "¿Tienes un proyecto, una oportunidad o quieres charlar de tecnología? Escríbeme.",
      "contato.github": "Mira mi GitHub",
      "contato.disponivel": "Abierto a aprender, colaborar y crear.",
      "form.nome": "Tu nombre",
      "form.nomePh": "¿Cómo te llamas?",
      "form.email": "Tu e-mail",
      "form.mensagem": "Tu mensaje",
      "form.mensagemPh": "Cuéntame sobre tu idea u oportunidad...",
      "form.enviar": "Enviar mensaje",
      "form.nota": "El envío por e-mail aún no está configurado.",
      "form.erro.nome": "Ingresa tu nombre.",
      "form.erro.emailVazio": "Ingresa tu e-mail.",
      "form.erro.emailInvalido": "Ingresa un e-mail válido.",
      "form.erro.mensagem": "Escribe tu mensaje.",
      "form.aviso": "Tu mensaje está listo, pero aún no se envió: falta configurar el e-mail de destino.",
      "footer.texto": "© 2026 Matheus Almeida. Hecho con curiosidad y café.",
      "footer.voltar": "Volver arriba",
    },
  },
};

// Textos do botão de tema, adicionados às traduções
const textosTema = {
  pt: "Alternar tema claro e escuro",
  en: "Toggle light and dark theme",
  es: "Cambiar tema claro y oscuro",
};
Object.keys(traducoes).forEach((lang) => {
  traducoes[lang].translation["tema.aria"] = textosTema[lang];
});

const bibliotecaDisponivel = Boolean(window.i18next);
const seletorIdioma = document.getElementById("seletor-idioma");
const botoesIdioma = [...document.querySelectorAll(".botao-idioma")];

// Preenche todos os textos com a tradução do idioma atual
function aplicarTraducoes() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = i18next.t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = i18next.t(el.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((par) => {
      const i = par.indexOf(":");
      const atributo = par.slice(0, i).trim();
      const chave = par.slice(i + 1).trim();
      el.setAttribute(atributo, i18next.t(chave));
    });
  });
}

function definirIdioma(lang) {
  i18next.changeLanguage(lang, () => {
    document.documentElement.lang = IDIOMAS[lang];
    document.title = i18next.t("pagina.titulo");
    botoesIdioma.forEach((b) => b.setAttribute("aria-pressed", b.dataset.idioma === lang));
    try {
      localStorage.setItem("idioma-portfolio", lang);
    } catch (erro) {
      // Sem armazenamento disponível: segue sem lembrar a escolha.
    }
    aplicarTraducoes();
    atualizarAtivo();
  });
}

// Texto de mensagens que só existem no JavaScript
const tr = (chave, padrao) => (bibliotecaDisponivel && i18next.isInitialized ? i18next.t(chave) : padrao);

// ==========================================================================
// 2. TELA DE CARREGAMENTO E ENTRADA DO TOPO
// ==========================================================================
const preCarregamento = document.getElementById("pre-carregamento");
const contador = document.getElementById("contador");
const nomeHero = document.getElementById("nome-hero");
const NOME = "Matheus Almeida";

// Efeito de texto embaralhado (scramble) no nome
function embaralhar(el, textoFinal) {
  const simbolos = "!<>-_\\/[]{}=+*^?#";
  const total = 26;
  let quadro = 0;
  const timer = setInterval(() => {
    const revelados = Math.floor((quadro / total) * textoFinal.length);
    el.textContent = textoFinal
      .split("")
      .map((letra, i) => {
        if (letra === " " || i < revelados) return letra;
        return simbolos[Math.floor(Math.random() * simbolos.length)];
      })
      .join("");
    quadro++;
    if (quadro > total) {
      clearInterval(timer);
      el.textContent = textoFinal;
    }
  }, 35);
}

function liberarPagina() {
  document.body.classList.add("pronto");
  if (!movimentoReduzido) embaralhar(nomeHero, NOME);
}

if (movimentoReduzido) {
  preCarregamento.remove();
  liberarPagina();
} else {
  let valor = 0;
  const intervalo = setInterval(() => {
    valor += Math.ceil(Math.random() * 7);
    if (valor >= 100) {
      valor = 100;
      clearInterval(intervalo);
      contador.textContent = "100";
      setTimeout(() => preCarregamento.classList.add("sumir"), 250);
      setTimeout(liberarPagina, 500);
      preCarregamento.addEventListener("transitionend", () => preCarregamento.remove(), { once: true });
    } else {
      contador.textContent = String(valor).padStart(2, "0");
    }
  }, 45);
}

if (!movimentoReduzido && ponteiroFino) {
  nomeHero.addEventListener("mouseenter", () => embaralhar(nomeHero, NOME));
}

// ==========================================================================
// 3. PROGRESSO, NAVEGAÇÃO E DESTAQUE DA SEÇÃO ATUAL
// ==========================================================================
const barraProgresso = document.getElementById("barra-progresso");
const linksNavegacao = [...document.querySelectorAll(".link-pilula")];
const secoesNavegacao = linksNavegacao.map((link) => document.querySelector(link.getAttribute("href")));
const destaquePilula = document.getElementById("destaque-pilula");

function atualizarAtivo() {
  let atual = 0;
  secoesNavegacao.forEach((secao, i) => {
    if (secao.getBoundingClientRect().top <= window.innerHeight * 0.4) atual = i;
  });

  linksNavegacao.forEach((link, i) => {
    link.classList.toggle("ativo", i === atual);
    if (i === atual) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });

  const link = linksNavegacao[atual];
  destaquePilula.style.left = link.offsetLeft + "px";
  destaquePilula.style.width = link.offsetWidth + "px";
}

function atualizarProgresso() {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  barraProgresso.style.width = (window.scrollY / total) * 100 + "%";
}

window.addEventListener(
  "scroll",
  () => {
    atualizarProgresso();
    atualizarAtivo();
  },
  { passive: true }
);
window.addEventListener("resize", atualizarAtivo);
atualizarAtivo();

// ==========================================================================
// 4. REVELAÇÃO AO ROLAR, CONTADORES E TERMINAL DIGITADO
// ==========================================================================
function contarNumeros(elemento) {
  const alvoGeral = elemento.querySelectorAll("[data-contador]");
  alvoGeral.forEach((numero) => {
    const alvo = Number(numero.dataset.contador);
    if (movimentoReduzido) {
      numero.textContent = alvo;
      return;
    }
    const inicio = performance.now();
    const duracao = 1400;
    const quadro = (agora) => {
      const progresso = Math.min((agora - inicio) / duracao, 1);
      numero.textContent = Math.round(alvo * (1 - Math.pow(1 - progresso, 3)));
      if (progresso < 1) requestAnimationFrame(quadro);
    };
    requestAnimationFrame(quadro);
  });
}

function digitarTerminal(terminal) {
  if (movimentoReduzido) return;
  const linhas = [...terminal.querySelectorAll(".linha-digitada")];
  const textos = linhas.map((linha) => linha.textContent);
  linhas.forEach((linha) => (linha.textContent = ""));

  let indice = 0;
  const proximaLinha = () => {
    if (indice >= linhas.length) return;
    const linha = linhas[indice];
    const texto = textos[indice];
    let letras = 0;
    const digitar = () => {
      linha.textContent = texto.slice(0, ++letras);
      if (letras < texto.length) {
        setTimeout(digitar, 30);
      } else {
        indice++;
        setTimeout(proximaLinha, 300);
      }
    };
    digitar();
  };
  proximaLinha();
}

const observadorRevelacao = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      const el = entrada.target;
      el.classList.add("visivel");
      if (el.dataset.acao === "contar") contarNumeros(el);
      if (el.dataset.acao === "digitar") digitarTerminal(el);
      observadorRevelacao.unobserve(el);
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".revelar, [data-acao]").forEach((el) => observadorRevelacao.observe(el));

// ==========================================================================
// 5. EFEITOS COM O MOUSE: INCLINAÇÃO, BRILHO, CURSOR E BOTÕES MAGNÉTICOS
// ==========================================================================
if (ponteiroFino && !movimentoReduzido) {
  // Cartões que inclinam em 3D e acendem seguindo o mouse
  document.querySelectorAll(".cartao-tilt").forEach((cartao) => {
    cartao.addEventListener("pointermove", (evento) => {
      const limites = cartao.getBoundingClientRect();
      const x = (evento.clientX - limites.left) / limites.width;
      const y = (evento.clientY - limites.top) / limites.height;
      cartao.style.setProperty("--ry", ((x - 0.5) * 14).toFixed(2) + "deg");
      cartao.style.setProperty("--rx", ((0.5 - y) * 14).toFixed(2) + "deg");
      cartao.style.setProperty("--mx", x * 100 + "%");
      cartao.style.setProperty("--my", y * 100 + "%");
    });
    cartao.addEventListener("pointerleave", () => {
      cartao.style.setProperty("--rx", "0deg");
      cartao.style.setProperty("--ry", "0deg");
    });
  });

  // Botões que são puxados levemente em direção ao cursor
  document.querySelectorAll(".botao-magnetico").forEach((botao) => {
    botao.addEventListener("pointermove", (evento) => {
      const limites = botao.getBoundingClientRect();
      const dx = evento.clientX - (limites.left + limites.width / 2);
      const dy = evento.clientY - (limites.top + limites.height / 2);
      botao.style.transform = `translate(${dx * 0.25}px, ${dy * 0.35}px)`;
    });
    botao.addEventListener("pointerleave", () => {
      botao.style.transform = "";
    });
  });

  // Cursor com anel que segue o mouse com um pequeno atraso
  const cursor = document.getElementById("cursor-brilho");
  let x = 0;
  let y = 0;
  let cx = 0;
  let cy = 0;
  window.addEventListener("pointermove", (evento) => {
    x = evento.clientX;
    y = evento.clientY;
  });
  const seguirCursor = () => {
    cx += (x - cx) * 0.2;
    cy += (y - cy) * 0.2;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(seguirCursor);
  };
  seguirCursor();

  document.addEventListener("pointerover", (evento) => {
    if (evento.target.closest("a, button, input, textarea, .cartao-tilt")) cursor.classList.add("ativo");
  });
  document.addEventListener("pointerout", (evento) => {
    if (evento.target.closest("a, button, input, textarea, .cartao-tilt")) cursor.classList.remove("ativo");
  });
}

// ==========================================================================
// 6. FILTRO DE PROJETOS
// ==========================================================================
const botoesFiltro = [...document.querySelectorAll(".filtro-projeto")];
const itensProjeto = [...document.querySelectorAll(".item-projeto")];

botoesFiltro.forEach((botao) => {
  botao.addEventListener("click", () => {
    const filtro = botao.dataset.filtro;
    botoesFiltro.forEach((outro) => outro.setAttribute("aria-pressed", outro === botao));
    itensProjeto.forEach((item) => {
      item.classList.toggle("oculto", filtro !== "todos" && item.dataset.categoria !== filtro);
    });
  });
});

// ==========================================================================
// 7. FORMULÁRIO DE CONTATO (validação; o envio precisa de um e-mail de destino)
// ==========================================================================
const formulario = document.getElementById("formulario-contato");

function mostrarErro(campo, mensagem) {
  const entrada = document.getElementById("campo-" + campo);
  let erro = document.getElementById("erro-" + campo);

  if (!mensagem) {
    if (erro) erro.remove();
    entrada.setAttribute("aria-invalid", "false");
    return;
  }

  if (!erro) {
    erro = document.createElement("span");
    erro.className = "erro-campo";
    erro.id = "erro-" + campo;
    entrada.after(erro);
  }
  erro.textContent = mensagem;
  entrada.setAttribute("aria-invalid", "true");
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.getElementById("campo-nome").value.trim();
  const email = document.getElementById("campo-email").value.trim();
  const mensagem = document.getElementById("campo-mensagem").value.trim();

  const erros = {
    nome: nome ? "" : tr("form.erro.nome", "Informe seu nome."),
    email: !email
      ? tr("form.erro.emailVazio", "Informe seu e-mail.")
      : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ? ""
      : tr("form.erro.emailInvalido", "Informe um e-mail válido."),
    mensagem: mensagem ? "" : tr("form.erro.mensagem", "Escreva sua mensagem."),
  };

  Object.entries(erros).forEach(([campo, texto]) => mostrarErro(campo, texto));

  const primeiroErro = Object.keys(erros).find((campo) => erros[campo]);
  if (primeiroErro) {
    document.getElementById("campo-" + primeiroErro).focus();
    return;
  }

  let aviso = formulario.querySelector(".aviso-envio");
  if (!aviso) {
    aviso = document.createElement("div");
    aviso.className = "aviso-envio";
    aviso.setAttribute("role", "status");
    formulario.append(aviso);
  }
  aviso.innerHTML = "";
  const paragrafo = document.createElement("p");
  paragrafo.textContent = tr(
    "form.aviso",
    "Sua mensagem está pronta, mas ainda não foi enviada: falta configurar o e-mail de destino."
  );
  aviso.append(paragrafo);
});

// ==========================================================================
// 8. INICIALIZAÇÃO DO IDIOMA (no final, para todas as constantes já existirem)
// ==========================================================================
if (bibliotecaDisponivel) {
  let idiomaInicial = "pt";
  try {
    const salvo = localStorage.getItem("idioma-portfolio");
    if (salvo && IDIOMAS[salvo]) idiomaInicial = salvo;
  } catch (erro) {
    // Ignora se o armazenamento estiver bloqueado.
  }
  try {
    i18next.init(
      {
        lng: idiomaInicial,
        fallbackLng: "pt",
        resources: traducoes,
        keySeparator: false,
        nsSeparator: false,
        initImmediate: false,
      },
      () => definirIdioma(idiomaInicial)
    );
  } catch (erro) {
    seletorIdioma.hidden = true;
  }
  botoesIdioma.forEach((b) => b.addEventListener("click", () => definirIdioma(b.dataset.idioma)));
} else {
  // Sem a biblioteca de tradução, o site fica somente em português.
  seletorIdioma.hidden = true;
}

// Proteção: se algo falhar, a tela de carregamento não fica presa para sempre
setTimeout(() => {
  if (!document.body.classList.contains("pronto")) {
    preCarregamento.remove();
    liberarPagina();
  }
}, 5000);

// ==========================================================================
// 9. TEMA CLARO / ESCURO
// ==========================================================================
const botaoTema = document.getElementById("botao-tema");

function aplicarTema(tema) {
  document.documentElement.dataset.tema = tema;
  botaoTema.textContent = tema === "claro" ? "☾" : "☀";
  try {
    localStorage.setItem("tema-portfolio", tema);
  } catch (erro) {
    // Sem armazenamento disponível: a escolha vale só nesta visita.
  }
}

aplicarTema(document.documentElement.dataset.tema === "claro" ? "claro" : "escuro");
botaoTema.addEventListener("click", () =>
  aplicarTema(document.documentElement.dataset.tema === "claro" ? "escuro" : "claro")
);

// ==========================================================================
// 10. IMAGENS (se um arquivo não existir, o espaço é removido sem quebrar o layout)
// ==========================================================================
document.querySelectorAll("img[data-imagem]").forEach((img) => {
  const capa = img.closest(".capa-projeto");
  const marcarCapa = () => capa && capa.classList.add("com-imagem");
  const remover = () => (img.closest("[data-moldura]") || img).remove();

  if (img.complete && img.naturalWidth > 0) marcarCapa();
  else if (img.complete && img.naturalWidth === 0) remover();

  img.addEventListener("load", marcarCapa);
  img.addEventListener("error", remover);
});
