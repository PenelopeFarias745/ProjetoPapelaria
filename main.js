Webcam.set({
  width: 350,
  height: 300,
  image_format:'png',
  png_quality: 90
})

camera = document.getElementById("camera");
Webcam.attach("#camera");

function tirarFoto()
{
  Webcam.snap(function(data_uri)
  {
    document.getElementById("divVerificar").innerHTML = '<img id="resultado" src="'+data_uri+'">'
  });
}

function verificar()
{
  img = document.getElementById('resultado');
  classifier.classify(img, gotResult);
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6hlVD5qKl/model.json', modelLoaded);

function modelLoaded()
{
  console.log("Modelo carregado");
}

function gotResult(error, results)
{
    if(error)
    {
      console.error("erro");
    } else
    {
      console.log(results);
      document.getElementById("objeto").innerHTML = results[0].label;
      document.getElementById("precisao").innerHTML = results[0].confidence.toFixed(3);
    }
}