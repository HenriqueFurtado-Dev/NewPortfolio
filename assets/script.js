const commandFragments = [
  "Carregando classes CSS...",
  "Puxando informações do servidor lento...",
  "Configurando sistema...",
  "Css quebrou o site todo...",
  "Voltou o CSS...",
  "carregando o JavaScript...",
  "Inicialização completa!"
];

const loaderCommand = document.querySelector(".loader-command-fragment");
let currentFragmentIndex = 0;

function typeNextFragment() {
  if (currentFragmentIndex >= commandFragments.length) {
    return;
  }

  const currentFragment = commandFragments[currentFragmentIndex];
  loaderCommand.textContent = currentFragment;
  currentFragmentIndex++;
  setTimeout(typeNextFragment, currentFragment.length * 50);
}

typeNextFragment();

const loader = document.querySelector("#loader");

// Espera 5 segundos e depois oculta o loader
setTimeout(() => {
  loader.style.opacity = 0;
  setTimeout(() => {
    loader.style.display = "none";
  }, 3000); // Espera 1 segundo para ocultar completamente
}, 7000); // Espera 5 segundos para começar a ocultar


