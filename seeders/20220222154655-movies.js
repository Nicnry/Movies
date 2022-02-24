'use strict';

require('dotenv').config()
const { Movie } = require('../models');

module.exports = {
  async up (queryInterface, Sequelize) {
    await Movie.build({
      title: "Pulp Fiction",
      type: 'Drame/Crime',
      year: '1994',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg',
      slug: 'pulp-fiction'
    }).save();

    await Movie.build({
      title: "La Planète des singes",
      type: 'SF/Aventure',
      year: '1968',
      thumbnail: 'https://static.wikia.nocookie.net/wikidoublage/images/a/a6/La_Planete_des_singes.jpg/revision/latest/scale-to-width-down/1000?cb=20200502170631&path-prefix=fr',
      slug: 'la-planete-des-singes'
    }).save();

    await Movie.build({
      title: "Le Silence des agneaux",
      type: 'Thriller/Horreur',
      year: '1991',
      thumbnail: 'https://m.media-amazon.com/images/I/71n2ua4cFGL._AC_SL1024_.jpg',
      slug: 'le-silence-des-agneaux'
    }).save();

    await Movie.build({
      title: "Princesse Mononoké",
      type: 'Animation',
      year: '2000',
      thumbnail: 'https://img.filmsactu.net/datas/films/p/r/princesse-mononoke/xl/46f88196a8ebf.jpg',
      slug: 'princesse-mononoke'
    }).save();

    await Movie.build({
      title: "Full Metal Jacket",
      type: 'Guerre/Drame',
      year: '1987',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYzc1NDkxY2YzYTgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      slug: 'full-metal-jacket'
    }).save();

    await Movie.build({
      title: "Chantons sous la pluie",
      type: 'Film musical',
      year: '1953',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Singin%27_in_the_Rain_%281952_poster%29.jpg?uselang=fr',
      slug: 'chantons-sous-la-pluie'
    }).save();

    await Movie.build({
      title: "Retour vers le futur",
      type: 'SF/Comédie',
      year: '1985',
      thumbnail: 'https://www.ecranlarge.com/uploads/image/001/202/y9bs2n5rem51ybxbu7n5paxjc6w-082.jpg',
      slug: 'retour-vers-le-futur'
    }).save();

    await Movie.build({
      title: "Titanic",
      type: 'Romance/Drame',
      year: '1997',
      thumbnail: 'https://fr.web.img2.acsta.net/pictures/19/10/25/11/18/5224976.jpg',
      slug: 'titanic'
    }).save();

    await Movie.build({
      title: "Les Temps modernes",
      type: 'Comédie/Romance',
      year: '1936',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Modern_Times_poster.jpg',
      slug: 'les-temps-modernes'
    }).save();

    await Movie.build({
      title: "Kaamelott: premier volet",
      type: 'Comédie d\'aventure',
      year: '2021',
      thumbnail: 'https://media.services.cinergy.ch/media/box1600/82fd98973d382a9d3c6016734f77bf79509ea279.jpg',
      slug: 'kaamelott-premier-volet'
    }).save();
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('movies', null, {});
  }
};
