const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  
  const toggleUserState = (allUsers, userName) => {

    return new Promise(()=>{
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
  
    console.table(updatedUsers);
  });
};
  
  const logger = updatedUsers => console.table(updatedUsers);
  
  /*
   * Сейчас работает так
   */
  //toggleUserState(users, 'Mango', logger);
  //toggleUserState(users, 'Lux', logger);
  
  /*
   * Должно работать так
   */
  toggleUserState(users, 'Mango').then();
  toggleUserState(users, 'Lux').then();