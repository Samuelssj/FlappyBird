class Obj{

    frame = 0;
    timer = 0;

    set_visible = true;


    constructor(x,y,width,heigth,image){
        this.x = x;
        this.y = y;
        this.width = width;
        this.heigth = heigth;
        this.image = image;
    }


    draw(){
        if(this.set_visible){
            var img = new Image();
            img.src = this.image;
            canvas.drawImage(img,this.x,this.y,this.width,this.heigth)
        }
       
    }


    animation(nome, limit, vel){
        //tempo de animação
        this.timer += 1;
        if(this.timer >= vel){
            this.timer = 0;
            this.frame += 1;
        }
        //quantas imagens temos
        if(this.frame >= limit){
            this.frame = 0;
        }
        
        this.image = "assets/" + nome + this.frame + ".png";

    }


    Collide(obj){
        
        if(this.x < obj.x + obj.width &&
           this.x + this.width > obj.x &&
           this.y < obj.y + obj.heigth &&
           this.y + this.heigth > obj.y){
            return true;
        }else{

            return false;

        }
    }

}

class Texto{

    text = "";

    draw_text(size,font,x,y,cor){
        canvas.font = size + "px" + " " + font;
        canvas.fillStyle = cor;
        canvas.fillText(this.text, x, y);
    }


}




class Pipe extends Obj{

    move(vel,limit,newPos, pipebaixo){
        this.x -= vel;
        if(this.x <= limit){
            this.x = newPos;
            this.y = Math.random() * (600 - 450) + 400;
        }
        pipebaixo.x = this.x;
        pipebaixo.y = this.y - 550;
    }
}

class Coin extends Obj{

    move(pipe){

        this.x = pipe.x + 25;
        this.y = pipe.y - 130;

        if(this.x < -50){
            this.set_visible = true;
        }

    }


}

