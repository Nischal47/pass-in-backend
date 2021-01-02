'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('Users', [
            {
                first_name: "Jhon",
                last_name: "Doe",
                email: "jhon@goodreads.com",
                email_verified: false,
                delete_flag: false,
                password: "$2y$12$t2FXz7qo/IB/I54JlKZxsOHQLMzGyh7.bfO.wdo.ODvN5ziVH95Za ", //random
                createdAt:"1/22/2020",
                updatedAt:"4/11/2020"
            },
            {
                first_name: "Jane",
                last_name: "Doe",
                email: "jane@g.co",
                email_verified: false,
                delete_flag: false,
                password: "$2y$12$t2FXz7qo/IB/I54JlKZxsOHQLMzGyh7.bfO.wdo.ODvN5ziVH95Za ",//random
                createdAt:"1/22/2020",
                updatedAt:"4/11/2020"
            },
            ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Users', null, {});
    }
};
