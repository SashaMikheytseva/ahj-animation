export default class Collapse {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  init() {
    this.draw();
    this.addEvents();
  }

  draw() {
    this.parentEl.innerHTML = `
            <div class="collapse-container">
                <button type="button" class="show-btn">Collapse</button>
                <div class="content">В этом мире нет ни счастья, ни несчастья, то и другое постигается лишь в сравнении. Только тот, кто был беспредельно несчастлив, способен испытать беспредельное блаженство</div>
            </div>
            <span class="copy">Copy</span>
        `;
  }

  addEvents() {
    this.btn = this.parentEl.querySelector('.show-btn');
    this.content = this.parentEl.querySelector('.content');

    this.btn.addEventListener('click', () => {
      this.content.classList.toggle('visible');
    });
  }
}
