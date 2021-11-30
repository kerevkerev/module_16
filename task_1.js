// Создание экземпляра класса DOMParser
const parser = new DOMParser();

// XML, который пасрить
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

// парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
// получение всех DOM-нод
const listNode = xmlDOM.querySelector("list");
const studenstNode = xmlDOM.querySelectorAll("student");
const listArr = [];
// ----------------------------------------------

for (let i = 0; i < studenstNode.length; i++) {
  const first_nameNode = listNode.children[i].querySelector("first");
  const second_nameNode = listNode.children[i].querySelector("second");
  const ageNode = listNode.children[i].querySelector("age");
  const profNode = listNode.children[i].querySelector("prof");
  const nameNode = listNode.children[i].querySelector("name");
  const langAttr = nameNode.getAttribute("lang");

  listArr.push({
    name: `${first_nameNode.textContent} ${second_nameNode.textContent}`,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr,
  });
}
const result = {
  list: listArr,
};
console.log('result', result);


// --------------------------------------------------------------------------

const jsonString = {
  name: "Anton",
  age: 36,
  skills: ["Javascript", "HTML", "CSS"],
  salary: 80000,
};

let resultJSON = JSON.stringify(jsonString);
console.log(resultJSON);
