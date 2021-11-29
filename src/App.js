import "./styles.css";

function createrosterItem(
  firstName,
  lastName,
  personPronouns,
  studentHS,
  favoriteColor,
  classYear
) {
  let rosterItem = (
    <div class="row">
      <div class="fName">{firstName}</div>

      <div class="lName">{lastName}</div>

      <div class="pronouns">{personPronouns}</div>

      <div class="school">{studentHS}</div>

      <div class="color">{favoriteColor}</div>

      <div class="class">{classYear}</div>
    </div>
  );
  return rosterItem;
}

export default function App() {
  let rosterList = [
    ["Mikkail", "Allen", "he/his", "Williamsburg", "blue", "2022"],
    ["Justin", "Apupalo", "he/his", "NYIT", "Blue", "2025"],
    ["Christopher", "Bonifacio", "he/his", "OCA", "Blue", "2022"],
    [
      "Angel",
      "Campoverde",
      "he/his",
      "Cristo Rey High school",
      "Purple",
      "2022"
    ]
  ];

  let dataRows = rosterList.map(createrosterItem);
  for (let roster of rosterList) {
    dataRows.push(createrosterItem(roster));
  }

  return <div>{dataRows}</div>;
}
