fetch("header.html")
  .then(r => r.text())
  .then(data => {
    document.querySelector("#header").innerHTML = data;

    // ★ここに移動
    const btn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('show');
    });

    menu.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    document.addEventListener('click', () => {
      menu.classList.remove('show');
    });
  });

fetch("footer.html")
  .then(r => r.text())
  .then(data => {
    document.querySelector("#footer").innerHTML = data;
  });
