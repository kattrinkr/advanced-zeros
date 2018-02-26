module.exports = function getZerosCount(number, base) {

    var primary = [];
    var tempbase = base;
    var j = 0;
    for (var i = 2; i <= base; i++)
      if ((base % i) === 0) {
        primary.push(i);
        //j++;
        base = Math.floor(base / i);
      }


    var zeroes = [];
    for (i = 0; i < primary.length; i++){
      zeroes.push(primary[i]);
    }

    for (i = 0; i < tempbase; i++){
      for (j = 0; j < primary.length; j++){
        if (((i * primary[j]) % 10) === 0)
          zeroes[j]++;
      }
    }
    var newbase = 0;
    if (primary.length === 1)
    {newbase = primary[0];}
      else
      {for (i = 0; i < primary.length-1; i++)
        if (primary[i] > primary[i+1]){
        newbase = primary[i];}
        else newbase = primary[i+1];}
      var answer = 0;
      while (number >= newbase) {
      number = Math.floor(number / newbase);
      answer = answer + number;

}

  return answer;
}
