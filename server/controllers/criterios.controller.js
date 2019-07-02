'use strict'
const Criterio = require('../models/criterio')
const criteriosC = {};

criteriosC.getCriterios = async (req,res)=> {
    const criterio = await Criterio.find();
    res.json(criterio);
    console.log("fiesa");
        
}

criteriosC.getAlternativas = async (req,res)=> {
    const criterio = await Criterio.find();
    res.json(criterio);
    console.log("alternativas");
        
}

criteriosC.createCriterio = async (req,res) =>{
    console.log("q pasooooooo"+req.body.name);
    
    const criterio = new Criterio({
        name: req.body.name,
        valor: req.body.valor,
        sub_name: req.body.sub_name,
        sub_valor:req.body.sub_valor
    })
    await criterio.save()
  
};

criteriosC.getCriterio = async (req, res)=> {
   
   const criterio = await Criterio.findById(req.params.id);
   res.json("prueba"+criterio);
   console.log("mostrar: "+criterio);
};



module.exports = criteriosC;