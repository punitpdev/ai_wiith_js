class SketckPad {
  constructor(container, size = 400) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = size;
    this.canvas.height = size;
    this.canvas.style = `
        background-color: white;
        box-shadow: 0px 0px 10px 2px black;
      `;

    container.appendChild(this.canvas);
    const listBreak = document.createElement('br');

    this.undoBtn = document.createElement('button');
    this.undoBtn.textContent = 'Undo';
    container.appendChild(this.undoBtn);

    this.ctx = this.canvas.getContext("2d");
    this.reset();

    this.#addEventListener();
  }

  #addEventListener() {
    this.canvas.onmousedown = (evt) => {
      const mouse = this.#getMouse(evt);
      this.paths.push([mouse]);
      this.isDrawing = true;
    }

    document.onmousemove = (evt) => {

      if (this.isDrawing) {
        const mouse = this.#getMouse(evt);
        const lastPath = this.paths[this.paths.length - 1];
        lastPath.push(mouse);
        this.#redaw();
      }
    }

    this.canvas.onmouseup = () => {
      this.isDrawing = false;
    }

    this.canvas.ontouchstart = (evt) => {
      const loc = evt.touches[0];
      this.canvas.onmousedown(loc);
    }

    this.canvas.ontouchmove = (evt) => {
      const loc = evt.touches[0];
      this.canvas.onmousemove(loc);
    }

    document.ontouchend = () => {
      document.onmouseup();
    }

    this.undoBtn.onclick = () => {
      this.paths.pop();
      this.#redaw();
    }
  }


  reset() {
    this.paths = [];
    this.isDrawing = false;
    this.#redaw();
  }

  #getMouse = (evt) => {
    const rect = this.canvas.getBoundingClientRect();
    return [
      Math.round(evt.clientX - rect.left),
      Math.round(evt.clientY - rect.top),
    ];
  }


  #redaw() {
    this.ctx.clearRect(0, 0,
      this.canvas.width, this.canvas.height);

    draw.paths(this.ctx, this.paths);
    if(this.paths.length > 0){
      this.undoBtn.disabled = false;
    }else{
      this.undoBtn.disabled = true;
    }
  }
}