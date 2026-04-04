function combineUsers(...args) {
    const combinedObject = {
        users: []
    };

    args.forEach(arr => {
        combinedObject.users.push(...arr);
    });

    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const year = today.getFullYear();

    combinedObject.merge_date = `${month}/${day}/${year}`;

    return combinedObject;
}

module.exports = combineUsers;

 console.log(combineUsers(["a"], ["b"]));