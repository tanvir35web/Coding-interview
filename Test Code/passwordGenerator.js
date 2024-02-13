function password(obj) {
    firstChar = obj.siteName[0].toUpperCase();
    names = "";
    for (i = 1; i < obj.siteName.length; i++) {
        names += obj.siteName[i];
    }
    firstName = firstChar + names;
    passwordStructure = firstName + "#" + obj.name + "@" + obj.birthYear;

    return passwordStructure;
}

console.log(
    password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })
);
