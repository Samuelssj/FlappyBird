class Obj{

    frame = 0;
    timer = 0;


    constructor(x,y,width,heigth,image){
        this.x = x;
        this.y = y;
        this.width = width;
        this.heigth = heigth;
        this.image = image;
    }


    draw(){
        var img = new Image();
        img.src = this.image;
        canvas.drawImage(img,this.x,this.y,this.width,this.heigth)
    }


    animation(nome, limit, vel){
        this.timer += 1;
        if(this.timer >= vel){
            this.timer = 0;
            this.frame += 1;
        }

        if(this.frame >= limit){
            this.frame = 0;
        }
        
        this.image = "assets/images/" + nome + this.frame + ".png";

    }

}

class Bg extends Obj{
    move(speed,limit,pos){
        this.x -=speed;
        if(this.x <= limit){
            this.x = pos;
        }
    }
}

class Ground extends Bg{

}

class Bird extends Obj{
    vel = 2
    grav = 1

    move(){
        if(this.vel < 8){
            this.vel += this.grav;
        } 
        this.y += this.vel;
    }

    limiteVoo(){

        if(this.y >= 560){
            this.y = 560;
        }
        else if(this.y <= 0){
            this.y = 0;
        }
    }


}