async function loadData() {
    const response = await fetch('assets/Js/database.json');
    const data = await response.json();
    return data;
  }