function showRandomJobRole(message) {
    if (message === undefined) throw new Error("No Message Found");
    console.log("Developer:\nIs a person who writes code to build an application, using a suitable programming language !")
};

module.exports = showRandomJobRole
