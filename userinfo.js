function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((name, i) => ({
        id: i + 1,
        originalName: name,
        modifiedName: modifiedNames[i]
    }));
}
