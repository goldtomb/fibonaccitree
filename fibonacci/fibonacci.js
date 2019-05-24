/** Jesus Barragan
/* Fibonacci Sequence
/* F(n) = F(n-1) + F(n-2)
/*
/* 
/*
/* 
/*
 */

var n = document.getElementById('n');
var result = document.getElementById('result');
var form = document.getElementById('formFib');
var series = "";
var idCounter = 0;


//onSubmit
form.addEventListener('submit', function (event) {
    if (!n.value) {
        alert('Please enter N');
    } else {
        series = "";
        var num = parseInt(n.value);
        fibonacciTree(num);
        tree.draw(OrgChart.action.init);
        seriesList(num);
        result.innerText = series;
        event.preventDefault();
    }
});

//Grab fibonacci numbers
function seriesList(n) {

    for (var i = 0; i <= n; i++) {
        series += fibonacci(i) + " ";
    }
    console.log(String(fibonacci(n)));
    console.log(series);
}

//Recursive Fibonacci Function
function fibonacci(n) {
    //Base Case
    if (n < 2) {
        return n;
    }
    //Recursive Call
    return (fibonacci(n - 1) + fibonacci(n - 2));
}

//create tree
var tree = new OrgChart(document.getElementById("orgchart"), {
    //scaleInitial:BALKANGraph.match.width,
    nodeBinding: {
        field_0: "name"
    }
});

function fibonacciTree(n, pid) {
    let id = idCounter++;
    let result;
    if (n < 2) {
        result = n;
    } else {
        result = fibonacciTree(n - 1, id) + fibonacciTree(n - 2, id);
    }
    tree.add({
        id: id,
        name: result,
        pid: pid
    });
    return result;
}
