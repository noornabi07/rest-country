const getData = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showData(data.slice(0, 4)));
}

const showData = countries =>{
    const countrieContainer = document.getElementById('countrie_container');
    countrieContainer.innerHTML = '';
    countries.forEach((countrie) =>{
        const myDiv = document.createElement('div');
        myDiv.innerHTML = `
        <div class="card w-full h-96 bg-base-100 shadow-lg mb-4 border-2">
        <figure class="px-10 pt-10">
          <img src="${countrie.flags.png}" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">${countrie.name.common}</h2>
          <p>Population: ${countrie.population}</p>

          <div class="card-actions">
            <label onclick = "getModalDetails('${countrie.cca2}')" for="my-modal-3" class="btn">open modal</label>
          </div>

        </div>
      </div>
        `;
        countrieContainer.appendChild(myDiv);
        console.log(countrie);
    })
}


const showAllItems = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showData(data));
}


const getModalDetails = (id) =>{
  const url = `https://restcountries.com/v2/alpha/${id}`;
  fetch(url)
  .then(res => res.json())
  .then(data => showModalDetails(data));

}

const showModalDetails = (value) =>{
  const showModatalInfo = document.getElementById('modal-info')
  const newDiv = document.createElement('div');
  newDiv.classList.add('modal');
  newDiv.innerHTML = `
  <div class="modal-box relative">
  <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <h3 class="text-lg font-bold">
        ${value.capital}
  </h3>
    <p class="py-4">${value.name}</p>
  </div>
  `;
  showModatalInfo.appendChild(newDiv);
  console.log(value);
}


getData();