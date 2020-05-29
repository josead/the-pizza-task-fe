export class BaseService {
  throw(err) {
    // TODO: Make this error show in message toast.
    console.log(err);
  }

  fetch() {
    return fetch(...arguments);
  }

  post(url, data) {
    return fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
  }
}
