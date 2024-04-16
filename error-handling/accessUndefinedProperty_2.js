function accessUndefinedProperty(obj) {
  try {
    const value = obj.undefinedProperty;
    console.log('value:', value);
  } catch (error) {
    if (error instanceof TypeError) {
      console.error('TypeError:', error.message);
      const value = undefined; // Устанавливаем значение в undefined
    } else {
      throw error;
    }
  }
}

const obj1 = {definedProperty: 'Hello'};
accessUndefinedProperty(obj1);

const obj2 = {};
accessUndefinedProperty(obj2);

const obj3 = {};
obj3.undefinedProperty = 3;
accessUndefinedProperty(obj3);
