export const get = () => {
    return fetch(`https://reqres.in/api/users?page=1`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};