class Moeda extends Obj{
    // moeda acompanhando o cano
    // move(cano){

    //     this.x = cano.x + 10;
    //     this.y = cano.y - 130;

    //     if(this.x < -50){
    //         this.set_visible = true;
    //     }

    
    //moeda aleatória
    move(){

        this.x -=4;

        if(this.x < -40){
            this.set_visible = true;
            this.x = 520;
            this.y = Math.random() * (645 - 45);
            // this.set_visible = true;
        }

    }


}