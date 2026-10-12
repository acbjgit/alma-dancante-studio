const WHATSAPP_NUMBER = "5511975797630"; // número real com DDI+DDD
const message = `Olá, Alma Dançante Studio! Vim pelo site e gostaria de saber mais sobre as aulas, horários e aula experimental.`;
const instagramUrl = "https://www.instagram.com/almadancantestudio/";

document.querySelectorAll('.whatsapp-link').forEach((link) => {
  const valid = /^55\d{10,11}$/.test(WHATSAPP_NUMBER);
  if (valid) {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  } else {
    link.href = instagramUrl;
    link.addEventListener('click', () => {
      alert('WhatsApp ainda não configurado. Informe o número real para ativar este botão. Por enquanto, vamos abrir o Instagram.');
    });
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
