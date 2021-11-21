let myChart = document.getElementById("myChart").getContext('2d');

let test = {
  type:'bar',
  data:{
    labels:["naniwa","aho","sasa","sasaa","sas111a"],
    datasets:[{
      label:'Name',
      data:[
        12,
        21,
        31,
        21,
        30
      ],
      backgroundColor:[
        'rgba(255,63,24,0.6)',
        'rgba(155,63,24,0.6)',
        'rgba(55,61,44,0.6)',
        'rgba(215,13,24,0.6)',
        'rgba(20,63,24,0.6)'
      ]
    }]
  },
  options:{
    title:{
      display:true,
      text: 'Test',
      fontSize:24
    },
    legend:{
      position:'right'
    }
  }
};

let hoge = new Chart(myChart,test);