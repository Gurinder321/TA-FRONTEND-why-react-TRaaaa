let input = document.querySelector(`input[type="text"]`);
let rootElm = document.querySelector('.movies_list');

let allMovies = [
  {
    name: 'Forest Gump',
    watched: false,
  },
  {
    name: 'Inception',
    watches: true,
  },
];

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = '';
    createMovieUI(allMovies, rootElm);
  }
});

function handleChange(event) {
  let id = event.target.id;

  allMovies[id].watched = !allMovies[id].watched;
  createMovieUI(allMovies, rootElm);
}

function createMovieUI(data, root) {
  root.innerHTML = '';
  data.forEach((movie, i) => {
    let li = createElement(
      'li',
      null,
      createElement('label', { for: i }, movie.name),
      createElement(
        'button',
        { id: i, onClick: handleChange },
        movie.watched ? 'Watched' : 'To Watch'
      )
    );

    rootElm.append(li);
  });
}

createMovieUI(allMovies, rootElm);

function createElement(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith('data-')) {
      element.setAttribute(key, attr[key]);
    } else if (key.startsWith('on')) {
      let eventType = key.replace('on', '').toLowerCase();
      element.addEventListener(eventType, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }
  children.forEach((child) => {
    if (typeof child === 'object') {
      element.append(child);
    }
    if (typeof child === 'string') {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element;
}
