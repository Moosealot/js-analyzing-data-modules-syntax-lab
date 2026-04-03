require('datejs');

function combineUsers(...args) {
    const combinedObject = {
        users: []
    };

    args.forEach(arr => {
        combinedObject.users.push(...arr);
    });

    combinedObject.merge_date = Date.today().toString('M/d/yyyy');

    return combinedObject;
}

module.exports = combineUsers;

// console.log(combineUsers(["a"], ["b"]));