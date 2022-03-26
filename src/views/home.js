export const homeView = `
<main>
  <div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src="./assets/images/trophy.png" alt="" width="250">
    <h1 class="display-5 fw-bold">Bienvenidos a FIFA liga de Amigos</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Entra o registrate para crear tu liga y competir con tus amigos!.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-outline-primary btn-lg px-4 gap-3" onclick="window.location.hash = '#/login'">Entrar</button>
        <button type="button" class="btn btn-outline-success btn-lg px-4" onclick="window.location.hash = '#/register'">Registrarse</button>
      </div>
    </div>
  </div>
</main>
`;