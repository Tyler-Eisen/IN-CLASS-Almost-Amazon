import clearDom from '../utils/clearDom';
import renderToDOM from "../utils/renderToDom";

const viewAuthor- (obj) => {
  clearDom();
  console.warn(obj.firebaseKey);

  let domString = `
  <div class="mt-5 d-flex flex-wrap">
<div class="-flex flex-column">
<h1> ${obj.first_name} ${obj.last_name} ${obj. favorite ?
"<span class="badge ba-danger"><i class="fa
a_heart"
Author Email: <a href-"mailto:${obj.email}">$fobi.email}</a>
</div>;
us mergedData.js
r components
F buttons
us loginButton.js
obj. authorBooks. map( (book)
  `;
  renderToDOM{'#view', domString};
};

export default viewAuthor;
