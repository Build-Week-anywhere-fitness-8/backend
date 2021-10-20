exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .delete()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "george",
          username: "jax",
          password: "123",
          role: "instructor",
        },
        {
          name: "irvin",
          username: "max",
          password: "123",
          role: "client",
        },
        {
          name: "monica",
          username: "fax",
          password: "123",
          role: "client",
        },
        {
          name: "chris",
          username: "doug",
          password: "123",
          role: "instructor",
        },
      ]);
    });
};
