"use strict";

// const { faker } = require("@faker-js/faker");

// const usersData = [];
// const numUsers = 15; // Number of users to generate

// for (let i = 0; i < numUsers; i++) {
//   usersData.push({
//     firstName: faker.person.firstName(),
//     lastName: faker.person.lastName(),
//   });
// }

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        id: "1",
        firstName: "Ashraf",
        lastName: "Hafiz",
        createdAt: "2024-04-16 10:14:53",
        updatedAt: "2024-04-16 10:14:53",
      },
      {
        id: "2",
        firstName: "Ayman",
        lastName: "Hafiz",
        createdAt: "2024-04-16 10:41:32",
        updatedAt: "2024-04-16 10:41:32",
      },
      {
        id: "3",
        firstName: "Amal",
        lastName: "Hafiz",
        createdAt: "2024-04-16 11:20:14",
        updatedAt: "2024-04-16 11:20:14",
      },
      {
        id: "4",
        firstName: "Ahmed",
        lastName: "Hafiz",
        createdAt: "2024-04-16 11:21:20",
        updatedAt: "2024-04-16 11:21:20",
      },
      {
        id: "5",
        firstName: "Amgad",
        lastName: "Hafiz",
        createdAt: "2024-04-16 11:27:52",
        updatedAt: "2024-04-16 11:27:52",
      },
      {
        id: "6",
        firstName: "Amr",
        lastName: "Ashraf",
        createdAt: "2024-04-16 11:28:12",
        updatedAt: "2024-04-16 11:28:12",
      },
      {
        id: "7",
        firstName: "Omar",
        lastName: "Ashraf",
        createdAt: "2024-04-16 11:28:57",
        updatedAt: "2024-04-16 11:28:57",
      },
      {
        id: "8",
        firstName: "Alia",
        lastName: "Ashraf",
        createdAt: "2024-04-16 11:29:59",
        updatedAt: "2024-04-16 11:29:59",
      },
      {
        id: "9",
        firstName: "Mona",
        lastName: "Rezk",
        createdAt: "2024-04-16 11:31:29",
        updatedAt: "2024-04-16 11:31:29",
      },
      {
        id: "10",
        firstName: "Mohamed",
        lastName: "Ayman",
        createdAt: "2024-04-16 11:32:09",
        updatedAt: "2024-04-16 11:32:09",
      },
      {
        id: "11",
        firstName: "Menna",
        lastName: "Ayman",
        createdAt: "2024-04-16 11:32:45",
        updatedAt: "2024-04-16 11:32:45",
      },
      {
        id: "12",
        firstName: "Zeyad",
        lastName: "Amgad",
        createdAt: "2024-04-16 11:46:47",
        updatedAt: "2024-04-16 11:46:47",
      },
      {
        id: "13",
        firstName: "Judi",
        lastName: "Amgad",
        createdAt: "2024-04-16 11:46:47",
        updatedAt: "2024-04-16 11:46:47",
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
