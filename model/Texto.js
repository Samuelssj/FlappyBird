class Texto{

    text = "";

    draw_text(size,font,x,y,cor){
        canvas.font = size + "px" + " " + font;
        canvas.fillStyle = cor;
        canvas.fillText(this.text, x, y);
    }


}