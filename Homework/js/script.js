const data = [
	{
		type: "input",
		id: "name",
		value: "",
		placeholder: "name",
	},
	{
		type: "input",
		id: "surname",
		value: "",
		placeholder: "surname",
	},
	{
		type: "date",
		id: "birthday",
		value: "",
		placeholder: "date of birth",
	},
	{
		type: "radio",
		id: "sex",
		value: "man",
		options: ["man", "woman"],
		placeholder: "sex",
	},
	{
		type: "checkbox",
		id: "time",
		value: "",
		options: ["9-10 AM", "11-102 AM", "1-2 PM", "3-4 PM", "5-6 PM"],
		placeholder: "select timeslot for assessment",
	},
];







const form = document.createElement('form')

form.classList.add('form_style')

document.body.prepend(form)






const creationForm = ((item) => {

    for(let elem of item){      

        if(elem.options){           

            const newLabel = document.createElement('label');
            newLabel.htmlFor = elem.id;
            newLabel.textContent = elem.placeholder + ': '
            form.append(newLabel)


            const checkedBlock = document.createElement('div')
            form.append(checkedBlock)


            for(let option of elem.options){

                const newInput = document.createElement('input');
                const labelOption = document.createElement('label');

                newInput.type = elem.type;
                newInput.name = elem.id;
                newInput.id = option;
                newInput.value = option;

                labelOption.htmlFor = option;
                labelOption.textContent = option + ': '

                checkedBlock.append(labelOption)
                checkedBlock.append(newInput)


            }

            
        }else{
            
            const newInput = document.createElement('input');
            const newLabel = document.createElement('label');
            
            newInput.type = elem.type;
            newInput.name = elem.id;
            newInput.id = elem.id;
            newInput.value = elem.value;
    
    
            newLabel.htmlFor = elem.id;
            newLabel.textContent = elem.placeholder + ': '
    
           
            form.append(newLabel)
            form.append(newInput)

        }
      
    }

})


creationForm(data)







let btn = document.createElement('button')

// btn.type = 'button'
btn.textContent = 'Submit'
btn.style.width = '80px'
btn.style.height = '30px'
btn.style.margin = '20px auto 0px '

form.append(btn)







function addNewData(){

    let newArr = []

    let objChecked = {id:'',value:''}

    for(let elem of form){
        

        if(elem.type == 'radio'){

            if(elem.checked){
                newArr.push({id:elem.name, value: elem.value})
            }       


        }else if(elem.type == 'checkbox'){

            objChecked.id = elem.name;

            if(elem.checked){
                
                objChecked.value += elem.value + ', '
                
            }            
            
            
        }else if(!(elem.type == 'submit')){
            newArr.push({id:elem.id, value: elem.value})
            
        }   
        
    }

    newArr.push(objChecked)
    
    console.log(newArr)  

    
    
    
}



btn.addEventListener('click', addNewData)

btn.addEventListener('click', function(event){
    event.preventDefault();
})
