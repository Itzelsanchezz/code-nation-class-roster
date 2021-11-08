import "./styles.css";

function createrosterItem(firstName, lastName, pronouns, studentHS) {
  let rosterItem = (
    <div class="row">
      <div class="name">
        {firstName} {lastName}{" "}
      </div>
      <div class="pronouns">{pronouns}</div>
    </div>
  );
  return rosterItem;
}

export default function App() {
  let rosterItem = createrosterItem(
    "Mikkail Allen",
    "he/his",
    "Williamsburg",
    "blue",
    "2022"
  );

  return rosterItem;
}
