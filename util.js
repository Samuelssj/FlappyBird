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


    Collide(obj){

        if(this.x < obj.x + obj.width &&
           this.x + this.width > obj.x &&
           this.y <obj.y + obj.heigth &&
           this.y +this.heigth > obj.y){

            return true;
        }else{

            return false;

        }
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
        if(this.vel < 6){
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

        if(this.x < -20){
            this.set_visible = true;
        }

    }


}