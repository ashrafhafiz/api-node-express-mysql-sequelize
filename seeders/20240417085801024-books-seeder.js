"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("books", [
      {
        id: "1",
        title: "To Gaze Upon Wicked Gods",
        author: "Molly X. Chang",
        description: "To Gaze Upon Wicked Gods",
        createdAt: "2024-04-16 12:04:40",
        updatedAt: "2024-04-16 12:04:40",
      },
      {
        id: "2",
        title: "One of Us Knows",
        author: "Alyssa Cole",
        description: "One of Us Knows by Alyssa Cole",
        createdAt: "2024-04-16 12:05:31",
        updatedAt: "2024-04-16 12:05:31",
      },
      {
        id: "3",
        title: "Indian Burial Ground",
        author: "Nick Medina",
        description: "Indian Burial Ground by Nick Medina",
        createdAt: "2024-04-16 12:06:02",
        updatedAt: "2024-04-16 12:06:02",
      },
      {
        id: "4",
        title: "You Know What You Did",
        author: "K.T. Nguyen",
        description: "You Know What You Did by K.T. Nguyen",
        createdAt: "2024-04-16 12:06:55",
        updatedAt: "2024-04-16 12:06:55",
      },
      {
        id: "5",
        title: "Late Bloomer",
        author: "Mazey Eddings",
        description: "Late Bloomer by Mazey Eddings",
        createdAt: "2024-04-16 12:07:18",
        updatedAt: "2024-04-16 12:07:18",
      },
      {
        id: "6",
        title: "When I Think of You",
        author: "Myah Ariel",
        description: "When I Think of You by Myah Ariel",
        createdAt: "2024-04-16 12:07:53",
        updatedAt: "2024-04-16 12:07:53",
      },
      {
        id: "7",
        title: "The Poisons We Drink",
        author: "Bethany Baptiste",
        description: "The Poisons We Drink by Bethany Baptiste",
        createdAt: "2024-04-16 12:08:33",
        updatedAt: "2024-04-16 12:08:33",
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("books", null, {});
  },
};
