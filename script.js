(function () {
  var bg = [[['#606c88'], ['#3f4c6b']],
            [['#43cea2'], ['#185a9d']],
            [['#FFA17F'], ['#00223E']],
            [['#948E99'], ['#2E1437']],
            [['#000000'], ['#53346D']],
            [['#360033'], ['#0b8793']]],
            randomNumber,
            bgColor;

  // Get random BG colors from array
  randomNumber = Math.floor(Math.random() * bg.length);
  var randPick = bg[randomNumber];

  // Add random color array to gradient builder
  function createBG(item1, item2) {
    bgColor = 'linear-gradient(to bottom, ' + item1 + ', ' + item2 + ')'
  }

  // Call create random background and apply to body;
  createBG(randPick[0], randPick[1]);
  document.body.style.background = bgColor;
}());
