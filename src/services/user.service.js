export const createLigues = (divElement) => {
  const leaguesElement = divElement.querySelector('#leagues');
  if (leaguesElement) {
    const userId = window.location.hash.split('/').slice(2)[0];
    firebase.firestore().collection('leagues').where('userId', '==', userId)
    .onSnapshot((querySnapshot) => {
        let leagues = '';
        querySnapshot.forEach((doc) => {
          leagues += createItem(doc.data());
        });
        console.log(leagues);
        leaguesElement.innerHTML = `
        <div class="row row-cols-1 row-cols-md-2 g-4">
          ${leagues}
          <div class="col">
            <div class="card add">
              <i class="bi bi-plus"></i>
              <span>Nueva Liga</span>
            </div>
          </div>
        </div
        `
    });
  }
}

const createItem = (doc) => { 
  return `
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${doc.title}</h5>
          <span class="text-muted">Fecha del torneo:</span>
          <small>${doc.startDate}</small>
        </div>
      </div>
    </div>
  `
}