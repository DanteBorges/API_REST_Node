class HelloController {
  async index(req, res) {
    return res.json({ hello: "salve" });
  }
}

export default new HelloController();
