// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   let newKey = 'lastName';
//   const lastName = 'Ferreira';
//   customer[newKey] = lastName;
//   newKey = 'fullName';
//   const fullName = `${customer.firstName} ${customer.lastName}`;
//   customer[newKey] = fullName;
//   console.log(customer);


  const pizza = {

  };

  function novachave(objeto, chave, valor) {
  objeto[chave] = valor;
  }
  

  novachave(pizza, "tamanho", "medio");
  novachave(pizza, "sabor", "marquerita");
  novachave(pizza, "preco", "30,99");
  novachave(pizza, "ingredientes" ,"Queijo, Molho de tomate, tomate fresco e manjericão");
  novachave(pizza, "id", "123456");

  console.log(pizza)

  