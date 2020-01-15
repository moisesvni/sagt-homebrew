const { receita, rampa } = require('../models');

module.exports = {

  async get (req,res) {
    try {
      let receitaCollection;
      if(req.params.id) receitaCollection = await receita.findOne({ 
        where: { id: req.params.id }, 
        // include: [rampa], attributes: { exclude: ['rampaId'] }
      });
      else { 
        receitaCollection = await receita.findAll({
          include: [
            {
              model: rampa,
              attributes: { exclude: ['receitaId']}
            }
          ]  
        });
      }
        res.status(201).send({ count: receitaCollection.length ? receitaCollection.length : 1, data: receitaCollection });
    }
    catch(e){
      console.log(e);
      res.status(500).send(e);
    }
  },

  async post(req,res) {
    try {
      const receitaCollection = await receita.create(req.body);
      res.status(201).send(receitaCollection)
    }
    catch(e){
      console.log(e);
      res.status(400).send(e);
    }
  },

  async update(req,res) {
    try{
      const receitaCollection = await receita.findOne({ where: { id: req.params.id } });
        if (receitaCollection) {
          const updatedCollection = await receitaCollection.update(req.body);
          res.status(201).send(updatedCollection);
        }
        else {
          res.status(404).send("receita Not Found");
        }
    }
    catch(e){
        console.log(e);
        res.status(500).send(e);
    }
  },

  async delete (req, res) {
    try {
      const { id } = req.params;
      const deleted = await receita.destroy({ where: { id: id }});
      if (deleted) return res.status(204).send({ count: 1, data: deleted });
      throw new Error("receita not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}
