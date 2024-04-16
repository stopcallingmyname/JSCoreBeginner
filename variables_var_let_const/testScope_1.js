function testScope() {
  var xVar = 10;
  let xLet = 20;
  const xConst = 30;

  {
    var innerVar = 40;
    let innerLet = 50;
    const innerConst = 60;

    console.log('Inside block:');
    console.log('var:', xVar);
    console.log('let:', xLet);
    console.log('const:', xConst);
  }
}

testScope();

console.log('Outside block:');
console.log('xVar (var):', xVar);
console.log('xLet (let):', xLet);
console.log('xConst (const):', xConst);
