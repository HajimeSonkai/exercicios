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

// add keys

//   const pizza = {

//   };

//   function novachave(objeto, chave, valor) {
//   objeto[chave] = valor;
//   }
  

//   novachave(pizza, "tamanho", "medio");
//   novachave(pizza, "sabor", "marquerita");
//   novachave(pizza, "preco", "30,99");
//   novachave(pizza, "ingredientes" ,"Queijo, Molho de tomate, tomate fresco e manjericão");
//   novachave(pizza, "id", "123456");

//   console.log(pizza)

//Object.keys

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  console.log(Object.keys(student1));
  console.log(Object.keys(student1)[0]);
  console.log(" ");
  console.log(student1[Object.keys(student1)[2]]);
  console.log(" ");
  console.log(student1)
  console.log(student1['Html']);


  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for(index in arrayOfSkills){
      console.log(`${arrayOfSkills[index]} é ${student[arrayOfSkills[index]]}`);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
  listSkills(student2);

// Object.values

// const student = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkill: 'Ótimo',
//   };
  
//   const listSkillsValuesWithFor = (student) => {
//     const skills = [];
//     for(skill in student) {
//       skills.push(student[skill]);
//     }
  
//     return skills;
//   };
  
//   const listSkillsValuesWithValues = (student) => Object.values(student);
  
//   // Sem Object.values
//   console.log(listSkillsValuesWithFor(student));
  
//   // Com Object.values
//   console.log(listSkillsValuesWithValues(student));

