const axios = require('axios');

const key = process.env.CIVIC_API_KEY;

const getReps = (req, res) => {
  const { lat, lng } = req.query;
  const address = `${lat}, ${lng}`;
  axios.get('https://www.googleapis.com/civicinfo/v2/representatives', {
    params: {
      key,
      address,
      levels: [
        'locality',
      ],
    },
  }).then((resp) => res.send(resp))
    .catch(() => res.sendStatus(400));
};

module.exports = {
  getReps,
};
