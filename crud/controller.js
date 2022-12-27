const crudS = require('./models')



exports.homePage = async(req,res) => {
    try{
    const list = await crudS.find()
    res.json(list)
    }catch(err){
        res.send('err' + err)
    }
  };
exports.singleData = async(req,res) => {
    try{
    const single = await crudS.findById(req.params.id);
    res.json(single);
    } catch(err){
        res.send('eroor')
    };
}


exports.create = async(req,res) => {
    const createLi = new crudS({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub,
    });
    try{
      const data = await createLi.save()
      res.json(data)

    }catch(err){
       res.send('Error')
    }
    
}

exports.update = async(req,res) => {
    const data = await crudS.findById(req.params.id);
    data.sub = req.body.sub
    const a1 = await data.save()
    res.json(a1)
}