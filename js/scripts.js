function getSentence()
{
  const aSentence = prompt("Enter a sentence.");
  const len = aSentence.length;
  let firstChar = aSentence.charAt(0);
  let lastChar = aSentence.charAt(len-1);
  return [aSentence, len, firstChar, lastChar];
}

function capitalize ([a,b,c,d])
{
  c = c.toUpperCase();
  d = d.toUpperCase();
  return c + a.substring(1,b-1) + d;
}

function reverse ([a,b,c,d]) 
{
  return d + a.substring(1,b-1) + c;
}

function addMiddletoFront([a,b,c,d]) 
{
  let lenDiv2 = Math.floor(b/2);
  return 
}

