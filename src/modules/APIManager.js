const remoteURL = "http://localhost:5002"

export default {
  get(mode, id) {
    return fetch(`${remoteURL}/${mode}/${id}`).then(result => result.json())
  },
  getAll(mode) {
    return fetch(`${remoteURL}/${mode}`).then(result => result.json())
  },
  delete(mode, id) {
    return fetch(`http://localhost:5002/${mode}/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },
  post(mode, newData) {
    return fetch(`${remoteURL}/${mode}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newData)
    }).then(response => response.json())
  },
  update(mode, newData) {
    return fetch(`${remoteURL}/${mode}/${newData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newData)
    }).then(data => data.json());
  }
}