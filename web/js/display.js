function createRow(container, studentName, samples) {
  const row = document.createElement('div');
  row.classList.add('row');

  container.appendChild(row);

  const rowLable = document.createElement('div');

  rowLable.innerHTML = studentName;
  rowLable.classList.add('rowLabel');
  row.appendChild(rowLable);

  for (let sample of samples) {
    const { id, label } = sample;


    const smapleContainer = document.createElement('div');
    smapleContainer.id = "sample_" + id;

    smapleContainer.onclick = () => {
      handleClick(sample, false)
    }

    smapleContainer.classList.add('sampleContainer');

    const smapleLabel = document.createElement('div');
    smapleLabel.innerHTML = label;
    smapleLabel.classList.add('sampleLabel');
    smapleContainer.appendChild(smapleLabel);

    const img = document.createElement('img');
    img.src = constants.IMG_DIR + '/' + id + '.png';
    img.classList.add('thumb');

    smapleContainer.appendChild(img);
    row.appendChild(smapleContainer);
  }
}

function handleClick(semple, doScroll = true) {

  if (semple == null) {
    [...document.querySelectorAll('.emphasize')].forEach((e) => {
      e.classList.remove('emphasize');
    });

    return;
  }

  const el = document.getElementById("sample_" + semple.id);

  
  if (el.classList.contains('emphasize')) {
    el.classList.remove('emphasize');
    chart.selectSample(null);
    return;
  }

  [...document.querySelectorAll('.emphasize')].forEach((e) => {
    e.classList.remove('emphasize');
  });


  el.classList.add('emphasize');

  if (doScroll) {

    el.scrollIntoView({
      behavior: 'auto',
      block: 'center',
    });

  }

  chart.selectSample(semple);

}