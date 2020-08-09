const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);


function handleSubmit(event) {
    event.preventDefault();

    const gender = getSelectedValue('gender');
    const age = getInputNumberValue('age');
    const weight = getInputNumberValue('weight');
    const height = getInputNumberValue('height');
    const activityLevel = getSelectedValue('activity_level');

    const activityLevelText = getSelectedValueText('activity_level');

    if(!gender || !age || !weight || !height || !activityLevel) {
      alert("Digite a informação que falta.");
    } else {
      const tmb = Math.round((
        gender === 'female'
        ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
        : (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
      ));

      const maintenance = Math.round((tmb * Number(activityLevel)));
      const loseWeight = maintenance - 450;
      const gainWeight = maintenance + 450;

      const layout = `
      
      <button id="showButton" >Ver minhas informações pessoais</button>

      <h2>Aqui está o resultado:</h2>

      <div class="result-content">
        <ul>
          <li>
            Seu metabolismo basal é de <strong>${tmb} calorias</strong>.
          </li>
          <li>
            Para manter o seu peso você precisa consumir em média <strong>${maintenance} calorias</strong>.
          </li>
          <li>
            Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.
          </li>
          <li>
            Para ganhar peso você precisa consumir em média <strong>${gainWeight} calorias</strong>.
          </li>
        </ul>
      </div>
      `;

      const result = document.getElementById('result');

      result.innerHTML = layout;

    }
    }

function showInfo() {

  const button = document.getElementById('showButton').onclick = showInfo();

  const infoCard = document.getElementById('info');

  if(infoCard.style.display === 'none') {
    infoCard.style.display = 'block';
    const personalInfo = `
    <h2>Informações pessoais</h2>

    <div class="info-content">
      <ul>
        <li>
          Sexo: <strong>${gender === 'female' ? 'Feminino' : 'Masculino'}</strong>.
        </li>
        <li>
          Idade: <strong>${age} anos</strong>.
        </li>
        <li>
          Peso: <strong>${weight} kg</strong>.
        </li>
        <li>
          Altura: <strong>${height} centimentros</strong>.
        </li>
        <li>
        Atividade física: <strong>${activityLevelText}</strong>.
        </li>
      </ul>
    </div>
    `;  

    const resultInfo = document.getElementById('info');

    resultInfo.innerHTML = personalInfo;

  } else {
    infoCard.style.display = 'none';
  }

}

function getSelectedValueText(id) {
      const select = document.getElementById(id);
  
      return select.options[select.selectedIndex].text;
  }
    

function getSelectedValue(id) {
    const select = document.getElementById(id);

    return select.options[select.selectedIndex].value;
}


function getInputNumberValue(id) {
    return Number(document.getElementById(id).value);
}