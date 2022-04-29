class Bg extends Obj{
    move(speed,limit,pos){
        this.x -=speed;
        if(this.x <= limit){
            this.x = pos;
        }
    }
}