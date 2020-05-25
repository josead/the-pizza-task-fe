export class BaseService {
  throw(err) {
    // TODO: Make this error show in message toast.
    console.log(err);
  }

  fetch() {
    return fetch(...arguments);
  }
}
