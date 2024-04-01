//Petición POST

export const createUser = async (newUser) => {

    const result = await fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser),
    });
}
