const tap = require("tap");
const is = require("./index");

tap.equal(is(17).seventeen(), true);
tap.equal(is("17").seventeen(), true);
tap.equal(is("seventeen").seventeen(), true);
tap.equal(is("Seventeen").seventeen(), true);
tap.equal(is("SEVENTEEN").seventeen(), true);
tap.equal(is("XVII").seventeen(), true);
tap.equal(is("xvii").seventeen(), true);

tap.equal(is(7).seventeen(), false);
tap.equal(is("hahaha").seventeen(), false);
tap.equal(is("wkwkw").seventeen(), false);
