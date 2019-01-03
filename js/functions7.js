const counter = function counter(startingNr) {
  let nr = startingNr;
  const obj = {
    up: function up() {
      nr += 1;
      return nr;
    },
    down: function down() {
      nr -= 1;
      return nr;
    },
  };
  return obj;
};

const revocable = function revocable(binaryFct) {
  return {
    invoke: function invoke(nr1, nr2) {
      if (binaryFct !== undefined) {
        return binaryFct(nr1, nr2);
      }
      return undefined;
    },
    revoke: function revoke() {
      binaryFct = undefined;
    },
  };
};
module.exports = {
  counter,
  revocable,
};
