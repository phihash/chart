let myChart = document.getElementById("myChart").getContext('2d');

let hoge = new Chart(myChart,{
  type:'bar',
  data:{
    labels:["naniwa","aho","sasa"],
    datasets:[{
      label:'Name',
      data:[
        22,
        21,
        31
      ],
      backgroundColor:'green'
    }]
  },
  options:{}
});