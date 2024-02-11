var countMatches = function (items, ruleKey, ruleValue) {
    count = 0;
    for (i = 0; i < items.length; i++) {
        let type = items[i][0];
        let color = items[i][1];
        let name = items[i][2];

        if (ruleKey === "color") {
            if (ruleValue === color) {
                count++;
            }
        } else if (ruleKey === "type") {
            if (ruleValue === type) {
                count++;
            }
        } else if (ruleKey === "name") {
            if (ruleValue === name) {
                count++;
            }
        }
    }

    return count;
};

console.log(
    countMatches(
        [
            ["phone", "blue", "pixel"],
            ["computer", "silver", "lenovo"],
            ["phone", "gold", "iphone"],
        ],
        "color",
        "silver"
    )
);
