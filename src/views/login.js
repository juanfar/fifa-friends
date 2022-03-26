export const loginView = `
<main class="page__form">
  <form>
  <!-- <img class="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
    <span class="brand">FL</span>
    <div class="form-floating mt-4">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Correo Electrónico</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Contraseña</label>
    </div>

    <!-- <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div> -->
    <button class="w-100 btn btn-lg btn-outline-primary mt-3" type="submit">Ingresar</button>
    <p class="mt-5 mb-3 text-muted">&copy; juanfar - 2022</p>
  </form>
</main>
`;