class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "London";
  }

  populateUI(data) {
    //de-structure vars

    //add them to inner HTML

    this.uiContainer.innerHTML = `
        
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
            <h5 class="card-title">${data.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Current temperature: ${data.main.temp} °C.</h6>
            <h6 class="card-subtitle mb-2 text-muted">Feels like: ${data.main.feels_like} °C.</h6>   
            <h6 class="card-subtitle mb-2 text-muted">Humidity: ${data.main.humidity}%.</h6>
            <h6 class="card-subtitle mb-2 text-muted">Pressure: ${data.main.pressure}hPa. </h6>      
            <p class="card-text ">Weather conditions: ${data.weather[0].description}</p>
                
            </div>
        </div>
        
        
        `;
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}