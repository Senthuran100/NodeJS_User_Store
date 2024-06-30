/* Import the required modules */
const express = require('express');
const router = express.Router();
const { getUsers, createUser, updateUser, deleteUser } = require('./controller');

/* Define the routes for the CRUD operations using router.route() */
router.route('/users')
    .get(getUsers); // Read: Get all users

router.route('/create')
    .post(createUser); // Create: Create a new user  

router.route('/user/:id')
    .patch(updateUser) // Update: Update a user by ID
    .delete(deleteUser); // Delete: Delete a user by ID

module.exports = router;