/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
const DATA = "./cars.json"

async function getData(url) {
	try {
		const response = await fetch(url);
		const responseData = await response.json();
		return responseData;
	} catch (error) {
		console.log(error);
		return null;
	}
}

async function getDataFromUrl(url) {
	const data = await getData(url);
	populateCars(data);
	console.log(data);
}


function populateCars(data) {
	const output = document.getElementById("output");
    
	data.forEach((dataItem) => {
        const outputbox = document.createElement("div");
        outputbox.classList.add("outputbox");

        const brand = document.createElement("h2");
        brand.textContent = dataItem.brand;
        brand.classList.add("brand");

        const models = document.createElement("ul");
        const modelsArray = dataItem.models;
        modelsArray.forEach((dataItem) => {
            const listItem = document.createElement("li");
            listItem.textContent = dataItem;
            models.append(listItem);
        })
        models.classList.add("models");

        outputbox.append(brand, models)
        output.append(outputbox);
	});
    
}

getDataFromUrl(DATA);
