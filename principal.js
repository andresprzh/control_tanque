$(document).ready(function () {
    $("#estado").change(function (e) { 
        e.preventDefault();
        let estado=$("input[type=radio]:checked, #red_radi").val();

        let capacidad=$("#capacidad").val();
        let min=parseInt($("#min").val());
        let max=parseInt($("#max").val());
        let nivel;
        if (estado=="rojo") {
            nivel=(max/capacidad)*100;
            $(".tanque_cont").css("height",nivel+"%");
            $(".tanque_cont").css("background-color","rgb(206, 60, 60)");
        }else if(estado=="amarrillo"){
            nivel=(max/capacidad)*100-10;
            $(".tanque_cont").css("height",nivel+"%");
            $(".tanque_cont").css("background-color","rgb(231, 241, 80)");
        }else{
            nivel=(((max-min)/2)/capacidad)*100;
            $(".tanque_cont").css("height",nivel+"%");
            $(".tanque_cont").css("height","60%");
            $(".tanque_cont").css("background-color","rgb(132, 202, 138)");
        }
        console.log(nivel);
    });

    $("#nivel").change(function (e) { 
        e.preventDefault();
        let tanque=parseInt($(".tanque").css("height").slice(0,-2));
        let capacidad=$("#capacidad").val();
        let nivel=$(this).val();
        let min=parseInt($("#min").val());
        let max=parseInt($("#max").val());

        let new_nivel=(nivel/capacidad)*100;
      
        
        let color="rgb(132, 202, 138)";
        if (nivel>max || nivel<min) {
            color="rgb(206, 60, 60)";
        }
        
        $(".tanque_cont").css("height",new_nivel+"%");
        $(".tanque_cont").css("background-color",color);
    });
});