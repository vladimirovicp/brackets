module.exports = function check(str, bracketsConfig) {
    function removingUnwantedCharacters(item) { //удаление нежелательных символов
        let i = 0;
        found = false;

        while (i < bracketsConfig.length && !found) {
            item === bracketsConfig[i][0] || item === bracketsConfig[i][1] ? found = true : found = false;
            i++;
        }
        return found;
    }

    const masStr = str.split('');

    if (masStr.length % 2 !== 0) {
        return false;
    }

    let masStrFilter = masStr.filter((item) => {
        return removingUnwantedCharacters(item);
    });


    let rez = [];
    let i = 0;
    let stop = false;

    while (i < masStrFilter.length && !stop) {
        bracketsConfig.forEach((value, index) => {
            if (masStrFilter[i] === value[0] || masStrFilter[i] === value[1]) {

                if (rez.length === 0) {
                    masStrFilter[i] === value[0] ? rez.push(masStrFilter[i]) : stop = true;
                } else {

                    if (masStrFilter[i] === value[0] && value[0] != value[1]) {

                        rez.push(masStrFilter[i])
                    } else {
                        rez[rez.length - 1] === value[0] ? rez.pop() : rez.push(masStrFilter[i]);
                    }
                }
            }
        });
        i++;
    }
    return !stop && rez.length === 0 ? true : false;
}
