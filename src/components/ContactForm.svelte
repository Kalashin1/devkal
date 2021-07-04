<form id="contactForm" data-sb-form-api-token="API_TOKEN">
  <div class="form-floating">
    <input
      class="form-control"
      id="name"
      type="text"
      placeholder="Enter your name..."
      data-sb-validations="required"
    />
    <label for="name">Name</label>
    <div class="invalid-feedback" data-sb-feedback="name:required">
      A name is required.
    </div>
  </div>
  <div class="form-floating">
    <input
      class="form-control"
      id="email"
      type="email"
      placeholder="Enter your email..."
      data-sb-validations="required,email"
    />
    <label for="email">Email address</label>
    <div class="invalid-feedback" data-sb-feedback="email:required">
      An email is required.
    </div>
    <div class="invalid-feedback" data-sb-feedback="email:email">
      Email is not valid.
    </div>
  </div>
  <div class="form-floating">
    <input
      class="form-control"
      id="phone"
      type="tel"
      placeholder="Enter your phone number..."
      data-sb-validations="required"
    />
    <label for="phone">Phone Number</label>
    <div class="invalid-feedback" data-sb-feedback="phone:required">
      A phone number is required.
    </div>
  </div>
  <div class="form-floating">
    <textarea
      class="form-control"
      id="message"
      placeholder="Enter your message here..."
      style="height: 12rem"
      data-sb-validations="required"
    />
    <label for="message">Message</label>
    <div class="invalid-feedback" data-sb-feedback="message:required">
      A message is required.
    </div>
  </div>
  <button
    class="btn btn-primary text-uppercase disabled"
    id="submitButton"
    type="submit">Send</button
  >
</form>
