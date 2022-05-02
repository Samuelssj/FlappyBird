class Texto{

    text = "";
  

    draw_text(texto,size,font,x,y,cor){
        canvas.font = size + "px" + " " + font;
        canvas.fillStyle = cor;
        canvas.fillText(texto + this.text, x, y);
    }


}