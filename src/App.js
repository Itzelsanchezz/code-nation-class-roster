import "./styles.css";

function createrosterItem(firstName, lastName, pronouns, studentHS) {
  let rosterItem = (
    <div class="row">
      <div class="name">
        {firstName} {lastName}
        {}
      </div>
      <div class="pronouns">{pronouns}</div>
    </div>
  );
  return rosterItem;
}

export default function App() {
  let nameOne = createrosterItem(
    "Mikkail",
    "Allen",
    "he/his",
    "Williamsburg",
    "blue",
    "2022"
  );

  let nameTwo = createrosterItem(
    "Justin",
    "Apupalo",
    "he/his",
    "NYIT",
    "Blue",
    "2025"
  );

  let nameThree = createrosterItem(
    "Christopher",
    "Bonifacio",
    "he/his",
    "OCA",
    "Blue",
    "2022"
  );

  let nameFour = createrosterItem(
    "Angel",
    "Campoverde",
    "he/his",
    "Cristo Rey High school",
    "Purple",
    "2022"
  );

  return ({nameOne} {nameTwo} {nameThree} {nameFour});
}

