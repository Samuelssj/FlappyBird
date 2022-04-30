class Moeda extends Obj{

    move(cano){

        this.x = cano.x + 10;
        this.y = cano.y - 130;

        if(this.x < -50){
            this.set_visible = true;
        }

    }


}