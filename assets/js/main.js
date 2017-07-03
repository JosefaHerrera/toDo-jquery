//todas las funciones parten con .ready
$(document).ready(function() {

    var contadorTareas = 0;

    $('body').keyup(function(tecla) {
        // cuando presionas enter
        if (tecla.keyCode == 13) {
            // Recibe el valor ingresado en el input
            var tareainicial = $('#tareainicial').val();
            console.log(tareainicial);
            // si no ingresan tareas
            if (tareainicial === '') {
                alert('Debes ingresar una tarea');
            } else {
            	//array par guardar las tareas 
                var tareas = [];
                var casilla = $('#nueva-tarea').append('<div class="inicial-input"><input class="col s12" type="checkbox" id="newtareainicial-' + contadorTareas + '"/>' + '<label for="newtareainicial-' + contadorTareas + '">' + tareainicial + '</label>' + '<a class="right waves-effect" id="newtareainicial"><i class="material-icons tiny center">delete</i></a><br></div>');
                // Deja vacio el input luego de escribir en el
                $('#tareainicial').val('');
                tareas.push(casilla);

                // completar las tareas por id
                $('#newtareainicial-' + contadorTareas).click(function() {
                    var completado = $('#comentarioslistos').append($(this).parent());
                });

                contadorTareas++;
            }
        }

        // Remuevo las tareas con .remove
        $('a').click(function() {
            $(this).parent().remove();
        });
    });

});