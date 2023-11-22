const mongoose = require("mongoose");
const Course = mongoose.model("Course");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const courses = await Course.paginate({}, { page, limit: 10 });
    return res.json(courses);
  },

  async store(req, res) {
    const course = await Course.create(req.body);
    return res.json(course);
  },

  async show(req, res) {
    const course = await Course.findById(req.params.id);
    return res.json(course);
  },

  async update(req, res) {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(course);
  },

  async delete(req, res) {
    await Course.findByIdAndDelete(req.params.id);
    return res.send({ msg: "Registro apagado com sucesso!" });
  },
};
