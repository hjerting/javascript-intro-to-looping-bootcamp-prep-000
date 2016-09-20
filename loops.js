var forLoop = function(array) {
    for (var i = 1; i < 26; i++)
    {
        array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
    }
  return array;
}

var whileLoop = function(n) {
  while (n > 0)
  {
    console.log(--n);
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
    do
    {
        array.pop();
    }
    while (maybeTrue());
    return array;
}
