// CELSIUS

function CelToFah() {
  let Celsius1 = document.getElementsByClassName("campo")[0];
  let FahRes = document.getElementsByClassName("campo")[1];
  let celsiusNum1 = Number(Celsius1.value);
  if (celsiusNum1 == "") {
    alert("Something is wrong... Please insert a number");
  } else {
    resCF = 1.8 * celsiusNum1 + 32;
    FahRes.value = resCF.toFixed(2) + " ºF";
  }
}

function CelToKel() {
  let Celsius2 = document.getElementsByClassName("campo")[2];
  let KelRes = document.getElementsByClassName("campo")[3];
  let celsiusNum2 = Number(Celsius2.value);
  if (celsiusNum2 == "") {
    alert("Something is wrong... Please insert a number");
  } else {
    resCK = celsiusNum2 + 273.15;
    KelRes.value = resCK.toFixed(2) + " ºK";
  }
}

// FAHRENHEIT

FahToCel = () => {
  let fahrenheit1 = document.getElementsByClassName("campo")[4];
  let fahCelRes = document.getElementsByClassName("campo")[5];
  let fahrenheitNum1 = Number(fahrenheit1.value);
  if (fahrenheitNum1 == "") {
    alert("Something is wrong... Please insert a number");
  } else {
    resFC = ((fahrenheitNum1 - 32) * 5) / 9;
    fahCelRes.value = resFC.toFixed(2) + " ºC";
  }
};
FahToKel = () => {
  let fahrenheit2 = document.getElementsByClassName("campo")[6];
  let fahKelRes = document.getElementsByClassName("campo")[7];
  let fahrenheitNum2 = Number(fahrenheit2.value);
  if (fahrenheitNum2 == "") {
    alert("Something is wrong... Please insert a number");
  } else {
    resFK = ((fahrenheitNum2 - 32) * 5) / 9 + 273.15;
    fahKelRes.value = resFK.toFixed(2) + " ºK";
  }
};

// KELVIN

KelToCel = () => {
  let kelvin1 = document.getElementsByClassName("campo")[8];
  let KelCelRes = document.getElementsByClassName("campo")[9];
  let KelvinNum1 = Number(kelvin1.value);
  if (KelvinNum1 == "") {
    alert("Something is wrong... Please insert a number");
  } else {
    resKC = KelvinNum1 - 273.15;
    KelCelRes.value = resKC.toFixed(2) + " ºC";
  }
};

KelToFah = () => {
  let kelvin2 = document.getElementsByClassName("campo")[10];
  let KelFahRes = document.getElementsByClassName("campo")[11];
  let KelvinNum2 = Number(kelvin2.value);
  if (KelvinNum2 == "") {
    alert("Something is wrong... Please insert a number");
  } else {
    resKF = ((KelvinNum2 - 273.15) * 9) / 5 + 32;
    KelFahRes.value = resKF.toFixed(2) + " ºF";
  }
};
