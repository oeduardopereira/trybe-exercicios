const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const getDragonDamage = () => {
    let min = Math.ceil(15);
    let max = Math.floor(dragon.damage);
    return Math.floor(Math.random() * (max - min + 1) + min);
};  

const getWarriorDamage = () => {
    let min = Math.ceil(warrior.strength);
    let max = Math.floor(warrior.strength * warrior.weaponDmg);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const getMageDamage = () => {
    let damage = 0;
    let mana = mage.mana;
    if (mana < 15) {
            return 'Não possui mana suficiente';
        } else {
            mana -= 15;
            let min = Math.ceil(mage.intelligence);
            let max = Math.floor(mage.intelligence * 2);
            damage = Math.floor(Math.random() * (max - min + 1) + min);
        }
    return {
        turnDamage: damage,
        manaRemain: mana,
    }
};

const gameActions = {
    // Crie as HOFs neste objeto.
    warriorTurn: (getWarriorDamage) => {
        const warriorDamage = getWarriorDamage();
        warrior.damage = warriorDamage;
        dragon.healthPoints -= warriorDamage;
    },
    mageTurn: (getMageDamage) => {
        const mageDamage = getMageDamage();
        mage.damage = mageDamage.turnDamage;
        mage.mana = mageDamage.manaRemain;
        dragon.healthPoints -= mageDamage.turnDamage;
    },
    dragonTurn: (getDragonDamage) => {
        const dragonDamage = getDragonDamage();
        dragon.damage = dragonDamage;
        mage.healthPoints -= dragonDamage;
        warrior.healthPoints -= dragonDamage;
    },
    turnResults: () => battleMembers,
  };

  gameActions.warriorTurn(getWarriorDamage);
  gameActions.mageTurn(getMageDamage);
  gameActions.dragonTurn(getDragonDamage);
  console.log(gameActions.turnResults());
