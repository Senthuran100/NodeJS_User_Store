const users = [
    { id: 1, name: 'Hadi Soufan' },
    { id: 2, name: 'Melia Malik' },
    { id: 3, name: 'Zayn Cerny' }
];

// @desc    Get all users
// @route   GET /api/v1/users
// @access  Public
exports.getUsers = async (req, res) => {

    res.status(200).json({ success: true, count: users.length, data: users });
};

// @desc    Create new user
// @route   POST /api/v1/create
// @access  Public
exports.createUser = async (req, res) => {
    try {
        const id = users.length + 1;
        const { name } = req.body;

        users.push({ id, name });

        res.status(201).json({ success: true, user: { id, name }, message: 'User created successfully' });
    } catch (err) {
        console.error(" Error while adding the user " + err);
        res.status(500).json({ message: 'Error while adding user' });
    }

};

// @desc    Update a user
// @route   PATCH /api/v1/users/:id
// @access  Public
exports.updateUser = (req, res) => {
    const id = req.params.id;
    const { name } = req.body;

    /* Find the user with the specified ID */
    const user = users.find(user => user.id == id);

    if (user) {
        user.name = name;

        res.json({ message: 'User updated successfully', user });
    } else {

        /* If no user with the specified ID was found, send a 404 response */
        res.status(404).json({ message: `User with ID ${id} not found` });
    }
};

// @desc    Delete a user
// @route   DELETE /api/v1/users/:id
// @access  Public
exports.deleteUser = (req, res) => {
    const id = req.params.id;

    /* Find the index of the user with the specified ID */
    const index = users.findIndex(user => user.id == id);

    if (index != -1) {
        /* Remove the user from the users array */
        users.splice(index, 1);

        /* Send a JSON response with a success message */
        res.json({ message: 'User deleted successfully' });
    } else {
        /* If no user with the specified ID was found, send a 404 response */
        res.status(404).json({ message: `User with ID ${id} not found` });
    }
};