outer:
for (const element of employees) {
    let arr = Object.keys(element);
    let output = "";
    for (const key of arr) {
        if (key === "age") {
            if (element[key] > 40) {
                continue outer;
            }
        }
        output += key + ": " + element[key] + " ";
    }
    console.log(output);
}