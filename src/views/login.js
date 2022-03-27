export const loginView = `
<main class="page__form">
  <form id="login">
    <span class="form-brand">FL</span>
    <p id="form-error" class="mt-5"></p>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
      <label for="floatingInput">Correo Electrónico</label>
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
    <button class="w-100 btn btn-lg btn-outline-primary mt-3" type="submit">Ingresar</button>
    <p class="mt-5 mb-3 text-muted">&copy; juanfar - 2022</p>
  </form>
</main>
`;