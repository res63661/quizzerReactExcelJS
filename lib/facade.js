class Facade {
  constructor(Schema) {
    this.Schema = Schema;
  }

  create(body) {
    const schema = new this.Schema(body);
    return schema.save();
  }

  find(query) {
    console.log(query);
    let queryObj = {};
    if(query.q){
      //queryObj.subject = query.q;
      queryObj = JSON.parse(query.q);
    }
    return this.Schema
      .find(queryObj)
      .exec();
  }

  findOne(...args) {
    return this.Schema
      .findOne(...args)
      .exec();
  }

  findById(...args) {
    return this.Schema
      .findById(...args)
      .exec();
  }

  update(...args) {
    return this.Schema
      .update(...args)
      .exec();
  }

  remove(...args) {
    return this.Schema
      .remove(...args)
      .exec();
  }
}

module.exports = Facade;
