exports.title = {
  len: {
    args: [1, 255],
    msg: `le titre ne doit pas dépasser 255 caractères.`
  },
  notEmpty: {
    args: true,
    msg: `Le titre ne peux pas être vide.`
  }
};

exports.type = {
  len: {
    args: [1, 255],
    msg: `le titre ne doit pas dépasser 255 caractères.`
  },
  notEmpty: {
    args: true,
    msg: `Le type ne peux pas être vide.`
  }
};

exports.year = {
  isNumeric: {
    args: true,
    msg: `l'année doit en être une.`
  },
  len: {
    args: [4, 4],
    msg: `Une année a 4 chiffres.`
  },
  notEmpty: {
    args: true,
    msg: `L'année doit être renseignée.`
  }
};

exports.thumbnail = {
  isUrl: {
    args: true,
    msg: `l'image doit être une url`
  },
  notEmpty: {
    args: true,
    msg: `L'image doit être renseignée.`
  }
};

exports.slug = {
};