import "./styles.css";

function createrosterItem(personInfo, i) {
  let className = "";
  if (i == 0) {
    className = "header";
  }
  let rosterItem = (
    <tr className={className}>
      <td>{personInfo.firstName}</td>
      <td>{personInfo.lastName}</td>
      <td>{personInfo.personPronouns}</td>
      <td>{personInfo.personHighschool}</td>
      <td>{personInfo.favoriteColor}</td>
      <td>{personInfo.classYear}</td>
    </tr>
  );
  return rosterItem;
}

export default function App() {
  let rosterList = [
    {
      firstName: "Name",
      lastName: " last name",
      personPronouns: " Pronouns",
      personHighschool: " Highschool",
      favoriteColor: " Fav Color",
      classYear: " Grad Year"
    },

    {
      firstName: "Mikkail",
      lastName: " Allen",
      personPronouns: " he/his",
      personHighschool: " Williamsburg",
      favoriteColor: " blue",
      classYear: " 2022"
    },
    {
      firstName: " Justin",
      lastName: " Apupalo",
      personPronouns: " he/his",
      personHighschool: " NYIT",
      favoriteColor: " Blue",
      classYear: " 2025"
    },
    {
      firstName: " Christopher ",
      lastName: " Bonifacio",
      personPronouns: " he/his",
      personHighschool: " OCA",
      favoriteColor: " Blue",
      classYear: " 2022"
    },
    {
      firstName: " Angel",
      lastName: " Campoverde",
      personPronouns: " he/his",
      personHighschool: " CristoRey",
      favoriteColor: " Purple",
      classYear: " 2022"
    },
    {
      firstName: " Mahdiya",
      lastName: " Chowdhury",
      personPronouns: " she/hers",
      personHighschool: " TYWLS",
      favoriteColor: " Pink",
      classYear: " 2023"
    },
    {
      firstName: " Diego",
      lastName: " Cruz",
      personPronouns: " he/his",
      personHighschool: " Macalester",
      favoriteColor: " red",
      classYear: " 2026"
    },
    {
      firstName: " Heber",
      lastName: " Cruz",
      personPronouns: " he/his",
      personHighschool: " John Jay",
      favoriteColor: " green",
      classYear: " 2023"
    },
    {
      firstName: " Yonatan",
      lastName: " De La Mora",
      personPronouns: " he/his",
      personHighschool: " ...",
      favoriteColor: " ...",
      classYear: " ..."
    },
    {
      firstName: " Denny",
      lastName: " Fernandez",
      personPronouns: " he/his",
      personHighschool: " Williamsburg",
      favoriteColor: " blue",
      classYear: " 2022"
    },
    {
      firstName: " Athzirir",
      lastName: " Garcia",
      personPronouns: " she/hers",
      personHighschool: " CristoRey",
      favoriteColor: " blue",
      classYear: " 2022"
    },
    {
      firstName: " Yasir",
      lastName: " Hirsi",
      personPronouns: " he/his",
      personHighschool: " Mather",
      favoriteColor: " red",
      classYear: " 2022"
    },
    {
      firstName: " Francelys",
      lastName: " Lomeli",
      personPronouns: " she/hers",
      personHighschool: " Lindblom",
      favoriteColor: " yellow",
      classYear: " 2022"
    },
    {
      firstName: " Claudia",
      lastName: " Luna-Marcelino",
      personPronouns: " she/hers",
      personHighschool: " P-Tech",
      favoriteColor: " ...",
      classYear: " 2022"
    },
    {
      firstName: " Wana",
      lastName: " Marzia",
      personPronouns: " she/hers",
      personHighschool: " P-Tech",
      favoriteColor: " Black",
      classYear: " 2022"
    },
    {
      firstName: " lilly",
      lastName: " Minchala",
      personPronouns: " she/hers",
      personHighschool: " HHSLT",
      favoriteColor: " Purple",
      classYear: " 2022"
    },
    {
      firstName: " lilly",
      lastName: " Minchala",
      personPronouns: " she/hers",
      personHighschool: " HHSLT",
      favoriteColor: " Purple",
      classYear: " 2022"
    },
    {
      firstName: " Abdulwahab",
      lastName: " Murshed",
      personPronouns: " he/his",
      personHighschool: " Brooklyn College",
      favoriteColor: " Blue",
      classYear: " 2025"
    },
    {
      firstName: " Andy",
      lastName: " Rincon",
      personPronouns: " he/his",
      personHighschool: " Uncommon Leadership Charter",
      favoriteColor: " Green",
      classYear: " 2022"
    },
    {
      firstName: " Eric",
      lastName: " Salazar",
      personPronouns: " he/his",
      personHighschool: "WCHS",
      favoriteColor: " Blue",
      classYear: " 2022"
    },
    {
      firstName: " Alejandro",
      lastName: " Sanchez",
      personPronouns: " he/his",
      personHighschool: "UIC",
      favoriteColor: " Black",
      classYear: " 2025"
    },
    {
      firstName: " Itzel",
      lastName: " Sanchez",
      personPronouns: " he/his",
      personHighschool: "Westinghouse",
      favoriteColor: " Purple",
      classYear: " 2022"
    },
    {
      firstName: " Anton",
      lastName: " Schuster",
      personPronouns: " he/his",
      personHighschool: "Latin School",
      favoriteColor: " Orange",
      classYear: " 2023"
    },
    {
      firstName: " Angel",
      lastName: " Smythe",
      personPronouns: " he/his",
      personHighschool: "...",
      favoriteColor: " ...",
      classYear: " ..."
    },
    {
      firstName: " Imani",
      lastName: " Taylor",
      personPronouns: " she/hers",
      personHighschool: "P-Tech",
      favoriteColor: " Pink",
      classYear: " 2022"
    },
    {
      firstName: " Issac",
      lastName: " Teoh",
      personPronouns: " he/his",
      personHighschool: "Queens-Technical",
      favoriteColor: " Blue",
      classYear: " 2022"
    },
    {
      firstName: " David",
      lastName: " Vital",
      personPronouns: " he/his",
      personHighschool: "...",
      favoriteColor: " ...",
      classYear: " ..."
    },
    {
      firstName: " Desean",
      lastName: " Blackburn",
      personPronouns: " he/his",
      personHighschool: "...",
      favoriteColor: " Green",
      classYear: " 2022"
    },
    {
      firstName: " Chinaza",
      lastName: " Onwukanjo",
      personPronouns: " she/hers",
      personHighschool: "...",
      favoriteColor: " Purple",
      classYear: " 2023"
    }
  ];

  let dataRows = rosterList.map(createrosterItem);

  return <table>{dataRows}</table>;
}
