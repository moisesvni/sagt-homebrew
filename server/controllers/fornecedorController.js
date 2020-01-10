const { User } = require('../models');

module.exports = {

  async get (req,res) {
    try {
      let userCollection
      if(req.params.id) userCollection = await User.findOne({ where: { id: req.params.id } });
      else userCollection = await User.findAll();
      res.status(201).send({ count: userCollection.length ? userCollection.length : 1, data: userCollection });
    }
    catch(e){
      console.log(e);
      res.status(500).send(e);
    }
  },

  async post(req,res) {
    try {
      const userCollection = await User.create(req.body);
      res.status(201).send(userCollection)
    }
    catch(e){
      console.log(e);
      res.status(400).send(e);
    }
  },

  async update(req,res) {
    try{
      const userCollection = await User.findOne({ where: { id: req.params.id } });
        if (userCollection) {
          const updatedCollection = await userCollection.update(req.body);
          res.status(201).send(updatedCollection);
        }
        else {
          res.status(404).send("Post Not Found");
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
      const deleted = await User.destroy({ where: { id: id }});
      if (deleted) return res.status(204).send({ count: 1, data: deleted });
      throw new Error("User not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}
