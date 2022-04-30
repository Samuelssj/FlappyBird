class Cano extends Obj{

    move(vel,limit,newPos, pipebaixo){
        this.x -= vel;
        if(this.x <= limit){
            this.x = newPos;
            //posições dos canos
            this.y = Math.random() * (600 - 450) + 400;
        }
        pipebaixo.x = this.x;
        pipebaixo.y = this.y - 550;
    }
}