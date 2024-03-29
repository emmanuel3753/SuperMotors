var Product = require('../models/model')
var mongoose = require('mongoose')


mongoose.connect('mongodb+srv://emmanuel3753:Vegetta_14@cluster0-bpsn8.mongodb.net/MotoDatabase?retryWrites=true')
//require('./db/mongoose')
var products = [
    new Product({
		id: 1,
		tipo: 'moto',
		marca: 'Ducati',
		modelo: 'XDiavel',
		specs: 'chidilla',
		imagen: 'Modelo_Motos/xdiavel.jpg',
		precio: 408900
    }),
    new Product({
		id: 2,
        tipo:"moto",
		marca:"BMW",
		modelo:"R 1250 RS",
		specs:"chidilla",
		imagen:"Modelo_Motos/R1250RS.jpg",
		precio:335000
    }),
    new Product({
		id: 3,
        tipo:"moto",
		marca:"BMW",
		modelo:"R 1200 R",
		specs:"chidilla",
		imagen:"Modelo_Motos/R1200R.jpg",
		precio:313000
    }),
    new Product({
		id: 4,
        tipo:"moto",
		marca:"BMW",
		modelo:"R nine T Scrambler",
		specs:"chidilla",
		imagen:"Modelo_Motos/RnineT.jpg",
		precio:250000
    }),
    new Product({
		id: 5,
        tipo:"moto",
		marca:"Harley-Davidson",
		modelo:"V-Rod Night Rod",
		specs:"un clasico",
		imagen:"Modelo_Motos/vrod_night.jpg",
		precio:389000
    }),
    new Product({
		id: 6,
        tipo:"moto",
		marca:"Harley-Davidson",
		modelo:"Fat Bob",
		specs:"intento de sustituto de v rod",
		imagen:"Modelo_Motos/fatbob.jpg",
		precio:346900
    }),
    new Product({
		id: 7,
        tipo:"moto",
		marca:"Triumph",
		modelo:"ROCKET 3 TFC",
		specs:"triumph chida",
		imagen:"Modelo_Motos/Rocket3.jpg",
		precio:630000
    }),
    new Product({
		id: 8,
        tipo:"moto",
		marca:"Triumph",
		modelo:"Bonneville Speedmaster",
		specs:"triumph Bonneville",
		imagen:"Modelo_Motos/Bonneville.jpg",
		precio:259000
    }),
    new Product({
		id: 9,
        tipo:"moto",
		marca:"Triumph",
		modelo:"Scrambler 1200 XC",
		specs:"triumph scrambler",
		imagen:"Modelo_Motos/1200XC.jpg",
		precio:257000
    }),
    new Product({
		id: 10,
        tipo:"moto",
		marca:"Honda",
		modelo:"CBR1000RR",
		specs:"honda deportiva",
		imagen:"Modelo_Motos/CBR1000RR.jpg",
		precio:204180
    }),
    new Product({
		id: 11,
        tipo:"moto",
		marca:"Honda",
		modelo:"VT750C2 PHANTOM",
		specs:"honda custom",
		imagen:"Modelo_Motos/PHANTOM.jpg",
		precio:204180
    }),
    new Product({
		id: 12,
        tipo:"moto",
		marca:"Honda",
		modelo:"CB500F",
		specs:"honda naked",
		imagen:"Modelo_Motos/CB500F.jpg",
		precio:204180
    }),
    new Product({
		id: 13,
        tipo:"accesorio",
		marca:"Harley-Davidson",
		modelo:"PILOT II 3-IN-1",
		specs:"Casco para piloto 3 en 1",
		imagen:"Modelo_Accesorios/PILOT_II.jpg",
		precio:4300
    }),
    new Product({
		id: 14,
        tipo:"accesorio",
		marca:"Harley-Davidson",
		modelo:"FXRG DUAL HELMET",
		specs:"Casco FXRG con proteccion contra el sol",
		imagen:"Modelo_Accesorios/FXRG_Dual.jpg",
		precio:11200
    }),
    new Product({
		id: 15,
        tipo :"accesorio",
		marca:"Schuberth",
		modelo:"SC1 Standard",
		specs:"Sistema de comunicacion para cascos Schuberth",
		imagen:"Modelo_Accesorios/SC1_Standard.png",
		precio:3900
    })
];

var done=0
for(var i=0; i < products.length; i++){
    products[i].save(function(err, result){
        done++
        if(done === products.length){
            exit()
        }
    });
}

function exit(){
    mongoose.disconnect()
}
