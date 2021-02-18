const mongoose = require('mongoose');

const DB_NAME = 'solar-system';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// run this file `node bin/seed.js`

const planetModel = require("../models/planet.model");

// connect to db
const planet = [
  { apiReferenceId: "Mercury", description: "Mercury is the smallest and closest planet to the sun in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the planets in the Solar System." },
  { apiReferenceId: "Venus", description: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight." },
  { apiReferenceId: "Earth", description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans but also by lakes, rivers and other fresh water, which together constitute the hydrosphere." },
  { apiReferenceId: "Mars", description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet." },
  { apiReferenceId: "Jupiter", description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined" },
  { apiReferenceId: "Saturn", description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive." },
  { apiReferenceId: "Uranus", description: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the grandfather of Zeus and father of Cronus. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System." },
  { apiReferenceId: "Neptune", description: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus." },
  { apiReferenceId: "Sun", description: "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as visible light and infrared radiation. It is by far the most important source of energy for life on Earth." },
  { apiReferenceId: "Moon", description: "The Moon is Earth's only proper natural satellite. It is one quarter the diameter of Earth making it the largest natural satellite in the Solar System relative to the size of its planet. It is the fifth largest satellite in the Solar System and is larger than any dwarf planet." },
]

planetModel.create(planet).then(planetFromDB => {

  console.log(`Created ${planetFromDB.length} planet`);
  mongoose.connection.close();

})
  .catch(err => console.log(`An error occurred while creating Planets from the DB: ${err}`));