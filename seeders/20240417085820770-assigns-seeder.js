"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("assigns", [
      {
        id: "1",
        bookId: "1",
        userId: "1",
        returnStatus: "0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        bookId: "2",
        userId: "2",
        returnStatus: "0",
        createdAt: "2024-04-16 14:44:37",
        updatedAt: "2024-04-16 14:44:37",
      },
      {
        id: "3",
        bookId: "3",
        userId: "3",
        returnStatus: "0",
        createdAt: "2024-04-17 09:10:53",
        updatedAt: "2024-04-17 09:10:53",
      },
      {
        id: "4",
        bookId: "4",
        userId: "4",
        returnStatus: "0",
        createdAt: "2024-04-17 09:11:02",
        updatedAt: "2024-04-17 09:11:02",
      },
      {
        id: "5",
        bookId: "5",
        userId: "5",
        returnStatus: "0",
        createdAt: "2024-04-17 09:11:07",
        updatedAt: "2024-04-17 09:11:07",
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("assigns", null, {});
  },
};
