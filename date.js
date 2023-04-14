
module.exports.getDate = function ()
{
    const today = new Date();

    const currday = today.getDay(); // return number of particular day

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    //  Using Array
    // let weekday = new Array('Sunday', 'Monday', 'Tuesday',
    // 'Wednesday', 'Thursday', 'Friday', 'Saturday');

    return today.toLocaleDateString("en-US", options);
};

module.exports.getDay = function ()
{
    const today = new Date();

    const currday = today.getDay(); // return number of particular day

    const options = {
        weekday: "long"
    };
    //  Using Array
    // let weekday = new Array('Sunday', 'Monday', 'Tuesday',
    // 'Wednesday', 'Thursday', 'Friday', 'Saturday');

    return today.toLocaleDateString("en-US", options);
};
