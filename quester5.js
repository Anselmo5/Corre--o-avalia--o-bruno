// 

let retangulo ={
    largura: 3.0,
    altura: 4.0,

    area:function(){
        let a = this.largura * this.altura
        console.log('Area:' +a);
    },

    perimetro: function(){
        let p = 2*(this.largura + this.altura)
        console.log('Perimetro:' +p);
    },

    diagonal: function(){
        let d = Math.sqrt(this.largura+this.largura*this.altura*this.altura)
        console.log('Diagonal: ' +d);
    }
}


retangulo.area()
        retangulo.perimetro()
        retangulo.diagonal()

// math biblioteca, sqrt - raiz aquatrada