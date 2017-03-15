/**
 * Created by Administrator on 2017/1/4.
 */

    function start(e){
        e.dataTransfer.setData("text",e.target.id);
    }
    function allow(e){
        e.preventDefault();
    }
    function drop(e){
        e.preventDefault();
        var data= e.dataTransfer.getData("text",e.target.id);
        e.target.appendChild(document.getElementById(data));
    }



