// server/controllers/authController.js
const users = [];

const register = (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Please provide name, email and password" });
    }

    const userExists = users.find(u => u.email === email);
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    const newUser = { id: users.length + 1, name, email, password };
    users.push(newUser);

    res.status(201).json({
        message: "User registered successfully",
        user: { id: newUser.id, name: newUser.name, email: newUser.email }
    });
};

const login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please provide email and password" });
    }

    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({
        message: "Login successful",
        user: { id: user.id, name: user.name, email: user.email }
    });
};

module.exports = { register, login };
