module.exports = (sequelize, Sequelize) => {
    const Inventory = sequelize.define("inventorys",{
        title : {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        },
        qty: {
            type: Sequelize.STRING
        },

      
    });

    return Inventory;
};