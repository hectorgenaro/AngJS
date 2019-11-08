function range (start, end, step)
{

var arrayAlmacen=[];// se divide en 2, si el inicio es menor y si el inicio es mayor
if (step==undefined) // si NO se agrega step
{


if (start<=end){// si NO se agrega step y si el inicio es menor
  for (var i=start; i<=end; i++)
  {
    arrayAlmacen.push(i);
  }
    return arrayAlmacen;

  }
  else{//si NO se agrega step y si el inicio es mayor
    for (var j=start; j>=end; j--)
    {
      arrayAlmacen.push(j);
      }
  return arrayAlmacen;
  }
}

else { // si se agrega step debe haber incrementos

  if (start<=end){// si el inicio es menor y hay step
    var k=1;
    for (var i=start; i<=end&& k<=end; i++)
    {
      arrayAlmacen.push(k);
        k=Math.abs(k+step);
    }
      return arrayAlmacen;

    }


    else{//si se agrega step y si el inicio es mayor
      var m=start;
      for (var j=start; j>=end&&m>=end; j--)
      {

        arrayAlmacen.push(m);
        m=m-Math.abs(step);
        }
    return arrayAlmacen;
    }

}

}
console.log(range (5,2,-1));//comprueba que se almaceno

function sum (arrayAlmacen)
{

  var resultadoSum=0;
  for (var j=0; j<=arrayAlmacen.length-1; j++)
  {
     resultadoSum = resultadoSum+arrayAlmacen[j];
    }
  return resultadoSum;
}
console.log(sum (range(5,2,-1)));
