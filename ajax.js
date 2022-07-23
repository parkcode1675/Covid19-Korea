function callAjax(func){
    var openApi = "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson";
    var serviceKey = "fQ4PyPvZUStJeynCr5%2FiZx3JuCRgeEKjF8NPJOIvEBZQ4GzsgrW3zl%2BtkC6LHu8FU7GX0jr1KjR%2FJn0NCIUkSg%3D%3D";

    var puuUrl = "";

    var today = new Date();   

    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate() - 1;

    month = month >= 10 ? month : '0' + month

    var startDate = year + '' + month + '' + date;
    var endDate = year + '' + month + '' + date;

    puuUrl += openApi;
    puuUrl += '?serviceKey=' + serviceKey;
    puuUrl += '&startCreateDt=' + startDate;
    puuUrl += '&endCreateDt=' + endDate;

    $.ajax({
        url : puuUrl,
        method : "GET",
        dataType : "TEXT"
    }).done(function(data){

        //console.log("done");
        //console.log(data);

        func(data);

    }).fail(function(data){

        console.log("fail");
        console.log(data);

    });
}