const Test = require('@model/test');

const TestController = {
    helloWorld(req, res) {
        res.send("Hello World")
    },

    createSomeone(req, res) {
        const { name, age } = req.body;
        const person = new Test({ name, age });
        person.save((err, person) => {
            if (err) {
                return res.status(500).send({ message: 'error' });
            }
            res.send(person);
        });
    },
};

module.exports = TestController;