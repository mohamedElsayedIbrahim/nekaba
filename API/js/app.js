
// variables for form inputs
var title = document.getElementById('exampleFormControlInput1')
var detials = document.getElementById('exampleFormControlTextarea1')

//vriable for button
var button = document.getElementById('systemButton')


//variable to get table body
var tableBody = document.getElementById('showData');


//init datastore  as an array
var notebookDataStore = [];


button.addEventListener('click',function(){

    var titleValue = title.value;
    var detialsValue = detials.value;

    var createNoteObject = {
        'title':titleValue,
        'details':detialsValue
    };

    notebookDataStore.push(createNoteObject);

    resetFormInput()

    readProcess()

    // localStorage.setItem('dataStore',JSON.stringify(notebookDataStore))
    
});


function resetFormInput(){
    title.value = '';
    detials.value = '';
}


function readProcess(){

    var htmlCollection = '';

    for (let index = 0; index < notebookDataStore.length; index++) {
        htmlCollection +=`<tr>
                        <th scope="row">${index}</th>
                        <td>${notebookDataStore[index].title}</td>
                        <td><button onclick="deleteElemenet(${index})" class="btn btn-danger">Delete</button> <button onclick="editElement(${index})" class="btn btn-warning">Edit</button></td>
                    </tr>
                    `
        
    }

    tableBody.innerHTML = htmlCollection
    
}


function deleteElemenet(index) {
    notebookDataStore.splice(index,1);

    readProcess()
}


function editElement(index) {
    var selectedElement = notebookDataStore[index];

    title.value = selectedElement.title;

    detials.value = selectedElement.details

    console.log(selectedElement);
    
}
