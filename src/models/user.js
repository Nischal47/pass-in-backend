module.exports = (sequelize, Sequelize) => {
    const User =  sequelize.define('User',{
        'id':{
            type: Sequelize.BIGINT,
            autoIncrement: true,
            allowNull:false,
            primaryKey:true,
        },
        'email':{
            type:Sequelize.STRING,
            allowNull: false
        },
        'password':{
            type:Sequelize.STRING,
            allowNull:false
        }
    });

    return User;
};

