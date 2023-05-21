// Create class for each category
class Category {
    constructor(name, limit) {
        this.name = name;
        this.limit = limit;
    }
}

// Create general Budget class
class Budget {
    constructor(categories) {
        this.categories = categories;
    }

    getCategories() {
        return this.categories;
    }
}
var budget = new Budget([]);

function submitCategory() {
    var elems = document.forms["BudgetCreator"].getElementsByTagName("input");
    alert(elems[0].value);
    alert(elems[1].value);
    var name = elems[0].value;
    var limit = elems[1].value;
    var cat = new Category(name, limit);
    budget.getCategories().push(cat);
}

function submitBudget() {
    alert("Button Clicked!");
    alert(budget.getCategories().length);
    for (i = 0; i < budget.getCategories().length; i++) {
        console.log(budget.getCategories()[i].name);
        console.log(budget.getCategories()[i].limit);
    }
}
