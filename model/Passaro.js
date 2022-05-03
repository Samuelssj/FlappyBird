class Passaro extends Obj{
    vel = 1.5
    grav = .5

    move(){
        if(this.vel < 4.8){
            this.vel += this.grav;
        } 
        this.y += this.vel;
    }

    limiteVoo(){
        //Limite de queda
        if(this.y >= 666){
            this.y = 666;
        }
        //limite do teto
        else if(this.y <= 0){
            this.y = 0;
        }
    }


}