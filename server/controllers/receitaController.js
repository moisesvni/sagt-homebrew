const { Receita, User } = require('../models');

module.exports = {

  async get (req,res) {
    try {
      let receitaCollection;
      User.hasMany(Receita, { foreignKey: 'userId' });
      Receita.belongsTo(User, { foreignKey: 'userId' });
      if(req.params.id) receitaCollection = await Receita.findOne({ 
        where: { id: req.params.id }, 
        include: [User], attributes: { exclude: ['userId'] }
      });
      else receitaCollection = await Receita.findAll({ include: [User], attributes: { exclude: ['userId'] } });
      res.status(201).send({ count: receitaCollection.length ? receitaCollection.length : 1, data: receitaCollection });
    }
    catch(e){
      console.log(e);
      res.status(500).send(e);
    }
  },

  async post(req,res) {
    try {
      const receitaCollection = await Receita.create(req.body);
      res.status(201).send(receitaCollection)
    }
    catch(e){
      console.log(e);
      res.status(400).send(e);
    }
  },

  async update(req,res) {
    try{
      const receitaCollection = await Receita.findOne({ where: { id: req.params.id } });
        if (receitaCollection) {
          const updatedCollection = await receitaCollection.update(req.body);
          res.status(201).send(updatedCollection);
        }
        else {
          res.status(404).send("Receita Not Found");
        }
    }
    catch(e){
        console.log(e);
        res.status(400).send(e);
    }
  },

  async delete (req, res) {
    try {
      const { id } = req.params;
      const deleted = await Receita.destroy({ where: { id: id }});
      if (deleted) return res.status(204).send({ count: 1, data: deleted });
      throw new Error("Receita not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}
