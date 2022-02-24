'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('movies', [{
      title: 'Pulp Fiction',
      type: 'Drame/Crime',
      year: '1994',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg',
      slug: 'pulp-fiction'
    }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('movies', null, {});
  }
};
