class Passaro extends Obj{
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