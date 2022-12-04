// fetch("https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port").then(
//   (response) =>
//     response.json().then(({ data }) => {
//       console.log(data);
//     })
// );


fetch("https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));