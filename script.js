var x = `<h1>POKEMONS <span class="badge badge-secondary">By Sunil Kumar Singh</span></h1>`
var div = document.createElement("div");
div.setAttribute("class", "container");
div.setAttribute("class", "pt-5");

var div1 = document.createElement("div");
div1.setAttribute("class", "container-fluid");
div.setAttribute("class", "mt-4");
div1.innerHTML = x



var table = document.createElement("table");
table.setAttribute("class", "table table-striped");

var thead = document.createElement("thead");


var tbody = document.createElement("tbody");
tbody.setAttribute("id", "tablebody");

var tr = document.createElement("tr");

var th1 = document.createElement("th");
th1.setAttribute("scope", "col");
th1.setAttribute("class", "text-primary");
th1.innerHTML = 'POKEMON'

var th2 = document.createElement("th");
th2.setAttribute("scope", "col");
th2.setAttribute("class", "text-primary");
th2.innerHTML = 'ABILITY'

var th3 = document.createElement("th");
th3.setAttribute("scope", "col");
th3.setAttribute("class", "text-primary");
th3.innerHTML = 'WEIGHT'

var th4 = document.createElement("th");
th4.setAttribute("scope", "col");
th4.setAttribute("class", "text-primary");
th4.innerHTML = 'MOVES'



tr.append(th1, th2, th3, th4)
thead.appendChild(tr)

table.append(thead, tbody);
div.appendChild(div1)
div.append(table);
document.body.append(div);

async function foo() {

  let inrow = "";

  for (let index = 1; index <= 50; index++) {
    let apii = `https://pokeapi.co/api/v2/pokemon/${index}`;


    try {

      let fetched = await fetch(apii);

      var fetchedData = await fetched.json();

    } catch (error) {
      window.alert(error)
    }

    let TotalMoves = [];
    for (let j = 0; j < fetchedData.moves.length; j++) {
      TotalMoves.push(fetchedData.moves[j].move.name);
    }







    let row = `
    <tr>
      <th scope="row" class="text-danger">P-${index}</th>
      <td>${fetchedData.abilities[0].ability.name}</td>
      <td>${fetchedData.weight}</td>
      <td>${TotalMoves}</td>
    </tr>
  `;
    inrow = inrow + row;

    tablebody.innerHTML = inrow;
  }

}

foo();
