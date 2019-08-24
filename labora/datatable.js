(function ($) {
    $(function () {

        $('#dataTable').DataTable({
            "info": false,
            "lengthMenu": [
                [5, 10, 15, -1],
                [5, 10, 15, "All"]
            ],
            "pagingType": "full_numbers",
            "language": {
                "lengthMenu": "Mostrar _MENU_ entradas",
                "paginate": {
                    "first": "Primero",
                    "last": "Ultimo",
                    "next": "Siguiente",
                    "previous": "Antes"
                },
                "search": "Buscar",
                "searchPlaceholder": "buscar..."
            },
            "ordering": false,
            "scrollY": 200,
            "scrollX": true
        });

    }); // end of document ready
})(jQuery); // end of jQuery name spa