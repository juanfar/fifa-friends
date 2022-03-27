export const registerView = `
<main class="page__form">
  <form id="register">
  <!-- <img class="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
    <span class="form-brand">FL</span>
    <p id="form-error" class="mt-5"></p>
    <div class="form-floating mt-4">
      <input type="text" class="form-control" id="floatingName" placeholder="Nombre" required>
      <label for="floatingName">Nombre</label>
    </div>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" required>
      <label for="floatingEmail">Correo Electrónico</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña" autocomplete="on" required>
      <label for="floatingPassword">Contraseña</label>
    </div>
    <!-- <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div> -->
    <button class="w-100 btn btn-lg btn-outline-success mt-3" type="submit">Registrarse</button>
    <p class="mt-5 mb-3 text-muted">&copy; juanfar - 2022</p>
  </form>
</main>
`;