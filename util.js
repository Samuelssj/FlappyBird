class Obj{
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