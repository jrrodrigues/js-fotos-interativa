/* Preencha o código da função 'upDate' abaixo */
function upDate(previewPic){
    /* 1. Verifique se o evento está sendo acionado */
    console.log("Evento 'mouseover' acionado.");

    /* 2. Imprima informações sobre a variável 'previewPic' */
    console.log("Alt da imagem: " + previewPic.alt);
    console.log("Fonte da imagem: " + previewPic.src);

    /* 3. Altere o texto do elemento com o id 'image' */
    const imageDiv = document.getElementById('image');
    imageDiv.innerHTML = previewPic.alt;

    /* 4. Altere a imagem de fundo do elemento com o id 'image' */
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    /* 5. Verifique seu trabalho no console, se necessário */
    console.log("Texto da div alterado para: " + imageDiv.innerHTML);
    console.log("Imagem de fundo da div alterada para: " + imageDiv.style.backgroundImage);
}

/* Preencha o código da função 'unDo' abaixo */
function unDo(){
    /* 1. Selecione o elemento 'image' */
    const imageDiv = document.getElementById('image');

    /* 2. Atualize a imagem de fundo de volta ao valor original */
    imageDiv.style.backgroundImage = "url('')";

    /* 3. Atualize o texto de volta ao valor original */
    imageDiv.innerHTML = "Passe o mouse sobre uma imagem abaixo para exibir aqui";

    /* 4. Verifique seu trabalho no console, se necessário */
    console.log("Evento 'mouseout' acionado.");
    console.log("Visualização resetada.");
}