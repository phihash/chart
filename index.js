let myChart = document.getElementById("myChart").getContext('2d');

let hoge = new Chart(myChart,{
  type:'bar',
  data:{
    labels:["naniwa","aho","sasa","sasaa"],
    datasets:[{
      label:'Name',
      data:[
        22,
        21,
        31,
        21
      ],
      backgroundColor:'green'
    }]
  },
  options:{}
});